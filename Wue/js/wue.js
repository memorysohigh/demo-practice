let compilerUtil = {
    getValue(vm, attr) {
        return vm.$data[attr] || attr.split('.').reduce((data, current) => {
            return data[current.trim()]
        }, vm.$data)
    },
    model(node, attr, vm) {
        new Watcher(vm, attr, (newValue, oldeValue) => {
            node.value = newValue
        })
        node.value = this.getValue(vm, attr)
    },
    html(node, attr, vm) {
        new Watcher(vm, attr, (newValue, oldeValue) => {
            node.innerHTML = newValue
        })
        node.innerHTML = this.getValue(vm, attr)
    },
    text(node, attr, vm) {
        new Watcher(vm, attr, (newValue, oldeValue) => {
            node.innerHTML = newValue
        })
        node.innerText = this.getValue(vm, attr)
    },
    content(node, attr, vm) {
        let reg = /{{2}(.+?)}{2}/gi
        node.textContent = node.textContent.replace(reg, (...arg) => {
            new Watcher(vm, arg[1], (newValue, oldeValue) => {
                node.textContent = newValue
            })
            return this.getValue(vm, arg[1])
        })
    }
}

class Wue {
    constructor(options) {
        if (this.isElement(options.el)) {
            this.$el = options.el
        } else {
            this.$el = document.querySelector(options.el)
        }
        this.$data = options.data()

        if (this.$el) {
            //给外界传进来的数据添加get set方法
            new Observer(this.$data)
            new Compiler(this)
        }
    }

    //判断是不是一个元素
    isElement(node) {
        return node.nodeType === 1
    }
}

class Compiler {
    constructor(vm) {
        this.vm = vm
        let fragment = this.node2fragment(vm.$el)
        this.buildTemplate(fragment)
        document.body.appendChild(fragment)
    }

    node2fragment(el) {
        let fragment = document.createDocumentFragment()
        let node = el.firstChild
        while (node) {
            fragment.appendChild(node)
            node = el.firstChild
        }
        return fragment
    }

    buildTemplate(fragment) {
        let nodeList = [...fragment.childNodes]
        nodeList.forEach(node => {
            if (this.vm.isElement(node)) {
                //是一个元素
                this.buildElement(node)
                this.buildTemplate(node)
            } else {
                //wen本节点
                this.buildText(node)
            }
        })
    }

    buildElement(node) {
        let attrs = [...node.attributes]
        attrs.forEach((attr) => {
            let {name, value} = attr
            if (name.startsWith('v-')) {
                let [, contentName] = name.split('-')
                compilerUtil[contentName](node, value, this.vm)
            }
        })
    }

    buildText(node) {
        let content = node.textContent
        let reg = /{{2}.+?}{2}/gi
        if (reg.test(content)) {
            compilerUtil.content(node, content, this.vm)
        }
    }
}

class Observer {
    constructor(data) {
        this.observer(data)
    }

    observer(obj) {
        if (obj && typeof obj === 'object') {
            for (let key in obj) {
                this.defineReactive(obj, key, obj[key])
            }
        }
    }

    defineReactive(obj, attr, value) {
        this.observer(value)
        let dep = new Dep()
        Object.defineProperty(obj, attr, {
            get() {
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set: (newValue) => {
                if (value !== newValue) {
                    this.observer(newValue)
                    value = newValue
                    dep.notify()
                    console.log('监听到数据变化，需要更新UI')
                }
            }
        })
    }

}

class Watcher {
    constructor(vm, attr, cb) {
        this.attr = attr
        this.cb = cb
        this.vm = vm
        this.oldValue = this.getOldValue()
    }

    getOldValue() {
        Dep.target = this
        let oldValue = compilerUtil.getValue(this.vm, this.attr)
        Dep.target = null
        return oldValue;
    }

    update() {
        let newValue = compilerUtil.getValue(this.vm, this.attr)
        if (this.oldValue !== newValue) {
            this.cb(newValue, this.oldValue)
        }
    }
}

class Dep {
    constructor() {
        this.subList = []
    }

    addSub(watcher) {
        this.subList.push(watcher)
    }

    notify() {
        this.subList.forEach(watcher => {
            watcher.update()
        })
    }
}



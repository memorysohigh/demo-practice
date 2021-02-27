class MVue {
    constructor(options) {
        this.$options = options;
        this.$data = options.data();
        this.$el = options.el
        if (this.$el) {
            // 实例化一个捕抓器
            new Observer(this.$data)
            // 实例化一个指令解析器
            new Compile(this.$el, this)
            this.proxyData(this.$data)
        }
    }
    proxyData(data) {
        for (const key in data) {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set(newVal) {
                    if (data[key] == newVal) {
                        return
                    } else {
                        data[key] = newVal
                    }
                }
            })
        }
    }
}

const compileUtil = {
    getVal(expr, vm) {
        return expr.split('.').reduce((pre, current) => {
            return pre[current];
        }, vm.$data)
    },
    setVal(expr, vm, inputVal) { //person.name
        let a = expr.split('.')
        let b = a.pop()
        a.reduce((pre, current) => {
            return pre[current];
        }, vm.$data)[b] = inputVal
    },
    getContentVal(expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(args[1], vm)

        })
    },
    text(node, expr, vm) { //v-text
        let value
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                new Watcher(vm, args[1], () => {
                    this.updater.textUpater(node, this.getContentVal(expr, vm))
                })
                return this.getVal(args[1], vm)

            })
        } else {
            value = this.getVal(expr, vm) //vm.$data[expr]
        }
        this.updater.textUpater(node, value)
    },
    html(node, expr, vm) { //v-html
        const value = this.getVal(expr, vm) //vm.$data[expr]
        new Watcher(vm, expr, newVal => {
            this.updater.htmlUpater(node, newVal)
        })
        this.updater.htmlUpater(node, value)

    },
    model(node, expr, vm) { //v-model
        const value = this.getVal(expr, vm)
        // 数据更改视图
        new Watcher(vm, expr, newVal => {
            this.updater.modelUpdater(node, newVal)
        })
        // 视图=>数据=>视图  输入框里输入msg=>改变data里的msg数据=>改变页面里的msg数据
        node.addEventListener('input', (e) => {
            // 设置值
            this.setVal(expr, vm, e.target.value);

        })
        this.updater.modelUpdater(node, value)
    },
    on(node, expr, vm, eventName) { //v-on:....
        let fn = vm.$options.methods && vm.$options.methods[expr]
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    updater: {
        textUpater(node, value) {
            node.textContent = value
        },
        htmlUpater(node, value) {
            node.innerHTML = value
        },
        modelUpdater(node, value) {
            node.value = value;
        }
    }
}




// 指令解析器
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // console.log(this.el);
        // 1、获取文档碎片对象，放入内存中减少页面回流和重绘
        const fragment = this.creatFragment(this.el);
        // console.log(fragment)
        // 2、编译模板
        this.compile(fragment)
        // 3、把文档碎片添加到根元素中
        this.el.appendChild(fragment)
    }

    //编译模板
    compile(fragment) {
        const childNodes = fragment.childNodes;
        [...childNodes].forEach((node) => {
            // console.log(node);
            // 元素节点
            if (this.isElementNode(node)) {
                // console.log(node);
                this.compileElement(node)
            } else {
                // 文本节点
                this.compileText(node)
            }
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })

    }
    // 编译元素节点的指令
    compileElement(node) {
        const attributes = node.attributes;
        [...attributes].forEach(attr => {
            // console.log(attr);
            const {
                name,
                value
            } = attr;
            if (this.isDirective(name)) { //v-text v-model v-on:click....
                const [, dirctive] = name.split('-') //text model on:click
                const [dirName, eventName] = dirctive.split(':'); //text model on
                //更新数据 数据驱动视图（初始化页面）
                compileUtil[dirName](node, value, this.vm, eventName) //节点，v-text=‘123’的值，实例拿data

                //删除标签上的指令
                node.removeAttribute('v-' + dirctive)
            } else if (this.isEventName(name)) {
                let [, eventName] = name.split('@')
                compileUtil['on'](node, value, this.vm, eventName)
            }
        })
    }

    // 文本节点
    compileText(node) {
        const content = node.textContent;
        if (/\{\{(.+?)\}\}/.test(content)) {
            compileUtil['text'](node, content, this.vm)
        }
    }
    isEventName(attrName) {
        return attrName.startsWith('@')
    }
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }

    // 判断el是不是元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }

    // 创建文档碎片
    creatFragment(el) {
        const f = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild);
        }
        return f;
    }

}
class Watcher {
    constructor(vm, expr, callback) {
        this.vm = vm
        this.expr = expr
        this.cb = callback
        this.oldVal = this.getOldVal()
    }
    getOldVal() {
        Dep.target = this
        const oldVal = compileUtil.getVal(this.expr, this.vm)
        Dep.target = null
        return oldVal
    }
    update() {
        const newVal = compileUtil.getVal(this.expr, this.vm)
        if (newVal !== this.oldVal) {
            this.cb(newVal)
        }
    }
}

class Dep {
    constructor() {
        this.subs = []
    }
    //dep收集观察者（watcher）
    addSub(watcher) {
        this.subs.push(watcher)
    }
    //通知watcher去更新视图
    notify() {
        this.subs.forEach(w => w.update())
    }
}

class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.definReactive(data, key, data[key])
            })
        }
    }
    definReactive(obj, key, value) {
        this.observer(value);
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            configurable: false,
            enumerable: true,
            get() {
                // 订阅数据变化时，往Dep中添加watcher
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set: (newval) => {
                this.observer(newval)
                if (newval != value) {
                    value = newval
                }
                //告诉Dep去通知watcher变化
                dep.notify()
            }
        })
    }
}
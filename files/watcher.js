const target = [1, 2],
    t2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

function watcher(zxArr, callback) {
    return new Proxy(zxArr, {
        set(target, key, value, receiver) {
            target[key] = value
            callback(key, value, receiver)
        }
    })
}

function run(key, value, proxy) {
    console.log(`${value}开始执行`);
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(`**************${value}执行完毕`);
            if (t2.length > 0) {
                proxy[key] = t2.shift()
            }
        }, 10000 * Math.random());
    })
}

let prox = watcher(target, run)


//遍历执行数组，让数组中的每个异步任务都开始执行，某一刻某个异步任务执行完成
// 替换掉执行数组里的这个异步任务，因为执行数组设置了Proxy
// 替换时触发set函数，将值替换了，并且要让新换进来的异步任务开始执行，就得回调
target.forEach((item, index) => run(item, index, prox))
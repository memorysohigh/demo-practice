self.onmessage = ({
    data
}) => {
    const view = new Uint32Array(data);
    // 执行 100 万次加操作
    for (let i = 0; i < 1116; ++i) {
        view[0] += 1;
    }
    self.postMessage(null);
};

Array.prototype.forEachSync = async function (callback) {
    const length = this.length;
    let k = 0;
    while (k < length) {
        if (k in this) {
            const kValue = this[k];
            await callback(kValue, k, this);
        }
        k++;
    }
};
// let arr = [1, 2, 3, 4, 5, 6];
[1, 2, 3, 4, 5, 6].forEachSync((item, key) => {
    return new Promise((resolve, reject) => {
        console.log(item, key)
        resolve()
    })
})
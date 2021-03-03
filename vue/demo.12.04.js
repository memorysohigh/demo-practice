let fun = () => {
    let pro = new Promise((rej, resolve) => {
        rej('ok')
    })
    return (pro)
}

fun().then((success) => {}, (res) => {
    console.log(res);
})
let p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('我是结果')
    }, 1000)
})
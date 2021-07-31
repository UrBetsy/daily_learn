let one = function () {
    return new Promise((resolve, rejecrt) => {
        setTimeout(() => {
            resolve('第一个')
        }, 2000)
    })
}


let two = function () {
    return new Promise((resolve, rejecrt) => {
        setTimeout(() => {
            resolve('第二个')
        }, 2000)
    })
}

async function execute() {
    let haha = await one()
    let res = await two()
    console.log(haha, res)
}

execute()
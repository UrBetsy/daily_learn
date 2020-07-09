/**
 * 利用await实现一个sleep
 */
async function exec() {
    await sleep(300)
    console.log('hahha')
}

function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}
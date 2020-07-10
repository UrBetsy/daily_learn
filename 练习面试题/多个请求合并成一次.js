let hasFetch = false
let queue = []
function fetch(url) {
    if (hasFetch) {
        return new Promise((reslove, reject) => {
            queue.push((res) => {
                reslove(res)
            })
        })
    }

    return new Promise((resolve, reject) => {
        console.log('这里是去是请求了');
        hasFetch = true
        setTimeout(() => {
            console.log('请求回来了')
            let res = '我是请求结果'
            resolve(res)
            while(queue.length) {
                queue.shift()(res);
            }
            hasFetch = false
        }, 1000)
    })
}
let url = 'hha'
fetch(url).then(res => { console.log('我是请求1', res)})
fetch(url).then(res => { console.log('我是请求2', res)})
fetch(url).then(res => { console.log('我是请求3', res)})
fetch(url).then(res => { console.log('我是请求4', res)})
fetch(url).then(res => { console.log('我是请求5', res)})
fetch(url).then(res => { console.log('我是请求6', res)})



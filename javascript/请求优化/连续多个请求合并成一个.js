let pendingArr = []
var hasFetch = false
function fetchRequest() {
    if (hasFetch) {
        let p = new Promise(resolve => {
            pendingArr.push(res => {
                resolve(res)
            })
        })
        return p;
    }
    
    hasFetch = true;

    return new Promise(resolve => {
        console.log('我要去请求了')
        setTimeout(() => {
            resolve('haha')
        }, 1000)
    }).then(res => {
        while(pendingArr.length > 0) {
            pendingArr.shift()(res)
        }
        return res;
    }).catch(err => {
        console.log('报错')
    })
}

fetchRequest().then(res => console.log('第一个请求', res))
fetchRequest().then(res => console.log('第二个请求', res))
fetchRequest().then(res => console.log('第三个请求', res))
fetchRequest().then(res => console.log('第四个请求', res))
fetchRequest().then(res => console.log('第五个请求', res))
fetchRequest().then(res => console.log('第六个请求', res))



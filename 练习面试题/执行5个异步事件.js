function handleFetchQueue(requestList, max = 5) {
    var ReqQueue = 0
    let i = 0;
    function MyReuqest(url) {
        let req = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(url)
            }, 2000)
        }).then(res => {
            console.log('执行结束', res)
            console.log(ReqQueue)
            -- ReqQueue
            let next = requestList[++i]
            next && MyReuqest(next)
        })
        if ( ++ ReqQueue < max) {
            let next = requestList[++i]
            next && MyReuqest(next)
        }
    }
    MyReuqest(requestList[i]);
}

let requestList = Array.from({length: 10}, (v, k) => k)
console.log(requestList)

let max = 5;
handleFetchQueue(requestList, max)

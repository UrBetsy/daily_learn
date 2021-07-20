
function createPoll(fn) {
    return (duration = 500, count = 10, ...arg) => {
        return new Promise((resolve, reject) => {
            async function poll(fn, count, resolve, reject) {
                const res = await fn(...arg);
                if (res) {
                    return resolve(res);
                }
                if (count === 0) {
                    return reject(res);
                }
                return setTimeout(() => { poll(fn, --count, resolve, reject)}, duration);
            }
            poll(fn, count, resolve, reject);
        })
    }
}

function fetchDataReq(params) {
    console.log('假装这里是个请求', params);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = {
                result: -1,
                data: '我是请求结果'
            }
            resolve(res);
        }, 1000)
    })
}

async function fetchData(params) {
    const res = await fetchDataReq(params);
    if (res.result ===1) {
        return res.data;
    }
    return false;
}

const pollFunction = createPoll(fetchData);

async function handleFn() {
    try {
        await pollFunction(500, 10, [123, 458]);
        console.log('成功');
    } catch (error) {
        console.log('超时');
    }
}

handleFn();
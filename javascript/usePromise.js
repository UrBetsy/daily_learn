function fn(params) {
    return new Promise((resolve, reject) => {
        // 这里面会执行一个异步的任务
        if (params === 1) {
            resolve(params);
        } else {
            reject(params);
        }
    });
}

async function handleFn() {
    try {
        const res = await fn(2);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

handleFn();
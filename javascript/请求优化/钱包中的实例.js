if (isOpenIdPending) {
    return new Promise((resolve) => {
      openIdPendingList.push((openId) => {
        resolve(openId);
      });
    })
}

isOpenIdPending = true;
return app.wx2promiseify(wx.login)
.then(res => res.code)
.then(code =>
    app.request()
    .get('/openid')
    .query({
        code,
        appid: app.appId,
    })
    .end()
    .then(res => {
        app.$user.openId = app.$openId = res.body.openid
        app.$user.unionId = app.$unionId = res.body.unionid
        store.update('user', app.$user)
        isOpenIdPending = false;
        while (openIdPendingList.length > 0) {
        openIdPendingList.shift()(app.$openId);
        }

        return app.$openId
    })
    .catch(err => {
        throw err
    }),
    )
.catch(err => {
    throw err
})
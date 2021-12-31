/** callback */
function fetchData(callback) {
    setTimeout(() => {
        callback('settimeout')
    }, 700)
}

it('测试 fetchData 返回值', (done) => {
    fetchData((data) => {
        expect(data).toBe('settimeout')
        done()
    })
})

/** promise */
function fetchDataWithPromise() {
    return Promise.resolve('promise async')
}
it('测试 promise fetchData', () => {
    return fetchDataWithPromise().then(data => {
        expect(data).toBe('promise async')
    })
})

function fetchDataWithPromiseReject() {
    return Promise.reject('promise async reject')
}
it('测试 promise fetchData reject', () => {
    return fetchDataWithPromiseReject().catch(err => {
        expect(err).toMatch('reject')
    })
})
//  .resolves | .rejects
it('测试 .resolves | .rejects', () => {
    expect(fetchDataWithPromise()).resolves.toBe('promise async')
    expect(fetchDataWithPromiseReject()).rejects.toBe('promise async reject')
})

/** async */
function fetchDataWithAsync() {
    return Promise.resolve('async function')
}
it('测试 async function', async () => {
    const result = await fetchDataWithAsync()
    expect(result).toBe('async function')
    await expect(fetchDataWithAsync()).resolves.toMatch(/async/)
})


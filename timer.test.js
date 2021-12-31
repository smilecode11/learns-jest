function getUser(callback) {
    setTimeout(() => callback(12), 200)
}

function getInfoWithDouble(callback) {
    setTimeout(() => {
        callback(12)
        setTimeout(() => {
            callback(24)
        }, 1500)
    }, 200)

}

jest.useFakeTimers()
//  jest.runAllTimers
it("测试Jest timer runAllTimers", () => {
    const callback = jest.fn()
    getUser(callback)
    expect(callback).not.toHaveBeenCalled() //  callback 是否被调用

    jest.runAllTimers() //  运行全部 timer
    expect(callback).toHaveBeenCalled()
    expect(callback.mock.calls[0][0]).toBe(12)
    // console.log(callback.mock.calls)
})

//  单次执行 timer
it("测试 Jest timer", () => {
    const callback = jest.fn()
    getInfoWithDouble(callback)
    expect(callback).not.toHaveBeenCalled()
    // jest.runAllTimers() //  运行全部 timer
    // expect(callback).toHaveBeenCalled()
    // expect(callback).toHaveBeenCalledTimes(2)
    jest.runOnlyPendingTimers() //  运行一次 timer
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenLastCalledWith(12) //  最后一次调用携带参数
    jest.runOnlyPendingTimers()
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenLastCalledWith(24)
})

//  时间进度
it("测试 advanceTimersByTime", () => {
    const callbck = jest.fn(info => info)
    getInfoWithDouble(callbck)
    expect(callbck).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    expect(callbck).toHaveBeenCalled()
    expect(callbck).toHaveBeenLastCalledWith(12)
    jest.advanceTimersByTime(500)
    expect(callbck).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(2000)
    expect(callbck).toHaveBeenCalledTimes(2)
    expect(callbck).toHaveBeenLastCalledWith(24)
    console.log(callbck.mock.calls, callbck.mock.results)
})
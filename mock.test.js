function forEach(items, callback) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

function mockTest(bool, callback) {
    if (bool) {
        return callback(45)
    }
}

it('测试 Mock.fn', () => {
    const mockCallback = jest.fn(data =>  data * 2)
    forEach([1, 2], mockCallback)
    //  传参
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe(1)
    expect(mockCallback.mock.calls[1][0]).toBe(2)
    //  返回
    expect(mockCallback.mock.results[0].value).toBe(2)
    expect(mockCallback.mock.results[1].value).toBe(4)

    const mockCb1 = jest.fn()
    // mockReturnValueOnce mockReturnValue
    mockCb1.mockReturnValueOnce(10).mockReturnValueOnce('250').mockReturnValue(true)
    console.log(mockCb1(),mockCb1(),mockCb1(),mockCb1())  //  10 250 true true

    const mockCb2 = jest.fn()

    mockTest(true, mockCb2)
    mockTest(true, mockCb2.mockReturnValueOnce(250))
    expect(mockCb2).toHaveBeenCalled()  //   toHaveBeenCalled 是否被调用
    expect(mockCb2).toHaveBeenCalledWith(45)    //  调用时传递的参数
    expect(mockCb2).toHaveBeenCalledTimes(2)    //  调用次数
    console.log(mockCb2.mock.calls)
    console.log(mockCb2.mock.results)
})




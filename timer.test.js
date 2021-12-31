function getUser(callback) {
    setTimeout(() => callback(12), 1500)
}

it("测试Jest timer", () => {
    const callback = jest.fn()
})
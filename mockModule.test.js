const axios = require('axios')
jest.mock('axios')


//  测试全局 mocks
it("测试 __mockes__", () => {
    axios.get('/api/user/getInfo').then(resp => {
        // console.log(resp)
    })
    axios.post('/api/user/getInfo').then(resp => {
        // console.log(resp)
    })
})

//  修改实现 mockImplementation
it("测试 mockImplementation", () => {
    axios.get.mockImplementation(() => {
        return Promise.resolve({
            data: {
                userName: "Chen xin",
                age: 26
            }
        })
    })
    axios.get("/api/user/getInfo").then(resp => {
        expect(resp.data.userName).toBe('Chen xin')
        expect(resp.data).toEqual({
            age: 26,
            userName: "Chen xin"
        })
    })
})

//  修改返回值 mockReturnValue
it("测试 mockReturnValue", () => {
    axios.get.mockReturnValue(Promise.resolve({
        data: {
            userName: "Chen xin",
            age: 26
        }
    }))
    axios.get('/api/user/getInfo').then(resp => {
        expect(resp.data.userName).toBe('Chen xin')
        expect(resp.data).toEqual({
            age: 26,
            userName: "Chen xin"
        })
    })
})

//  修改返回值 mockResolvedValue
it("测试 mockResolvedValue", async () => {
    axios.get.mockResolvedValue({
        data: {
            userName: "Chen xin",
            age: 26
        }
    })

    const {
        data:userInfo
    } = await axios.get('/api/user/getInfo')
    expect(userInfo.userName).toBe('Chen xin');
    expect(userInfo).toEqual({
        age: 26,
        userName: "Chen xin"
    })
})

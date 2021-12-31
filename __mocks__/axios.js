/**
 * 全局 mock axios 库
 */
const axios = {
    get: jest.fn(() => Promise.resolve({
        data: {
            userName: "Global Chen xin"
        },
        method:"GET"
    })),
    post: jest.fn(() => Promise.resolve({
        data: {
            userName: "Global Chen xin"
        },
        method:"POST"
    }))
}

module.exports = axios
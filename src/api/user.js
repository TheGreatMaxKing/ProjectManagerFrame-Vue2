import {KellyServer,MockServer,LucasServer} from '../utils/request'

//请求members数据
export const getmembers = () => {
    return MockServer.get('/members')
}

//登录
export const loginApi = (user,password) => {
    // 可替换为LucasServer
    return MockServer.post('/user/login', {
        username: user,
        password: password,
    })
}

//权限认证
export const authenticate=(token)=>{
    return MockServer.post('/authenticate',{
        token:token
    })
}

//获取路由
export const getPermittedRoutes=()=>{
    return MockServer.post('/getUrls')
}

//根据project获取路由
export const getUrlsByProject = (type) => {
    return MockServer.post('/getUrlsByProject', {
        type
    })
}

// 获取用户信息
export const getUserInfo=()=>{
    return MockServer.post('/getUerInfo')
}
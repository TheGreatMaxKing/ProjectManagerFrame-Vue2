import {KellyServer,MockServer} from '../utils/request'

//请求members数据
export const getmembers = () => {
    return MockServer.get('/members')
}
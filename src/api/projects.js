import {KellyServer,MockServer} from '../utils/request'

//获取所有项目
export const postAllProjects = () => {
    // KellyServer
    return MockServer.post('/project/page', {
        "pageNum": 1,
        "pageSize": 100,
        "count": true,
        "params": {}
    })
}
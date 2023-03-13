import Mock from 'mockjs'



Mock.mock('/user/login', 'post', function () {
    //拦截到请求后的处理逻辑
    let obj = {
        data: {
            token: 'admin-tk'
        }
    }
    return obj
})

Mock.mock('/authenticate', 'post', function () {
    //拦截到请求后的处理逻辑
    let obj = {
        data: {
            statusCode: 200
        }
    }
    return obj
})

Mock.mock('/getUrls', 'post', function () {
    //拦截到请求后的处理逻辑
    let obj = {

        Urlsname: ['login', 'home', 'exhibition']

    }
    return obj
})

Mock.mock('/getUrlsByProject', 'post', function (config) {
    let obj = {}
    let type = JSON.parse(config.body).type
    if (type == 'scrum') {
        obj["Urlsname"] = ['login', 'home', 'exhibition', 'overview', 'activity', 'boards', 'roadmap', 'cost', 'projectplan', 'scrumTestPage']
    }
    if (type == 'waterfall') {
        obj["Urlsname"] = ['login', 'home', 'exhibition', 'overview', 'activity', 'boards', 'roadmap', 'cost', 'projectplan', 'waterfallTestPage']
    }
    return obj
})

Mock.mock('/getUerInfo', 'post', function () {
    //拦截到请求后的处理逻辑
    let obj = {
        username: "Maxwell"
    }
    return obj
})




// Mock.mock('/api/home/get', 'get', {
//     status: 200,
//     message: "TEST",
//     'data|5-10': [{
//         // id:'@increment(1)',
//         'id|+1': 0,
//         name: '@cname()',
//     }]
// })

// Mock.mock('/api/addgoods', 'post', function (option) {
//     console.log('MOCK ON', option)
//     // console.log(option)

//     // return{
//     //     status:200,
//     //     //随机函数只能在mock对象内生效，不能在mock内的函数中生效
//     //     message:'@cword(2,8)'
//     // }

//     //返回mock对象
//     return Mock.mock({
//         status: 200,
//         message: '@cword(2,8)'
//     })
// })
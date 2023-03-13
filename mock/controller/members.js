import Mock from 'mockjs'

Mock.mock('/members', function () {
    //拦截到请求后的处理逻辑
    let members = [
        {
            name: "Minnie Chen 陳斯琳",
            level: "PM",
        },
        {
            name: "Jean Liang 梁傑",
            level: "Tech Lead",
        },
        {
            name: "Ricky Liu 劉智凱",
            level: "Coordinator",
        },
        {
            name: "XXXX",
            level: "Member",
        },
    ]

    return members
})

import VueRouter from "vue-router";
import Login from "../views/login"
import Home from "../layout"
import Overview from "../views/overview"
import Activity from "../views/activity"
import Boards from "../views/boards"
import Roadmap from "../views/roadmap"
import Admin from "../views/admin"
import store from '../store'
import Exhibition from '../views/exhibition'
import scrumTestPage from '../views/scrumTestPage'
import waterfallTestPage from '../views/waterfallTestPage'
import errorpage404 from '../views/error-page/404'
import cost from "../views/workpackages/cost"
import projectplan from "../views/workpackages/projectplan"

import Cookie from "js-cookie";
import axios from "axios";
import { authenticate, getPermittedRoutes, getUserInfo, getUrlsByProject } from "../api/user"

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

// const originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace(location) {
//     return originalReplace.call(this, location).catch(err => err)
// }

//路由
export const constRoutes = [{
    name: 'login',
    path: '',
    component: Login,
},
{
    name: '404page',
    path: '/404',
    component: errorpage404,
},
{
    name: 'home1',
    path: '/home1',
    component: Home,
    children: [
        {
            name: 'exhibition',
            path: 'exhibition',
            component: Exhibition,
            meta: {
                title: '',
                permissions: ['admin', 'editor'],
            },
        },
    ]
},
{
    name: 'home2',
    path: '/home2/projectspage/:projectID/:projectName/:projectType',
    component: Home,
    children: [
        {
            name: 'overview',
            path: 'overview',
            component: Overview,
            meta: {
                title: '概述',
                permissions: ['admin', 'editor'],
            },
        },
        {
            name: 'workpackage',
            path: 'workpackage',
            component: { render: (e) => e("router-view") },
            meta: {
                title: '工作包',
                permissions: ['admin', 'editor'],
            },
            children: [
                {
                    name: 'projectplan',
                    path: 'projectplan',
                    component: projectplan,
                    meta: {
                        title: '项目计划',
                        permissions: ['admin', 'editor'],
                    },
                },
                {
                    name: 'cost',
                    path: 'cost',
                    component: cost,
                    meta: {
                        title: '预算',
                        permissions: ['admin', 'editor'],
                    },
                },
            ]
        },
        {
            name: 'activity',
            path: 'activity',
            component: Activity,
            meta: {
                title: '活动',
                permissions: ['admin', 'editor'],
            },
        },
        {
            name: 'boards',
            path: 'boards',
            component: Boards,
            meta: {
                title: '版本蓝图',
                permissions: ['admin', 'editor'],
            },
        },
        {
            name: 'roadmap',
            path: 'roadmap',
            component: Roadmap,
            meta: {
                title: '工作台',
                permissions: ['admin', 'editor'],
            },
        },
        {
            name: 'admin',
            path: 'admin',
            component: Admin,
            meta: {
                title: '角色权限',
                permissions: ['admin'],
            },
        },
        {
            name: 'scrumTestPage',
            path: 'scrumTestPage',
            component: scrumTestPage,
            meta: {
                title: 'Scrum专有页',
                permissions: ['admin', 'editor'],
            },
        },
        {
            name: 'waterfallTestPage',
            path: 'waterfallTestPage',
            component: waterfallTestPage,
            meta: {
                title: 'waterfall专有页',
                permissions: ['admin', 'editor'],
            },
        }
    ]
},

// 404 page must be placed at the end !!!
{ path: '*', redirect: '/404', hidden: true }
]


const router = new VueRouter({
    // mode:'history',
    routes: constRoutes
})
/////////权限控制方式一，每次页面跳转前都向后端发起一次权限认证请求，最传统也最稳固的方式，但会增加访问的次数
// router.beforeEach(async(to,from,next)=>{
//     console.log("Guard",to,from,next)
//     const token=Cookie.get('token')

//     if(to.name=='login'){
//         next()
//         return;
//     }
//     if(!token){
//         next({name:'login'})
//     }else{
//         authenticate().then((res)=>{
//             next()
//           },(err)=>{
//             alert('权限认证失败,即将跳转到登录页面')
//             next({name:'login'})
//           })
//     }

//     // if(!token && to.name!=='login'){
//     //     console.log("HHHH",token)
//     //     next({name:'login'})
//     // }else{
//     //     next()
//     // }
//     //权限控制to.path ,.name ,.meta
// })
/////////////////

//////////权限控制方式二，vueadminBetter方式权限控制，动态路由挂载


// 权限控制方式3（此部分代码可以单独封装在utils文件夹中，router文件只存储路由的配置信息，不存储权限认证的逻辑）
router.beforeEach(async (to, from, next) => {
    if (to.name == 'login' || to.name == '404page') {
        next()
        return;
    }

    console.log("BeforeEach", to)

    let token = Cookie.get('token')
    //////////该部分以后要通过API请求的方式获取，只上传projectID
    let projectName = to.params.projectName
    let projectID = to.params.projectID
    let projectType = to.params.projectType
    ///////
    console.log("BeforeEachState", store.state.project)

    /////////判断用户是否修改了url中的projectID，该部分以后只比较projectID
    /*当用户不通过点击菜单栏列表跳转而是直接修改url中的projectID，且不刷新页面时，由于没有触发清空Vuex中的权限的函数，
    使得Vuex中权限数组permittedUrls不为空，不会重新向后端发起请求，故需要通过对比缓存在Vuex中的项目信息和写在Url中的项目信息来判断所选项目是否改变，
    若项目改变则重新发起请求获取新的权限
    */
    let isProjectChange = !((projectName == store.state.project.projectName) && (projectID == store.state.project.projectID) && (projectType == store.state.project.projectType))
    ////////

    ///////更新项目信息，将获取到的项目信息存入Vuex中
    store.commit('project/setProjectInform', { projectName: projectName, projectType: projectType, projectId: projectID })
    //////

    //////获取Vuex中缓存的权限数组，若还未发起过权限请求，则返回空值
    let permittedUrls = store.state.permission.permittedRoutes
    //////

    //使用try捕获await中的错误，若请求失败则提示报错并跳转到首页
    try {
        //判断用户是否已经通过login取得了token，若已有token则进行后续步骤，否则直接跳转到登录页面
        if (token) {
            // 判断用户是否登录或url中的projectID是否发生改变，若判定结果为真则发起权限请求
            if ((!(permittedUrls && permittedUrls.length > 0)) || isProjectChange) {
                // 获取与projectID无关的路径权限，现阶段只包括展示页面
                let result = await getPermittedRoutes()
                permittedUrls = result?.data?.Urlsname
                console.log('BeforeEachNULL', projectName, isProjectChange)
                /* 
                判断url中是否包含projectID，
                若存在projectID则表明用户访问了项目相关的页面，需要再次请求用户在该项目中所能访问的路径
                ！！！该次请求的返回结果会包含前一次权限请求中的所有路径，并覆盖上一次请求的结果
                ！！！是覆盖不是拼接
                */
                if (projectID) {
                    console.log('BeforeEachProjectName', projectName)
                    let resultProject = await getUrlsByProject(projectType)
                    permittedUrls = resultProject?.data?.Urlsname
                }
                console.log("permittedUrlsPPP", permittedUrls)

                //将完整的路径权限存储于Vuex中
                store.commit('permission/setPermittedRoutes', permittedUrls)

                //获取用户信息并存储于Vuex中（当用户刷新页面时缓存于Vuex中userinfo会丢失，故需要再次获取，可以考虑将userinfo存储于cookie中来避免此次请求）
                getUserInfo().then(
                    (response) => {
                        store.dispatch('user/setUserInfo', response.data)
                    },
                    (error) => {
                        console.log("ERR", error)
                    }
                )
            }
            console.log("BeforeEachToken", permittedUrls, to, to.name, permittedUrls.includes(to.name))
            // 通过前面的一系列步骤，用户已经获取了完整的路由权限，只需要判断目标路径是否包含含在权限路径中完成跳转即可
            if (permittedUrls.includes(to.name)) {
                next()
            } else {
                // 若没有权限则跳转回from路径（也可设为跳转回login页面）
                alert("没有权限")
                next({ name: from.name })
            }
        } else {
            // 用户未登录则跳转回login页面
            alert("用户未登录")
            next({ name: 'login' })
        }

    } catch (err) {
        // 权限请求出错，则跳转回登录页面（也可以设置为跳转至404页面）
        alert("路径请求错误")
        next({ name: 'login' })
    }
})

export default router
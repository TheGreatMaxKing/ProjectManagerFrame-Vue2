import getAccessToken from '../../utils/getlocalstorage'
import {loginApi} from '../../api/user'
import Cookie from 'js-cookie'

//自定义模块
const user={
    namespaced:true,
    state:{
        accessToken: getAccessToken(),
        username: '',
        avatar: '',
        roles:[],
    },

    mutations:{
        settoken(state,token){
            state.accessToken=token
        },
        setRoles(state,roles){
            state.roles=roles
        },
        setName(state,name){
            state.username=name;
        },
    },

    actions:{
        login({commit},username,password){
            return new Promise((resolve,reject)=>{
                loginApi(username.trim(),password).then(response=>{
                    const{data}=response
                    commit('settoken',data.token)
                    Cookie.set("token", token);
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        setUserInfo({commit},userInfo){
            commit('setName',userInfo.username)
        },
    },
    
    getters:{

    }

}

export default user
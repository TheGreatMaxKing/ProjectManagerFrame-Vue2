import Cookie from 'js-cookie'

//自定义模块
const permission={
    namespaced:true,
    state:{
        permittedRoutes: [], 
    },

    mutations:{
        setPermittedRoutes(state,permittedRoutes){
            state.permittedRoutes=permittedRoutes;
        }
    },

    actions:{
        
    },
    
    getters:{

    }

}

export default permission
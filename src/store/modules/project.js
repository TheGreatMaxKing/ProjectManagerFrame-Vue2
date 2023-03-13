import Cookie from 'js-cookie'
import router from "@/router"

//自定义模块
const project={
    namespaced:true,
    state:{
        projectName: "",
        projectID:"",
        projectType:"", 
    },

    mutations:{
        setProjectInform(state,{projectName,projectType,projectId}){
            state.projectName=projectName;
            state.projectType=projectType;
            state.projectID=projectId;
            // console.log("SRRRRRR",router.history.current.params?.projectID)
        }
    },

    actions:{
        
    },
    
    getters:{

    }

}

export default project
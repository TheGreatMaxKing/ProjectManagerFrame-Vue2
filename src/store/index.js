//该文件用于创建Vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//引入自定义模块
import user from './modules/user'
import permission from './modules/permission'
import project from './modules/project'



//！！！在创建vuex实例之前需要先use Vuex
Vue.use(Vuex)




//actions：响应组件中的动作
//在Action中处理业务逻辑，如无业务逻辑也可以略过action直接commit
const actions={
    //context约等于store
    add(context,value){
        context.commit('ADD',value)
    },
    subtract(context,value){
        context.commit('SUBTRACT',value)
    },
    addOdd(context,value){
        
        if(context.state.sum%2){
          //commit 进入mutation阶段
          context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },1000)
    },
    async asyncAction(context,value){
        context.dispatch('subtract',value)
        let p=new Promise(resolve => {
            setTimeout(() => {
                resolve(value)
            }, 2000);
        });
        let v= await p
        context.commit('ADD',v)
    }
}
//mutations：操作数据（state）
//mutations直接操作state，不处理业务逻辑
const mutations={
    ADD(state,value){
        state.sum+=value
    },
    SUBTRACT(state,value){
        state.sum-=value
    },
}
//state：存储数据
const state={
    sum:0,
    name:'Max',
    permissions:'admin',
    id:'001',
}

//getters:用于队state中的数据进行加工，类似于计算属性，适用于可以复用的复杂逻辑
const getters={
    sumMul10(state){
        return state.sum*10
    },
    sumMul2(state){
        return state.sum*2
    },
}

//创建并导出store
export default new Vuex.Store({
    //引入自定义模块
    modules:{
        user,
        permission,
        project
    },
    actions,
    mutations,
    state,
    getters
})
import Vue from 'vue'
import App from './App.vue'

//引入整个组件库
import ElementUI from 'element-ui';
//引入全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入自定义elementui主题
import './assets/theme/index.css'

import VueRouter from 'vue-router'
import router from './router/index'

//引入Vuex的store
import store from './store/index'

// 引入全局样式
import './styles/index.scss'
// import './styles/element-variables.scss'

//引入MOCK
import '../mock'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(VueRouter)

console.log("环境",process.env.NODE_ENV,process.env.VUE_APP_BASE_API)


new Vue({
  render: h => h(App),
  router:router,
  store,
  //引入全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')

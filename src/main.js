import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 引入初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 默认黑马头条的默认地址
Vue.prototype.$axios = axios // axios赋值给全局属性
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

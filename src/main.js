import Vue from 'vue'
import App from './App.vue'
import './permission/Index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 引入初始化样式
import axios from './utils/request'
import Component from './components/index' // 引入组件对象
Vue.prototype.$axios = axios // axios赋值给全局属性
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component) // 注册全局组件对象
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

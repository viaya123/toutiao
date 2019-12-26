import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import BreadCrumb from './common/bread-crumb.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader) // 全局注册
    Vue.component('bread-crumb', BreadCrumb)
  }
}

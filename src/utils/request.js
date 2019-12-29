import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 默认黑马头条的默认地址
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  // config是要发送请求的配置信息
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token 到headers属性 因为所有接口要求的token格式是一样的
  return config
}, function () {
  // 对请求失败做处理

})

axios.defaults.transformResponse = function (data) {
  return JSONBig.parse(data) // JSONBig替换JSON.parse
}

// 响应拦截 响应数据 回来 到达then方法之前
axios.interceptors.response.use(function (response) {
  debugger
  // 对响应数据做处理 执行成功时进入
  return response.data ? response.data : {}
}, function (error) {
  // 执行失败时执行
  let status = error.response.status // 获取失败的状态码
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      window.localStorage.removeItem('user-token') // 强制删除token
      router.push('/login')
      break
    case 401:
      window.localStorage.removeItem('user-token') // 强制删除token
      router.push('/login') // this.$router.push()
      break
    case 507:
      message = '服务器数据库异常'
      break

    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  //   希望 在异常处理函数中将所有的错误都处理完毕 不再进入catch  终止错误
  // return new Promise(function () {}) // 终止当前的错误
  return Promise.reject(error)
})
export default axios

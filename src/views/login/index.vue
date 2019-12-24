<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 登录表单 -->
      <el-form ref="myForm" style="margin-top:30px" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <!-- v-model双向绑定数据对象 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入6位数验证码" style="width:70%"></el-input>
          <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>

        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已经阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <el-form-item>
          <!-- 注册点击事件 -->
          <el-button @click="submitLogin" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
// 第一步，在data中定义表单数据对象
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      loginRules: {
        // 验证规则，验证登陆表单
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '请输入您的验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        // 自定义函数
        check: [{ validator: function (rule, value, callback) {
          // rule当前的规则，没什么用
          // value指的是要校验的字段的值
          if (value) {
            callback() // 认为通过，直接执行callback
          } else {
            callback(new Error('必须勾选才可以登录哦'))
          }
        } }]
      }
    }
  },
  methods: {
    // 提交登录表单
    submitLogin () {
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          // 认为前端校验登录表单成功
          // 地址参数 查询参数 params对象
          // body参数 data对象
          this.$axios({
            url: '/authorizations', // 请求的地址
            method: 'post',
            data: this.loginForm
          }).then(result => {
            // 成功进入then
            // window.localStorage.setItem('user-token', result.data.data.token) // 前端缓存令牌
            window.localStorage.setItem('user-token', result.data.token) // 前端缓存令牌
            this.$router.push('/home') // 跳转到主页
          }).catch(() => { // 输入错误
            // console.log(error)
            // Message 消息提示,elementUi的
            this.$message({
              message: '您输入的手机号或验证码错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    // 100vh相当于当前可视区域的100%高度
    background-image: url('../../assets/img/login_bg.jpg');
    background-size: cover; //自适应背景图片
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
      width: 440px;
      height: 350px;
      .title{
        text-align: center;
        img{
          height: 44px;
        }
      }
    }
  }
</style>

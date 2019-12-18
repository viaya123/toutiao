<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 登录表单 -->
      <el-form style="margin-top:30px">
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input placeholder="请输入6位数验证码" style="width:70%"></el-input>
          <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>

        <el-form-item>
          <el-checkbox>我已经阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

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

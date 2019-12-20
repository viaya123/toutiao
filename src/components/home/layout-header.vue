<template>
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="4">
      <el-row type="flex" justify="end" align="middle">
        <img :src="userInfo.photo ? userInfo.photo:defaultImg" alt />
        <!-- 下拉菜单 -->
        <el-dropdown @command="handle">
          <span>{{userInfo.name}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='info'>个人中心</el-dropdown-item>
            <el-dropdown-item command='git'>git地址</el-dropdown-item>
            <el-dropdown-item command='lgout'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/avatar.jpg') // 先把地址转为变量
    }
  },
  created () {
    let token = window.localStorage.getItem('user-token')
    // 查询数据
    this.$axios({
      url: '/user/profile',
      // headers参数
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data // 获取个人信息
    })
  },
  methods: {
    handle (command) {
      // 区分点击的菜单项
      if (command === 'lgout') {
        // 退出
        // 清除用户令牌
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (command === 'git') {
        //   跳转
      } else if (command === 'info') {

      }
    }
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  height: 60px;
  .left {
    font-size: 18px;
    .title {
      margin-left: 5px;
      color: #2c3e50;
      font-size: 14px;
    }
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>

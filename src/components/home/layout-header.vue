<template>
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="4">
      <el-row type="flex" justify="end" align="middle">
        <img src="../../assets/img/avatar.jpg" alt />
        <!-- 下拉菜单 -->
        <el-dropdown>
          <span>小丫丫</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>git</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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

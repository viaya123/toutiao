<template>
  <!--左侧导航  -->
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- 开启路由 也可以写：router -->
    <el-menu :router="true" background-color="#323745" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 导航组件，index作为跳转的地址 ，类似于 router-link to -->
      <el-menu-item index="/home">
        首页
      </el-menu-item>
      <el-submenu index='1'>
        <span slot="title">内容管理</span>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <span slot="title">粉丝管理</span>
        <el-menu-item index="/home/picture">图文数据</el-menu-item>
        <el-menu-item index="/home/fansinfo">粉丝画像</el-menu-item>
        <el-menu-item index="/home/fanslife">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>账户信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scope>
    .layout-aside{

        width: 231px;
        .title{
            text-align: center;
            background-color: #2e2f32;
            padding: 10px 0;
            img{
                height: 35px;
            }
        }
    }
</style>

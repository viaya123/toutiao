<template>
  <el-card class="material">
      <bread-crumb slot="header">
        <template slot="title">全部图文</template>
      </bread-crumb>
      <!-- body内容 -->
      <el-tabs v-model="activeName">
         <el-tab-pane label="全部" name="all">

         </el-tab-pane>
         <el-tab-pane label="收藏" name="collect"></el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all'
    }
  }
}
</script>

<style lang='less' scoped>
    .material {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    }
</style>

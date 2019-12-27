<template>
  <el-card class="comment">
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- body内容 -->
    <el-table :data="tableData">
      <!-- 列组件 lable -->
      <el-table-column prop="title" width="600px" label="标题"></el-table-column>
      <el-table-column prop="status" label="评论状态"></el-table-column>
      <el-table-column prop="total" label="总评论数"></el-table-column>
      <el-table-column prop="fans" label="粉丝评论数"></el-table-column>
      <el-table-column prop="handle" label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          title: 'scccccccccc',
          status: '正常',
          total: 0,
          fans: 0,
          handle: '修改'
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.comment {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>

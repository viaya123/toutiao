<template>
  <el-card class="comment">
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- body内容 -->
    <el-table :data="list">
      <!-- 列组件 lable -->
      <el-table-column prop="title" width="600px" label="标题"></el-table-column>
      <!-- 格式化属性 -->
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <!-- 文字组件 -->
        <template slot-scope="obj">
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">{{obj.row.comment_status ?  '关闭评论': '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 请求评论列表
    getComment () {
      this.$axios({
        // query 查询参数，get参数
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results // 获取评论列表数据给本身的data
      })
    },
    // 定义一个布尔值转化
    formatterBool (cellValue) {
      return cellValue ? '正常' : '关闭'
    }
  },
  // 钩子函数
  created () {
    this.getComment()
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

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
          <!-- 注册事件 -->
          <el-button type="text" size="small" @click="openOrClose(obj.row)">{{obj.row.comment_status ?  '关闭评论': '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-row type="flex" justify="center" align="middle" style="height:100px">
      <el-pagination background layout="prev, pager, next"
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      :total="page.total"
       @current-change="changePage"></el-pagination>
    </el-row>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        // 专门放置分页数据
        total: 0, // 数据总条数
        pageSize: 10, // 默认每页条
        currentPage: 1 // 当前页码默认第一页
      }
    }
  },
  methods: {
    // 页码改变事件
    changePage (newPage) {
      // newPage是当前页码
      this.page.currentPage = newPage
      this.getComment()
    },
    // 请求评论列表
    getComment () {
      this.$axios({
        // query 查询参数，get参数
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results // 获取评论列表数据给本身的data
        this.page.total = result.data.total_count // 获取文章总数
      })
    },
    // 定义一个布尔值转化
    formatterBool (cellValue) {
      // cellValue当前单元格的值
      return cellValue ? '正常' : '关闭'
    },
    // 打开或关闭评论
    openOrClose (row) {
      // let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(row.comment_status ? '关闭评论将清除所有评论，读者也不能再进行评论，是否进行此操作?' : '此操作将开启评论，是否进行此操作?').then(() => {
        // 用户确定调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: {
            article_id: row.id.toString()
          },
          // 请求体的放data中
          data: {
            allow_comment: !row.comment_status
          }
        }).then(result => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getComment() // 重新请求列表
        })
      })
    }
  },
  // 钩子函数
  created () {
    // 调用请求数据方法
    this.getComment()
  }
}
</script>

<style lang='less' scoped>
.comment {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  .page{
    margin-top: 50px
  }
}
</style>

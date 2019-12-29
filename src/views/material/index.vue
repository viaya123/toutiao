<template>
  <el-card class="material" v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">图片管理</template>
    </bread-crumb>
    <el-row type="flex" justify="end">
        <el-upload :http-request="uploadImg" :show-file-list="false">
            <el-button size="small" type="primary">上传图片</el-button>
        </el-upload>
    </el-row>
    <!-- body内容 -->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部" name="all">
        <!-- {{list}} -->
        <div class="img-list">
          <el-card
            class="img-card"
            v-for="item in list"
            :key="item.id"
            :body-style="{ padding: '0px' }"
          >
            <img :src="item.url" alt />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center" style=height:100px align="middle">
          <el-pagination background layout="prev, pager, next"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="page.total"
            @current-change="changePage"></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏" name="collect">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id" :body-style="{ padding: '0px' }">
            <img :src="item.url" alt />
          </el-card>
        </div>
        <el-row type="flex" justify="center" style=height:100px align="middle">
          <el-pagination background layout="prev, pager, next"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            :total="page.total"
            @current-change="changePage"></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'all',
      list: [], // 接收全部数据
      //   collectList: []
      page: {
        // 专门放置分页数据
        total: 0, // 数据总条数
        pageSize: 10, // 默认每页条
        currentPage: 1 // 当前页码默认第一页
      }
    }
  },
  methods: {
    // 上传图片
    uploadImg (params) {
      this.loading = true
      let form = new FormData()
      form.append('image', params.file) // 添加文件到formData
      this.$axios({
        method: 'post',
        url: '/user/images',
        data: form // formData数据
      }).then(result => {
        // 说明已经上传成功了一张图片
        this.loading = false
        this.getAllMaterial()
      })
    },
    //   切换分页
    changePage (newPage) {
      // newPage是当前页码
      this.page.currentPage = newPage
      this.getAllMaterial()
    },
    // tab切换事件
    changeTab () {
      this.page.currentPage = 1 // 应该把当前页码回到第一页
      //   this.activeName === 'collect'
      this.getAllMaterial()
    },
    //   获取所有数据
    getAllMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count // 获取总条数
      })
    }
  },
  created () {
    this.getAllMaterial() // 获取所有的素材 第一次进入，activeName为all
  }
}
</script>

<style lang='less' scoped>
.material {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  .img-list {
    display: flex;
    flex-wrap: wrap;
    .img-card {
      width: 200px;
      height: 240px;
      margin: 20px 25px;
      position: relative;
      //   padding: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .operate {
        width: 100%;
        background-color: #f4f5f6;
        font-size: 20px;
        position: absolute;
        bottom: 0;
        height: 30px;
        //   margin-left: -20px
      }
    }
  }
}
</style>

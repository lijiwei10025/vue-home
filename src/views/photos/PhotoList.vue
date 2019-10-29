<template>
  <div class="photo-list">
    <!-- 顶部滑动条区域 -->
    <van-tabs>
      <van-tab v-for="item in photoListTab" :key="item.id" :title="item.title" @click="getPhotoListByCateId(item.id)">
      </van-tab>
    </van-tabs>

    <!-- 图片列表区域 -->
      <ul>
        <router-link tag="li" :to="'/home/photoinfo/' + item.id" v-for="item in imgList" :key="item.id">
          <img v-lazy="item.img_url">
          <div class="photo-list-info">
            <h1 class="photo-list-title">{{item.title}}</h1>
            <div class="photo-list-body">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoListTab: [],
      imgList: []
    }
  },
  created() {
    this.getAllCategory()
    // 默认进入页面就主动请求所有的图片列表的数据
    this.getPhotoListByCateId(0)
  },
  methods: {
    getAllCategory() { // 获取所有的图片分类
      this.axios.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result => {
        this.photoListTab = result.data.message
        console.log(this.photoListTab)
      }).catch(err => {
        console.log(err)
      })
    },
    getPhotoListByCateId(cateId) { // 根据分类Id，获取图片列表
      this.axios.get('http://www.liulongbin.top:3005/api/getimages/' + cateId).then(result => {
        this.imgList = result.data.message
        console.log(this.imgList)
      })
    }
  }
}
</script>

<style scoped>
.photo-list ul {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.photo-list ul li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
}
.photo-list ul li img {
  width: 100%;
  vertical-align: middle;
}
.photo-list ul li image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list-info{
  color: #fff;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(0,0,0,.4);
  max-height: 84px;
}
.photo-list-title{
  font-size: 14px;
}
.photo-list-body{
  font-size: 13px;
}
</style>
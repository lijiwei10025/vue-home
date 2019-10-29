<template>
  <div class="photo-info">
    <h3>{{photoInfo.title}}</h3>
    <p class="photo-info-subtitle">
      <span>发表时间：{{photoInfo.add_time | dateFormat}}</span>
      <span>点击次数：{{photoInfo.click}}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="photo-info-slides">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="photo-info-content" v-html="photoInfo.content"></div>

    <!-- 放置一个现成的评论子组件 -->
    <Comment :id="id" />
  </div>
</template>

<script>
import Comment from "../../components/subcomponents/Comment";
export default {
  data() {
    return {
      photoInfo: {}, //从路由中获取到的图片Id
      id: this.$route.params.id, //图片详情
      slide1: [] //缩略图的数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbes();
  },
  methods: {
    getPhotoInfo() {
      // 获取图片详情
      this.axios
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.id)
        .then(result => {
          this.photoInfo = result.data.message[0];
          console.log(this.photoInfo);
        });
    },
    getThumbes() {
      // 获取缩略图
      this.axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          result.data.message.forEach(item => {
            item.msrc = item.src;
            item.alt = 'picture1';
            item.title = 'Image Caption 1';
            item.w = 600;
            item.h = 400;
          });
          this.slide1 = result.data.message;
          console.log(this.slide1);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleClose() {}
  },
  components: {
    Comment
  }
};
</script>

<style scoped>
.photo-info {
  padding: 3px;
}
.photo-info h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.photo-info-subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin: 10px 0;
}
.photo-info-content {
  font-size: 13px;
  line-height: 30px;
  margin: 10px 0;
}
figure{
  width: 40px;
  height: 40px;
}
</style>
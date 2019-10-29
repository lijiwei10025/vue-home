<template>
  <div class="news-info">
    <h3 class="news-info-title">{{newsinfo.title}}</h3>
    <p class="news-info-subtitle">
      <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>

    <hr>

    <div class="news-info-content" v-html="newsinfo.content"></div>

    <Comment :id="id" />
  </div>
</template>

<script>
import Comment from '../../components/subcomponents/Comment'
export default {
  data(){
    return {
      id: this.$route.params.id,
      newsinfo: {}
    }
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      this.axios.get('http://www.liulongbin.top:3005/api/getnew/' + this.id).then(result => {
        this.newsinfo = result.data.message[0]
        console.log(this.newsinfo)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    Comment
  }
}
</script>

<style scoped>
.news-info{
  width: 100%;
  padding: 0 4px;
}
.news-info-title{
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.news-info-subtitle{
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.news-info-content{}
</style>
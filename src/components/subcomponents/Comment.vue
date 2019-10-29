<template>
  <div class="comment">
    <h3>发表评论</h3>
    
    <hr>

    <textarea placeholder="请输入要BB的内容（最多吐槽120字）"
    maxlength="120" v-model="msg"></textarea>

    <van-button type="info" size="large" @click="postComment">发表评论</van-button>

    <div class="comment-content">
      <div class="comment-content-list" v-for="(item, index) in comments" :key="item.add_time + index">
        <div class="comment-content-item">
          第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="comment-content-text">
          {{item.content === '' ? '此用户很懒，什么都没说': item.content}}
        </div>
      </div>
    </div>

    <van-button type="danger" size="large" plain @click="getMore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageIndex: 1,
      comments: [],
      msg: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() { //获取评论
      this.axios.get('http://www.liulongbin.top:3005/api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(result => {
        // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
        this.comments = this.comments.concat(result.data.message)
        console.log(this.comments)
      }).catch(err => {
        console.log(err)
      })
    },
    getMore() { //加载更多
      this.pageIndex++
      if(this.pageIndex < 5) {
        this.getComments()
      }
    },
    postComment() { //发表评论
      // 校验是否为空内
      /* if(this.msg.trim().length === 0) {
        console.log('内容为空')
      }
      // 参数1：请求的URL地址
      // 参数2：提交给服务器的数据对象{content：this.msg}
      // 参数3：定义提交时候，表单数据的格式{emulateJSON：true}
      this.axios.post('http://www.liulongbin.top:3005/api/getcomments/' + this.$route.params.id, {content: this.msg.trim()}).then(result => {
        if(result.data.status === 0) {
          // 1. 拼接出一个评论对象
          let cmt = {user_name: '匿名用户', add_time: Data.now(), content: this.msg.trim()}
          this.content.unshift(cmt)
          this.msg = ''
        }
      }) */
    }
  },
  props: ['id']
}
</script>

<style scoped>
.comment{
  width: 100%;
  background-color: #fff;
}
.comment h3{
  font-size: 18px;
}
.comment textarea{
  width: 100%;
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.comment-content{
  margin: 5px 0;
}
.comment-content-list{
  font-size: 13px;
}
.comment-content-item{
  line-height: 30px;
  background-color: #ccc;
}
.comment-content-text{
  line-height: 35px;
  text-indent: 2em;
}
</style>
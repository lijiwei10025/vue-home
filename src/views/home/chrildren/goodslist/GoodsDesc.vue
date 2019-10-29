<template>
    <div class="goodsdesc">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="goodsdesc-content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: {}
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(result => {
          this.info = result.data.message[0];
          console.log(this.info);
        }).catch(err => {
            console.log(err)
        })
    }
  }
};
</script>

<style scoped>
.goodsdesc{
    padding: 5px;
}
.goodsdesc h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
}
.goodsdesc-content img{
    width: 100%;
}
</style>
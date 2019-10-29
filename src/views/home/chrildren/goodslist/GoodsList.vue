<template>
  <div class="goods-list">
    <!-- 方法一：使用a标签的形式叫做标签跳转 -->
    <!-- 方法二：使用window.location.href的形式叫做编程式导航 -->
    <div class="goods-list-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" />
      <h1 class="goods-list-title">{{item.title}}</h1>
      <div class="goods-list-info">
        <p class="goods-list-info-price">
          <span class="goods-list-info-price-now">￥{{item.sell_price}}</span>
          <span class="goods-list-info-price-old">￥{{item.market_price}}</span>
        </p>
        <p class="goods-list-info-sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <van-button type="danger" size="large" @click="getMore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageindex: 1,
      goodsList: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() { //获取商品列表
      this.axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=' + this.pageindex).then(result => {
        // this.goodsList = result.data.message
        this.goodsList = this.goodsList.concat(result.data.message)
        console.log(this.goodsList)
      }).catch(err => {
        console.log(err)
      })
    },
    getMore() {
      this.pageindex++
      this.getGoodsList()
    },
    goDetail(id) { // 使用JS的形式进行路由导航
      this.$router.push('/home/goodsinfo/' + id)
    }
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
}
.goods-list-item{
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.goods-list-item img{
  width: 100%;
}
.goods-list-title{
  font-size: 14px;
}
.goods-list-info{
  background-color: #eee;
}
.goods-list-info-price{
  padding: 5px;
}
.goods-list-info-price-now{
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods-list-info-price-old{
  text-decoration: line-through; /* 贯穿横线 */
  font-size: 12px;
  margin-left: 10px;
}
.goods-list-info-sell{
  padding: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>
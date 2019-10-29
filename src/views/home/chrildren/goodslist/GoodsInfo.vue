<template>
  <div class="goods-info">

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="goods-info-ball" v-show="ballFlag"></div>
    </transition>
    




    <!-- 商品轮播图区域 -->
    <Swiper :lunbotoList="lunBoTo" class="goods-info-lunbotu" :isFull="true" />

    <!-- 商品购买区域 -->
    <div class="goods-info-content">
      <div class="goods-info-title">{{goodsInfo.title}}</div>
      <div class="goods-info-container">
        <p>市场价：<span>￥{{goodsInfo.market_price}}</span>&nbsp;销售价：<span>￥{{goodsInfo.sell_price}}</span></p>
        <p><span class="goods-info-text">购买数量：</span><button class="goods-info-btn">-</button><span class="goods-info-text-num">1</span><button class="goods-info-btn">+</button></p>
         <div><el-button type="primary">立即购买</el-button>
         <el-button type="danger" @click="addToShopCar">加入购物车</el-button></div>
      </div>
    </div>



    <!-- 商品参数区域 -->
    <div class="goods-info-content">
      <div class="goods-info-title">商品参数</div>
      <div class="goods-info-container">
        <div class="goods-info-container-box">商品货号：{{goodsInfo.goods_no}}</div>
        <div class="goods-info-container-box">库存情况：{{goodsInfo.stock_quantity}}件</div>
        <div class="goods-info-container-box">上架时间：{{goodsInfo.add_time | dateFormat}}</div>
      </div>
      <div class="goods-info-container-btn">
        <van-button class="goods-info-container-btn-1" plain  type="info" size="large" @click="goDesc(id)">图文介绍</van-button>
        <van-button plain  type="danger" size="large" @click="goComment(id)">商品评论</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import Swiper from '../../../../components/swiper/swiper'
export default {
  data(){
    return {
      id: this.$route.params.id,
      lunBoTo: [],
      goodsInfo: {},
      ballFlag: false
    }
  },
  created(){
    this.getLunbotu()
    this.getGoodsInfo()
  },
  methods: {
    getLunbotu() { // 获取商品轮播图
      this.axios.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(result => {
        this.lunBoTo = result.data.message
        console.log(this.lunBoTo)
      })
    },
    getGoodsInfo() { // 获取商品信息
      this.axios.get('http://www.liulongbin.top:3005/api/goods/getinfo/' + this.id).then(result => {
        this.goodsInfo = result.data.message[0]
        console.log(this.goodsInfo)
      })
    },
    goDesc(id) { //点击使用编程式导航跳转到图文介绍页面
      this.$router.push({name: 'goodsdesc', params: {id}})
    },
    goComment(id) {
      this.$router.push({name: 'goodscomment', params: {id}})
    },
    addToShopCar() { //添加到购物车
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)"
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(93px, 230px)"
      el.style.transition = "all 1s ease"
      done()
    },
    afterEnter() {
      /* this.ballFlag = !this.ballFlag */
    }
  },
  components: {
    Swiper
  }
}
</script>

<style scoped>
.goods-info{
  background-color: #eee;
  padding: 10px;
}
.goods-info-lunbotu{
  box-shadow: 0 0 8px #bbb;
}
.goods-info-content{
  color: #333;
  font-size: 14px;
  background-color: #fff;
  margin-top: 8px;
  box-shadow: 0 0 8px #bbb;
}
.goods-info-title{
  font-size: 16px;
  font-weight: 600;
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}
.goods-info-container{
  padding: 10px 12px 15px;
}
.goods-info-container p{
  padding: 8px 0;
}
.goods-info-container p:first-child{
  font-weight: 600;
}
.goods-info-container p:first-child del{
  font-size: 12px;
}
.goods-info-container p:first-child span:first-child{
  text-decoration: line-through;
  font-size: 12px;
  margin-right: 10px;
}
.goods-info-container p:first-child span:last-child{
  color: red;
}
.goods-info-text {
  font-weight: 600;
}
.goods-info-text-num{
  padding: 1px 15px;
  background-color: #fff;
}
.goods-info-btn{
  background-color: #eee;
  padding: 1px 15px;
  outline: none;
}

.goods-info-container-box{
  font-size: 14px;
  color:#bbb;
  padding: 8px 0;
}
.goods-info-container-btn{
  padding: 15px 12px;
  border-top: 1px solid #eee;
}
.goods-info-container-btn-1{
  margin-bottom: 15px;
}



.goods-info-ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 473px;
  left: 145px;
}
</style>
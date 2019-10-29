<template>
  <div class="shop-car">
    <div class="shop-car-top" v-for="item in goodslist" :key="item.id">
      <div class="shop-car-switch">
        <mt-switch></mt-switch>
      </div>
      <img :src="item.thumb_path" />
      <div class="shop-car-top-content">
        <h1>{{item.title}}</h1>
        <div class="shop-car-top-content-bottom">
          <p class="shop-car-top-content-price">￥{{item.sell_price}}</p>
          <p>
            <button class="goods-info-btn" @click="delCount">-</button>
            <span class="goods-info-text-num"></span>
            <button class="goods-info-btn" @click="addCount">+</button>
          </p>
          <p class="shop-car-top-content-del">删除</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      let idArr = []
      this.$store.state.car.forEach(item => idArr.push(item.id))
      if(idArr.length <= 0) {
        return 
      }
      this.axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/' + idArr.join(',')).then(result => {
        this.goodslist = result.data.message
        console.log(this.goodslist)
      }).catch(err => {
        console.log(err)
      })
    },
    delCount() {},
    addCount() {}
  }
};
</script>

<style scoped>
.shop-car{
  background-color: #eee;
  padding: 10px;
}
.shop-car-top {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 10px;
  box-shadow: 0 0 6px #bbb;
  border-radius: 8px;
}
.shop-car-switch {
  flex-shrink: 0;
  margin-right: 8px;
}
.shop-car-top img{
  width: 50px;
}
.shop-car-top-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.shop-car-top-content h1{
  font-size: 13px;
  padding: 4px 0 8px;
}
.shop-car-top-content-bottom{
  display: flex;
  font-size: 13px;
  padding: 4px 0 8px;
}
.shop-car-top-content-price {
  color: red;
  margin-right: 8px;
}
.goods-info-text-num {
  padding: 1px 15px;
  background-color: #fff;
  max-width: 10px;
}
.goods-info-btn {
  background-color: #eee;
  padding: 1px 15px;
  border: 0px;
}
.shop-car-top-content-del {
  color: blue;
  margin-left: 8px;
}
</style>
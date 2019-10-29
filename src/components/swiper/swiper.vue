<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in lunbotoList" :key="item.src">
        <img :src="item.src" :class="{full: isFull}"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['lunbotoList','isFull']
}
</script>

<style scoped>
.swiper{
  text-align: center;
}
.swiper img{
  height: 100%;
}
.full{
  width: 100%;
}
</style>
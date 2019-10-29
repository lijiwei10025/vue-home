<template>
  <div class="home-swiper">
    <Swiper :lunbotoList="images" :isFull="true"></Swiper>
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.img" />
      </van-swipe-item>
    </van-swipe> -->
  </div>
</template>

<script>
import Swiper from '../swiper/swiper'
export default {
  data() {
    return {
      images: [
        {src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/76200/38/13804/52727/5db249bfEe1281eab/a7dd10b7e51cbe22.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
        {src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/63900/13/13022/97940/5da55c5dEe1578e6e/3bceff72a4db1de5.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
        {src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/81034/33/13677/103382/5db14eb7Ef6ae1a2a/d3ceef78a80b3f92.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
        {src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/69174/40/13654/141544/5db1b0d1Ee61138ec/0688413b004a175a.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
        {src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg.dpg"}
      ]
    }
  },
  components: {
    Swiper
  }
}
</script>

<style scoped>
.van-swipe__track img{
  width: 100%;
}
</style>
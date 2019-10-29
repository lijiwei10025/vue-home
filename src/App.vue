<template>
  <div class="app">
    <div class="app-top">
      <van-nav-bar
        class="app-top-van-nav-bar"
        title="标题"
        left-text="搜索"
        right-text="会员"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>

    <div class="app-comtent">
      <transition>
        <router-view />
      </transition>
    </div>

    <div class="app-footer">
      <van-tabbar route class="app-footer-van-tabbar">
        <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/member" icon="user-circle-o" dot>会员</van-tabbar-item>
        <van-tabbar-item replace to="/shopcar" icon="shopping-cart-o" info="0">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods: {
    onClickLeft() {
      if (this.$route.path != "/search") {
        this.$router.push("/search")
      }
    },
    onClickRight() {
      if (this.$route.path != "/member") {
        this.$router.push("/member")
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
.app-comtent{
  overflow-x: hidden;
  position: relative;
}
.app .van-tabbar-item--active {
  color: #1989fa;
}
.app-footer-van-tabbar {
  background-color: #eee !important;
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX( -100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all .5s ease;
}
</style>

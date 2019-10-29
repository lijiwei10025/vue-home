<template>
  <div class="enter-list">
    <div class="enter-list-item">
      <router-link tag="a" :to='item.route' v-for="item in enterList" :key="item.id">
        <img :src="item.icon" />
        <span>{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enterList: [
        {
          id: 1,
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp",
          text: "京东超市",
          route: '/home/newslist'
        },
        {
          id: 2,
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp",
          text: "数码电器",
          route: '/home/photolist'
        },
        {
          id: 3,
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp",
          text: "京东服饰",
          route: '/home/goodslist'
        },
        {
          id: 4,
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp",
          text: "京东生鲜",
          route: ''
        },
        {
          id: 5,
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp",
          text: "京东到家",
          route: ''
        },
        {
          id: 6,
          icon:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp",
          text: "充值缴费",
          route: ''
        }
      ]
    };
  }
};
</script>

<style scoped>
.enter-list {
  background-color: #fff;
}
.enter-list-item {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
}
.enter-list-item a {
  width: 33.33%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.enter-list-item a img {
  width: 45px;
}
.enter-list-item a span {
  display: block;
  color: #666;
  font-size: 12px;
  padding: 10px 0 0 0;
}
</style>
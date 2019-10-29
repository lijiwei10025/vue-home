<template>
  <div class="news-list">
    <ul>
      <router-link
        tag="li"
        :to="'/home/newsinfo/' + item.id"
        v-for="item in newsList"
        :key="item.id"
      >
        <img :src="item.img_url" />
        <div class="news-list-box">
          <p class="news-list-title">{{item.title}}</p>
          <p class="news-list-content">
            <span>发表时间：{{item.add_time | dateFormat}}</span>
            <span>点击：{{item.click}}</span>
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          this.newsList = result.data.message;
          console.log(this.newsList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.news-list {
  width: 100%;
  background-color: #fff;
}
.news-list ul {
  list-style: none;
  padding: 0 15px;
}
.news-list ul li {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.news-list ul li img {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
}
.news-list-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin-left: 8px;
}
.news-list-title {
  width: 100%;
  font-size: 15px;
  color: #222;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-list-content {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: blue;
}
.news-list-content span:first-child {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-list-content span:last-child {
  flex-shrink: 0;
}
</style>
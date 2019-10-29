import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/home/Home.vue'
import Member from '../views/member/Member.vue'
import ShopCar from '../views//shopcar/ShopCar.vue'
import Search from '../views/search/Search.vue'

import NewsList from '../views/news/NewsList.vue'
import NewsInfo from '../views/news/NewsInfo.vue'
import PhotoList from '../views/photos/PhotoList.vue'
import PhotoInfo from '../views/photos/PhotoInfo.vue'
import GoodsList from '../views/home/chrildren/goodslist/GoodsList.vue'
import GoodsInfo from '../views/home/chrildren/goodslist/GoodsInfo.vue'
import GoodsDesc from '../views/home/chrildren/goodslist/GoodsDesc.vue'
import GoodsComment from '../views/home/chrildren/goodslist/GoodsComment.vue'

// 解决路由跳转，拦截报错Uncaught (in promise)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
    /* mode: 'history', */
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shopcar', component: ShopCar },
        { path: '/search', component: Search },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList},
        { path: '/home/photoinfo/:id', component: PhotoInfo},
        { path: '/home/goodslist', component: GoodsList},
        { path: '/home/goodsinfo/:id', component: GoodsInfo},
        {
            path: '/home/goodsdesc/:id',
            component: GoodsDesc,
            name: 'goodsdesc'
        },
        {
            path: '/home/goodscomment/:id',
            component: GoodsComment,
            name: 'goodscomment'
        }
    ]
})
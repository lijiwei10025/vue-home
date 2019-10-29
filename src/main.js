import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS") {
    return moment(dataStr).format(pattern)
})

//导入axios
import axios from 'axios'
Vue.prototype.axios = axios


//导入UI库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
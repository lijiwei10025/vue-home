import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    car: [] // 购物车商品的数据
  },
  mutations: {
    addToCar(state, goodsinfo) { //点击加入购物车
      // 假设没有找到对应的商品
      let flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if(!flag) {
        state.car.push(goodsinfo)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  actions: {
  },
  getters: {
    getAllCount(state) {
      let num = 0;
      state.car.forEach(item => {
        num += item.count
      })
      return num
    }
  }
})

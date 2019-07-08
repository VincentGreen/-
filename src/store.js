import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    oldnew: "/home",
    cartList: [],
    cartName: null,
    address: [],
    addName: {
      "name": "张三",
      "phone": "12345678998",
      "address": "黄埔区"
    }
  },
  mutations: {
    add(state, data) {
      state.cartList = data
    },
    name(state, data) {
      state.cartName = data
      console.log(state.cartName)
    },
    address(state, data) {
      state.address.push(data)
    },
    addName(state, data) {
      state.addName = data
    }
  },
  actions: {}
});

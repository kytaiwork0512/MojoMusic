import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { 
    playnow: {}
  },
  mutations: {
    setPlayNow(state, data) {
      state.playnow = data;
    }
  },
  getters: {
    getPlayNow(state) {
      return state.playnow;
    }
  },
  actions: {
    setPlayNow(state, data) {
      this.commit("setPlayNow", data);
    }
  },
  modules: {}
});

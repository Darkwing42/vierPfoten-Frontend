import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import kunde from "./modules/kunde";
import reservierung from "./modules/reservierung";
import planung from "./modules/planung";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    kunde,
    reservierung,
    planung
  },

  state: {
    loading: false
  },
  actions: {},
  mutations: {},
  getters: {}
});

export default store;

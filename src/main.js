// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: "#8BC34A",
    secondary: "#C5E1A5",
    accent: "#D50000",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: Router,
  store,
  components: { App },
  template: "<App/>"
});

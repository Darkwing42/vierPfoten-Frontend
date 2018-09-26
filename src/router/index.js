import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Kunden from "@/components/Kunden";
import Reservierung from "@/components/Reservierung";
import Account from "@/components/Account";
import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/kunden",
      name: "Kunden",
      component: Kunden
    },
    {
      path: "/reservierung",
      name: "Reservierung",
      component: Reservierung
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

<template>
<v-app id="app">
<v-toolbar class="primary">
<v-toolbar-title > vierPfoten </v-toolbar-title>
<v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" flat>Übersicht</v-btn>
      <v-btn to="/kunden" flat>Kunden</v-btn>
      <v-btn to="/reservierung" flat>Reservierung</v-btn>
      <v-btn flat>Rechnungen</v-btn>
      
      <v-btn flat v-if="!loginState" to="/login">Login</v-btn>
      <v-btn to="/account" flat v-else>
        Account 
        <v-icon>account_circle</v-icon> 
      </v-btn>

    </v-toolbar-items>
</v-toolbar>
  <router-view> </router-view>
   
<v-footer class="pa-3" id="footer">
   <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} J-M. Wagner</div>
  </v-footer>
</v-app>
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex'
export default {
  name: "App",
  computed: {
...mapState({
  loginState: state => state.user.loggedIn
})
  }
};
</script>

<style>
#footer {
  position:absolute;
   bottom:0;
   width:100%;
   }
#loading {
  position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: url(/link/to/your/image);
    background-size: 100%;
}
</style>

<template>
  <v-container v-if="this.$store.state.loading">
  <v-progress-circular id="loading"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
 </v-container>
 
 <v-container v-else >
  <h1> <v-icon large color="black"> account_circle</v-icon> Account Einstellungen</h1>
  <br>
   <v-tabs color="primary" dark slider-color="accent">
   <v-tab key="Profil">
    Profil
   </v-tab>
  
   <v-tab-item key="Profil">
   
   <v-card>

    <v-card-title><h1>Profil Einstellungen</h1> </v-card-title>
    
    <v-divider></v-divider>

    <v-list two-line >
      <v-list-tile >Username: {{this.$store.state.user.username}} <v-btn small icon> <v-icon>edit </v-icon></v-btn></v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>Passwort zurücksetzen <v-btn small outline flat class="primary">Zurücksetzen</v-btn></v-list-tile>
     
    </v-list>
   
   </v-card>
   </v-tab-item>

    <v-tab v-show="this.$store.state.user.roles === 'Admin' " key="mitarbeiter">
    Mitarbeiter
   </v-tab>
   <v-tab-item key="mitarbeiter">
   <h1>Mitarbeiter</h1>
   <v-card>
  
   </v-card>
  
   </v-tab-item> 
   
   
   </v-tabs>
 
 </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style>
</style>

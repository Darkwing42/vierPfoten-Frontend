<template>
  <v-layout align-start justify-start row fill-height>
    <div class="login">
    
    </div>
    <v-flex xs12 sm6 >
      <v-text-field
      v-model="username"
      label="Username"
      
      >     
      </v-text-field>

      <v-text-field
      v-model="password"
      label="Password"
      
      >     
      </v-text-field>
      
    </v-flex>
    <v-flex xs12 sm6>
     <v-btn>Login</v-btn>
     <v-btn>Abbrechen</v-btn>
    </v-flex>
    
  
  </v-layout>    
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>


<style scoped >
.login {
  position: absolute;
  //height: 59px;
  //width: 100px;
  top: 50%;
  left: 50%;
  //margin-left: -50px;
  //margin-top: -50px;
}
</style>

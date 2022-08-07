<template>

  <div class="login">
    <h2>Login</h2>
     <form  class ="form" @submit.prevent="Login()">
     <div v-if="loading"><Modal/></div>
    <div class="row">
   <label for="email">Email</label>
        <input v-model="email" type="email" required >
        </div>
        <div class="row">
   <label for="password">Password</label>
        <input v-model="password" :type="type" required>
         <div class="absolute">
          <input type = "checkbox" @click="showConfirmPassword()"> 
        </div>
        </div>
        
      <input type="submit" class="btn"  value="SignUp">
        </form>
        <p>Don't have an account yet? <router-link to="/SignUp">SignUp</router-link></p>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue"
import axios from "axios"
export default {
  components:{Modal},
data(){
  return{
    type:"password",
    loading:false,
 none:false,
  password:"",
  email:"",
}
},
mounted(){
    let userinfo = localStorage.getItem("user-info")
    if (userinfo){
        this.$router.push({name: 'Home'})
    }},
methods:{
  Login(){
    this.loading = true;
    let self = this;
  let url =`http://localhost:3000/users?gmail=${this.email}&password=${this.password}`
  axios.get(url)
  .then(function (response) {
   if(response.status ===200 && response.data.length >0){
    console.log(response);
      localStorage.setItem("user-info", JSON.stringify(response.data[0]));
    self.$router.push({ name: 'Home' });
     
    }
    else{
      this.loading = false;
      this.none = true;
    }
  })
  .catch(function (error) {
    
    console.log(error);
  })
  },
     showConfirmPassword(){
   if(this.type==="password"){
    this.type="text"
   }else{
    this.type="password"
   }
  },
}
}
</script>

<style>
</style>
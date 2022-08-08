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
  import {  signInWithEmailAndPassword } from "firebase/auth";
  import {firebaseAuth} from "../firebase.js"
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


signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user, this.name)
    localStorage.setItem("user-info", ((JSON.stringify(user))))
    
    self.$router.push({ name: 'Home' })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      
     
  
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
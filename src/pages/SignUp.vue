<template>
  <div class="signup">
<div v-if="loading"><Modal/></div>
    <h2>Sign Up</h2>
    <form class ="form" @submit.prevent="SubmitForm()" >

<div class="row">
  <div class="col"> 
<label for="firstname" >Your Names:</label>
<input type="text" v-model="firstname" required >
</div>
  
    </div>
    <div class="row">
   <label for="email">Email</label>
        <input v-model="email" type="email" required >
        </div>
        <div class="row">
          <p v-if="passwordLengthQuery">{{passwordErr}}</p>
   <label for="password">Password</label>
        <input v-model="password" :type ="type" required >
        <div class="absolute">
          <input type = "checkbox" @click="showPassword()">
        </div></div>
            <div class="row">
              <p v-if="confirmPasswordLengthQuery">{{confirmPasswordErr}}</p>
   <label for="password">Confirm Password</label>
        <input v-model="confirmPassword" @keyup="confirmMatch" :type ="confirmtype" required >
        <div class="absolute">
          <input type = "checkbox" @click="showConfirmPassword()"> 
        </div>
        </div>
        
      <input type="submit" class=" btn"  value="SignUp"  >
        </form>
        <p>Already Have account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseAuth} from "../firebase.js"
import axios from "axios"
import Modal from "../components/Modal.vue"
export default {
components:{
  Modal
},
data(){
  return{
    
    loading:false,
  passwordErr:"Password must be at least 8 characters",
   confirmPasswordErr:"passwords does not match",
  password:"",
  confirmPassword:"",
  firstname:"",
  email:"",
  type:"password",
  confirmtype:"password",
  passwordLengthQuery:false,
  confirmPasswordLengthQuery:false,
}},
mounted(){

    let userinfo = localStorage.getItem("user-info")
    if (userinfo){
        this.$router.push("/")
    }},
methods:{

 async SubmitForm(){
let self = this;
if(this.password.length < 8){
  this.passwordLengthQuery = true;
  setTimeout(() => {
    this.passwordLengthQuery = false;
  }, 6000);

 
}else if(this.confirmPassword !== this.password){
    this.confirmPasswordLengthQuery = true;
  setTimeout(() => {
  this.confirmPasswordLengthQuery = false;
  }, 6000);
} 
else{
  this.loading = true;
createUserWithEmailAndPassword(firebaseAuth, this.email, this.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem("user-info", (JSON.stringify(user)),this.name)
    localStorage.setItem("name", this.firstname)
     self.$router.push({name:"Home"})
      this.loading = true;
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });
    
 

}
  },
  showPassword(){
   if(this.type==="password"){
    this.type="text"
   }else{
    this.type="password"
   }
  },
    showConfirmPassword(){
   if(this.confirmtype==="password"){
    this.confirmtype="text"
   }else{
    this.confirmtype="password"
   }
  },
}
}

</script>

<style >
.signup{
  margin-top:2rem
}
@media(max-width:400px){
  .signup{
    margin-top:1rem;
  }
}
</style>
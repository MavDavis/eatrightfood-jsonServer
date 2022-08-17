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

<style scoped >
.signup{
  margin-top:2rem
}
@media(max-width:400px){
  .signup{
    margin-top:1rem;
  }
  
form {
  max-width: 420px;
  margin: 60px auto 30px;
  background: var(--dark);
  text-align: left;
  padding: 30px;
  border-radius: 10px;
}

form .row {
  position: relative;
  display: block;
}
form .row label,
form .row p {
  color: var(--light);
  display: inline-block;
  margin: 15px 0;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
form .row p {
  display: block;
  color: var(--dark);
}
form .row input {
  background: transparent;
  display: block;
  padding: 13px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid var(--primary);
  color: var(--light);
}
form .row input:focus {
  outline: none !important;
  border: 1px solid var(--primary) !important;
  border-radius: 8px;
}

form .row .absolute {
  transition: all 0.3s ease-out !important;
  position: absolute;
  top: 20%;
  right: 10%;
}
form .row .absolute input {
  transition: 0.3s ease-out;
  background: transparent;
  display: inline-block;
  padding: 13px 6px;
  width: 100%;
  box-sizing: border-box;
}
.signup p,
.signup h2,
.login p,
.login h2 {
  text-align: center;
  color: var(--dark);
}
.signup p a,
.login p a {
  color: var(--primary) !important;
}
.btn {
  color: var(--light);
  display: block;
  margin: 25px auto;
  border: none;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 10px 1rem;
  background: var(--primary);
  transition: 0.3s ease-out;
  border-radius: 0 8px;
}
.btn:hover {
  border-radius: 8px 0;
  cursor: pointer;
}
}
</style>
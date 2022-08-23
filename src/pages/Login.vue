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
        
      <input type="submit" class="btn"  value="Login">
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
      localStorage.setItem("log", true)


signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user, this.name)
    localStorage.setItem("user-info", ((JSON.stringify(user))))
    
    self.$router.push({ name: 'Home' })
     this.loading = false;
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

<style scoped>
.login{
  margin-top:2rem
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
@media(max-width:400px){
  .login{
    margin-top:1rem;
  }
}

</style>
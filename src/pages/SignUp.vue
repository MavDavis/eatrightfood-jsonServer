<template>
  <div class="signup">
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
export default {

data(){
  return{
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
        this.$route.push("/")
    }},
methods:{

  SubmitForm(){

if(this.password.length < 8){
  this.passwordLengthQuery = true;
  setTimeout(() => {
    this.passwordLengthQuery = false;
  }, 6000);

  if(this.confirmPassword !== this.password){
    this.confirmPasswordLengthQuery = true;
  setTimeout(() => {
  this.confirmPasswordLengthQuery = false;
  }, 6000);
}
}else{

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
.signup p, signup h2{
  text-align:center;
  color:var(--light);
}
.signup p a{
    color:var(--primary) !important;
    
  }

    


        
 
</style>
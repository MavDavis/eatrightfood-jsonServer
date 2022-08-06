<template>
  <h2>Login</h2>
  <div class="login">
     <form  class ="form">
    <div class="row">
   <label for="email">Email</label>
        <input v-model="email" type="email" >
        </div>
        <div class="row">
   <label for="password">Password</label>
        <input v-model="password" type="password" >
        </div>
        
      <input type="submit" class="btn" @click="Login()" value="SignUp">
        </form>
        <p>Don't have an account yet? <router-link to="/SignUp">SignUp</router-link></p>
  </div>
</template>

<script>
export default {
data(){
  return{
 
  firstname:"",
  password:"",
  email:"",
}
},
mounted(){
    let userinfo = localStorage.getItem("user-info")
    if (userinfo){
        this.$route.push("/")
    }},
methods:{
  Login(){
    console.log(this.firstname)
  }
}
}
</script>

<style>
.login p{
  text-align:center;
  color:var(--light);

 
}
.login p a{
    color:var(--primary) !important;
    
  }
</style>
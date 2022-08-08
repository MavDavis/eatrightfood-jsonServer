<template>
  <div class="navbar">
    <div v-if="modal"><Modal/></div>
    <div class="logo">Eatrightfood</div>
    <div class="nav"><ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Dishes</router-link></li>
        <li><router-link to="/">Cart</router-link></li>
    </ul>
    </div>
    <div class="state" >
      <li v-if="log" @click="logout">
      Logout
      </li>
      <li v-else @click="login">Login</li>
  </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Modal from "./Modal.vue"
import {signOut} from "firebase/auth"
import {firebaseAuth} from "../firebase.js"

      const modal = ref(false)
   const log = ref(localStorage.getItem("log-status") =="true" )
   
   const login =() =>{
  }

    const logout = (() =>{
      let self = this;
      log.value = false;
     modal.value = true;
        signOut(firebaseAuth).then(()=>{
            
            (localStorage.setItem("log-status",log.value ))
            alert("signed out")
            localStorage.removeItem("user-info") 
        }).catch(err => {
          console.log(err)})
      
    })

</script>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.navbar{
  display:flex;
  width:100%;
  position:sticky;
  top:0;
  left:0;
  height:2.5rem;
  background:var(--light);
  color:var(--dark);
  justify-content:space-between;
  padding:0 1rem; 
}
.navbar .logo{
color:var(--dark);
          display:inline-block;
         padding:.8rem 0 ;
          font-size:1em;
          text-transform:uppercase;
          letter-spacing:1px;
          font-weight:bold;
}
.navbar .nav ul{
  display:flex;
}
.navbar ul li {
  margin:0 10px;
  list-style:none;
  
}.navbar ul li a {
  color:var(--dark);
  padding:.8rem 10px;
  text-decoration:none ;
  transition:0.2s ease-out;
}
.navbar ul li a:hover{
background:#ccc;
}
.navbar .state li{
 cursor: pointer;
  list-style:none;
}
</style>
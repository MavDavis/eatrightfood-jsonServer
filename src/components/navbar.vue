<template>
  <div class="navbar">
    <div v-if="modal"><Modal/></div>
    <div class="left-nav">
      <div class="logo">Eatrightfood</div>
    <div class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Dishes</router-link></li>
        <li><router-link to="/">Cart</router-link></li>
    </ul>
    </div>
    </div>
   <div class="right-nav">
    <div class="profile">
    <div class="circle">
      <span>{{nameFirstdigit}}</span>
     <span>{{name}}</span>
    </div>
    
    <div class="state" >
      <li v-if="log" @click="logout">
      Logout
      </li>
      <li v-else @click="login">Login</li>
  </div>
  </div>
   </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Modal from "./Modal.vue"
import {signOut} from "firebase/auth"
import { useRouter } from "vue-router";
import {firebaseAuth} from "../firebase.js"
      const modal = ref(false)
   const log = ref(true);
      const router =useRouter()
      let name = ref(localStorage.getItem("name"))
      const nameFirstdigit = ref(name.value.slice(0,1).toUpperCase())
      name = nameFirstdigit.value+ name.value.slice(1, name.value.length)
  /*
   ref(localStorage.getItem("log-status") =="true" )
      (localStorage.setItem("log-status", log.value ))
  */
   const login =() =>{
    alert("Enter form details below")
  }

    const logout = (() =>{
      log.value = false;
     modal.value = true;
  
      signOut(firebaseAuth).then(()=>{
         localStorage.removeItem("user-info") 
          router.push({name:"Login"}) 
           modal.value = false;
        }).catch(err => {
          console.log(err)})
      
    })

</script>

<style scoped>

.navbar{
  display:flex;
  width:100%;
  position:sticky;
  top:0;
  left:0;
  height:10vh;
  background:var(--light);
  color:var(--dark);
  justify-content:space-between;
  padding:1rem; 
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

/*
.gallery {
	display: flex;
	flex-wrap: wrap;

}

.gallery-item {
	
	flex: 1 0 24rem;

	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}

.gallery-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 400ms ease-out;
}

.gallery-image:hover {
	transform: scale(1.15);
}
*/
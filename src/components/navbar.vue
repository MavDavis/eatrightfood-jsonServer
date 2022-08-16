<template>
  <header>
    <div v-if="modal"><Modal /></div>
    <a href="#" class="logo">UnisexWares</a>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/"
            >Home<i id="cart-basket" class="fas fa-home"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/fashion"
            >Fashions<i id="cart-basket" class=""></i
          ></router-link>
        </li>

        <li>
          <router-link to="/cart"
            >Cart<i id="cart-basket" class="fas fa-shopping-cart"></i
          ></router-link>
        </li>
      </ul>
    </nav>
    <div class="icons">
      <div class="profile">
        <div>
          <span class="circle">{{ nameFirstdigit }}</span>
          <span class="name">{{ Username }}</span>
        </div>

        <div class="state">
          <li v-if="log" @click="logout">Logout</li>
          <li v-else>Login</li>
        </div>
        <div class="toggler" v-on:click="toggleSidebar">
          <div v-if="bars"><i class="fa fa-bars bars-icons"> </i></div>
          <div v-else><i class="fa fa-times bars-icons"> </i></div>
        </div>
      </div>
    </div>
  </header>
  <div v-if="!bars">
    <Mobilesidebar
      @loggedout="
        logout();
        toggleSidebar();
      "
      :log="log"
      :name="name"
      :nameFirstdigit="nameFirstdigit"
    />
  </div>
</template>

<script>
import {ref} from "vue"
import Mobilesidebar from "./mobilesidebar.vue"
import Modal from "./Modal.vue"
import {signOut} from "firebase/auth"

import {firebaseAuth} from "../firebase.js"
export default{
  setup(){
let name = ref(localStorage.getItem("name"))
return{name}
  },
  data(){
    return{
      modal :false,
       bars : true,
        log :true,

    }
      },
computed:{
  Username(){
    return  this.name.splice(0,1).toUpperCase() + this.name.splice(1, this.name.length)
  },
  nameFirstdigit(){
    this.name.splice(0,1).toUpperCase()
  }
},
      methods:{
toggleSidebar(){
  this.bars = !this.bars
 },
 login(){
    alert("Enter form details below")

  },
  logout(){
      this.log = false;
     this.modal = true;

     

      signOut(firebaseAuth).then(()=>{
         localStorage.removeItem("user-info")
          router.push({name:"Login"})
        this.modal = false;
        }).catch(err => {
          console.log(err)})

 },


    }}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--light);
  padding: 1rem 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: var(--box-shadow);

  .logo {
    color: var(--dark);
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bolder;
  }
  nav.navbar {
    ul {
      display: flex;
      li {
        list-style: none;

        a.router-link-active {
          background-color: var(--primary);
          color: #fff;
        }
        a {
          text-decoration: none;
          display: flex;
          font-size: 1.3rem;
          border-radius: 0.5rem;
          padding: 5px;
          margin: 8px;
          color: var(--dark);
          transition: ease 0.5s;

          i {
            margin-left: 5px;
          }
          &:hover {
            background-color: var(--primary);
            color: #fff;
          }
        }
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggler {
      i {
        display: none;
      }
    }
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .state {
        margin-left: 1rem;
        li {
          list-style: none;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .circle {
        border-radius: 50%;
        border: 2px solid var(--dark);
        margin-right: 8px;
        padding: 5px;
      }
      .name {
        transition: ease-out 1s;
        text-transform: uppercase;
        &:hover {
          letter-spacing: 1px;
        }
      }
    }

    @media (max-width: 850px) {
      .toggler {
        i {
          display: flex;
          font-size: 1.3rem;
          border-radius: 0.5rem;
          padding: 5px;
          margin: 8px;
          color: var(--dark);
          transition: ease 1.5s;
          cursor: pointer;
        }
      }
      .profile {
        .name,
        .state {
          display: none;
        }
        .circle {
          margin-right: 1rem;
        }
      }
    }
    @media (max-width: 280px) {
      .profile {
        .circle {
          display: none;
        }
      }
    }
  }
  @media (max-width: 850px) {
    nav.navbar {
      display: none;
    }
  }
}
</style>

/* .gallery { display: flex; flex-wrap: wrap; } .gallery-item { flex: 1 0 24rem;
margin: 1rem; box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4); overflow:
hidden; } .gallery-image { display: block; width: 100%; height: 100%;
object-fit: cover; transition: transform 400ms ease-out; } .gallery-image:hover
{ transform: scale(1.15); } */

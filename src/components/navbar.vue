<template>
  <header>
    <div v-if="modal"><Modal /></div>
    <a href="#" class="logo">Mavs Store</a>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">Home<i class="fas fa-home"></i></router-link>
        </li>
        <li>
          <router-link to="/shop"
            >Shop<i class="fas fa-tshirt"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/Contact"
            >Contact<i class="fas fa-phone"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/cart" class="basketcart"
            >Cart<i class="fas fa-shopping-cart"></i>
            <div class="num">{{num}}</div>
          </router-link>
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
          <li v-if="$store.state.count" @click="logout(); $store.commit('changeLoggedInState')">Logout</li>
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
      @closeBarIcon="toggleSidebar"
      :log="log"
      :name="name"
      :nameFirstdigit="nameFirstdigit"
    />
  </div>
  <div @click="conl()">logged</div>
</template>

<script>
import { ref } from "vue";
import Mobilesidebar from "./mobilesidebar.vue";
import Modal from "./Modal.vue";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase.js";
export default {
  setup() {
    let quant = JSON.parse(localStorage.getItem("cart"));
let num = ref(quant ? quant.length : 0)
    let name = ref(
      localStorage.getItem("name") ? localStorage.getItem("name") : "User"
    );
    
    return { name, num};
  },
  components: {
    Modal,
    Mobilesidebar,
  },
  data() {
    return {
      modal: false,
      bars: true,
    };
  },
  created() {},

  computed: {
    Username() {
      return (
        this.name.substring(0, 1).toUpperCase() +
        this.name.substring(1, this.name.length)
      );
    },
    nameFirstdigit() {
      return this.name.substring(0, 1).toUpperCase();
    },
  },
  methods: {
    toggleSidebar() {
      this.bars = !this.bars;
    },
    login() {
      alert("Enter form details below");
    },
    conl() {
      console.log(this.name);
    },
    logout() {
      this.modal = true;

      signOut(firebaseAuth)
        .then(() => {
          localStorage.removeItem("user-info");
          this.$router.push({ name: "Login" });
          this.modal = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--light);
  padding: 1rem 5%;
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


&.basketcart{
  position:relative;

  .num{
    position:absolute;
    top:-16px;
    right:-13px;
    background-color:var(--primary);
    color:#fff;
    border-radius:6px;
    padding:6px;

  }
}
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

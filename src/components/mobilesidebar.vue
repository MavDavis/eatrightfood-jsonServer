<template>
  <aside>
    <a href="#" class="logo">Mavs store</a>

    <ul>
      <li @click="closeBars" v-for="route in routes" :key="route.to">
        <router-link :to="route.to"
          >{{ route.name }}<i :class="route.icon" class="fas"></i
        ></router-link>
      </li>
      <li  @click="closeBars">
          <router-link to="/cart" class="basketcart"
            >Cart<i class="fas fa-shopping-cart"></i>
            <div class="num">{{ $store.state.cartQuant }} </div>
          </router-link>
        </li>
    </ul>

    <div class="profile">
      <div>
        <span class="circle">{{ nameFirstdigit }}</span>
        <span class="name">{{ $store.state.username }}</span>
      </div>

      <div class="state">
     <li v-if="$store.state.count" @click="logout(); $store.commit('changeLoggedInState')">Logout</li>
          <li v-else @click="login()" >Login</li>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Mobilesidebar",
  props: [ "nameFirstdigit", "name"],
  data() {
    return {
      routes: [
        { name: "Home", to: "/", icon: "fa-home" },
        { name: "Shop", to: "/shop", icon: "fa-tshirt" },
          { name: "Contact", to: "/Contact", icon: "fa-phone" },
      ],
    };
  },
  methods: {
    logout() {
      this.$emit("loggedout");
    },
    closeBars() {
      this.$emit("closeBarIcon");
    },
    login(){
            this.$emit("closeBarIcon");
this.$router.push({name:'Login'})
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
}
aside {
  position: fixed;
  top: 5rem;
  right: 0;
  width: 100%;
  height: calc(100vh - 5rem);
  background: var(--light);
  box-shadow: var(--box-shadow);
  z-index: 800;
  display: flex;
  flex-direction: column;
  .logo {
    padding: 0 5%;
    color: var(--dark);
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bolder;
    margin: 0 0 2rem 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
padding:  0 5%;
    li {
  
      a {
        text-decoration: none;
        display: flex;
        font-size: 1.3rem;
   
     
      
        color: var(--dark);
        transition: ease 1.5s;
        i {
          margin-left: 5px;
        }
        &:hover {
          letter-spacing: 1px;
          border-bottom: 2px solid var(--primary);
        }
          &.basketcart {
            position: relative;

            .num {
              position: absolute;
              top: -16px;
              left: 4rem;
              background-color: var(--primary);
              color: #fff;
              border-radius: 6px;
              padding: 6px;
            }
          }
      }
    }
  }
  .profile {
    display: flex;
    flex-direction: column;
    margin: 3rem 0 0 0;
padding:  0 5%;
    .state {
      margin: 2rem 0 0 0;
      li {
        list-style: none;
        font-weight: bold;
        font-size: 1.2rem;
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
}
</style>

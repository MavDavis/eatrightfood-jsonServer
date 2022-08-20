<template>
  <div class="shop">
    <div v-if="modal">
      <Modal />
    </div>
    <div v-if="!loading">
      <cartSlider :data="datas" :display="display" />
      <FilterItems @fetchCategory="fetchCategory" />
    </div>
    <div v-else>Loading..</div>

    <Items :CartItems="cartItems" />
  </div>
</template>

<script>
import cartSlider from "../components/cartSlider.vue";
import DisplayViewVue from "../components/DisplayView.vue";
import FilterItems from "../components/filter.vue";
import Modal from "../components/Modal.vue";
import Items from "../components/Items.vue";
export default {
  components: {
    Items,
    cartSlider,
    Modal,
    FilterItems,
    DisplayViewVue,
  },
  data() {
    return {
      datas: null,
      loading: true,
      loading2: true,
      error: null,
      display: null,
      cartItems: null,
      cartCategory: null,
      modal: false,
      url: `https://fakestoreapi.com/products/`,
    };
  },
  mounted() {
    let userinfo = localStorage.getItem("user-info");

    if (userinfo) {
      return;
    } else {
      this.$router.push("/Login");
    }
  },
  created() {
    fetch(this.url)
      .then((res) => res.json())
      .then((category) => {
        this.cartItems = category.map(cartItem => {
          cartItem ={...cartItem, inCart :false}
          return cartItem
});
console.log(this.cartItems);
      });

    window.addEventListener("resize", this.onResize);
    window.addEventListener("DOMContentLoaded", this.onResize);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        this.datas = result;
        this.loading = false;
      })
      .catch((error) => console.log("error :" + error));
  },
  methods: {
    fetchCategory(items) {
      this.modal = true;
      this.url = `https://fakestoreapi.com/products/category/${items}`;
      fetch(this.url)
        .then((res) => res.json())
        .then((category) => {
          this.cartItems = category;

          this.modal = false;
        });
    },
    onResize() {
      if (window.innerWidth > 960) {
        this.display = 8;
      }
      if (window.innerWidth < 960) {
        this.display = 4;
      }
      if (window.innerWidth < 600) {
        this.display = 3;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  overflow: visible;
  position: relative;
  min-height: fit-content;
  height: 100%;
  width: 100%;
}
</style>

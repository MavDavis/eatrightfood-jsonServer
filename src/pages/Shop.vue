<template>
  <div class="shop">
    <div v-if="!loading">
      <cartSlider :data="datas" :display="display" />
    </div>
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import cartSlider from "../components/cartSlider.vue";
import DisplayViewVue from "../components/DisplayView.vue";
export default {
  components: {
    cartSlider,
    DisplayViewVue,
  },
  data() {
    return {
      datas: null,
      loading: true,
      error: null,
      display: null,
      cat:null,
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
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(category=>{
              this.cat = category
              console.log(category, this.cat)})


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

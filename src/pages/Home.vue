<template>
  <div class="home">
    <Slider />
    <DisplayView :data="datas" :loading="loading"  />
  </div>
</template>

<script>

import Slider from "../components/Slider.vue"
import DisplayView from "../components/DisplayView.vue"
export default {
  components: {
    Slider,
DisplayView,
  },
  mounted() {
    let userinfo = localStorage.getItem("user-info");

    if (userinfo) {
      return;
    } else {
      this.$router.push("/Login");
    }
  },
  data() {
    return {
      datas: null,
      loading: true,
      error: null,
    };
  },

  created() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        this.datas = result;
        this.loading = false;
      })
      .catch((error) => console.log("error :" + error));
  },
};
</script>

<style lang="scss">
.home {
  overflow: visible;
  position: relative;
  min-height: fit-content;
  height: 100%;
  width: 100%;


  section {
  position: relative;
  width: 100%;
  height: 100vh;
  }
}
</style>

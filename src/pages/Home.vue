<template>
  <div class="home">
    <Slider />
        <div v-if="!loading" >
            <DisplayView :datas="datas" />
            </div>
      <div v-else>
       <h1>Loading...</h1>
      </div>
 </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import DisplayView from "../components/DisplayView.vue";
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
    fetch("https://fakestoreapi.com/products?limit=6")
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
  }
}
</style>

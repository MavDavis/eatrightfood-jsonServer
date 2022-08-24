<template>
  <DisplayView :datas="dataid" :buttonEnable="buttonEnable" />
</template>

<script>
import { ref } from "@vue/reactivity";
import DisplayView from "./DisplayView.vue";
export default {
  components: {
    DisplayView,
  },
  data() {
    return {
      buttonEnable: true,
          dataid:     [
      {
        image: ".././src/jogger.webp",
        price: "Yellow Joggers",
        id: 1,
      },
      {
        image: ".././src/singlet.webp",
        price: "Bikini tops",
        id: 1,
      },
      {
        image: ".././src/soccer-jersey.webp",
        price: "Soccer jersey",
        id: 1,
      },
      {
        image: ".././src/jogger2.webp",
        name: "black Joggers",
        id: 1,
      },
      {
        image: ".././src/canvas.webp",
        name: "Sneakers",
        id: 1,
      },
      {
        image: ".././src/assets/fullattire.jfif",
        name: "Full sets of sports wear for ladies",
        id: 1,
      },
    ],
    }
  },
};
</script>

<style>
</style>
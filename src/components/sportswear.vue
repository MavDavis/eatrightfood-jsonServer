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
        image: "@/assets/jogger.webp",
        price: "Yellow Joggers",
        id: 1,
      },
      {
        image: "@/assets/singlet.webp",
        price: "Bikini tops",
        id: 1,
      },
      {
        image: "@/src/assets/soccer-jersey.webp",
        price: "Soccer jersey",
        id: 1,
      },
      {
        image: "@/assets/jogger2.webp",
        name: "black Joggers",
        id: 1,
      },
      {
        image: "@/assets/canvas.webp",
        name: "Sneakers",
        id: 1,
      },
      {
        image: "@/assets/fullattire.webp",
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
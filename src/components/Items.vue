<template>
  <heading header="Shopping" pTag="Shop unique at affordable price" />
  <div class="gallery">
  <div v-for="cartItem in CartItems" :key="cartItem.id" class="gallery-item">
    <div class="">
      <img :src="cartItem.image" alt="" />
      <p>${{cartItem.price}}</p>
      
    </div>
  </div>
  </div>
</template>

<script>
import heading from "./heading.vue";
export default {
  props: ["CartItems"],
  components: {
    heading,
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding: 2rem 5%;
  width: 100vw;
  margin: 0 auto 3rem;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;

  .gallery-item {
    margin: 1rem auto;
    height: 300px;
    max-width: 90%;
    width: 300px;
overflow: hidden;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
transition: all ease-in .3s;
    img {
      display: block;
      position: relative;
      width: 100%;
      max-height: 60%;
    }
    &:hover{
        transform: translateY(-5px);
    }
  }
}
</style>
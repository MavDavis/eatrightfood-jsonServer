<template>
  <heading header="Shopping" pTag="Shop unique at affordable price" />
  <div class="gallery">
    <div v-for="cartItem in CartItems" :key="cartItem.id" class="gallery-item">
      <div class="">
        <img :src="cartItem.image" alt="" />
        <div class="price">
          Price:
          <h4>${{ cartItem.price }}</h4>
        </div>
        <span><i class="fas fa-star"></i>{{ cartItem.rating.rate }}</span>
        <p>{{ cartItem.title }}</p>
        <button @click="addTocart(cartItem)">Add to Cart</button>
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
  methods:{
    addTocart(item){
console.log(item);
    }
  }
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
    height: fit-content;
    max-width: 90%;
    width: 300px;
    overflow: hidden;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    transition: all ease-in 0.3s;
    color: var(--dark);
    background: #fff;

    .price {
      display: flex;
      h4 {
        margin-left: 16px;
      }
    }
    p,
    span,
    .price {
      padding: 10px 0 10px 16px;
    }
    span i {
      color: var(--primary);
      margin-right: 16px;
    }
    img {
      display: block;
      position: relative;
      width: 100%;
      max-height: 60%;
    }
    &:hover {
      transform: translateY(-5px);
    }
    button {
      display: flex;
      width: 80%;
      margin: 8px auto;
      border: none;
      background: var(--dark);
      color: var(--light);
      padding: 9px 0;
      border-radius: 10px;
      cursor: pointer;
      justify-content: center;
      transition: ease-in-out 0.7s all;

      &:hover {
        background: var(--primary);
      }
    }
  }
}
</style>

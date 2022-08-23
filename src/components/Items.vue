<template>
  <heading header="Shopping" pTag="Shop unique at affordable price" />
  <div class="gallery">
    <div
      v-for="(cartItem, index) in CartItems"
      :key="cartItem.id"
      class="gallery-item"
    >
      <div class="">
        <img :src="cartItem.image" alt="" />
        <p>{{ cartItem.title }}</p>
        <div class="price">
          Price:
          <h4>${{ cartItem.price }}</h4>
        </div>
        <div class="row">
          <span><i class="fas fa-star"></i>{{ cartItem.rating.rate }}</span>
          <span @click="like"><i class="fas fa-heart"></i></span>
        </div>

        <button
          v-if="cartItem.inCart === false"
          @click="addTocart(cartItem, index); $store.commit('increaseCartQuant')"
        >
          Add to Cart <i class="fas fa-shopping-cart"></i>
        </button>
        <button v-else>
          <router-link :to="`/details/` + cartItem.id">
            Added! see details</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

import { db } from "../firebase";

import heading from "./heading.vue";
import { ref } from "@vue/reactivity";
export default {
  props: ["CartItems"],
  components: {
    heading,
  },
  setup() {},
  data() {
    return {
      cartArray: [],
    };
  },
  methods: {
    addTocart(cartItem) {
      cartItem.inCart = true;
      let item = {
        title: cartItem.title,
        id: cartItem.id,
        image: cartItem.image,
        description: cartItem.description,
        price: cartItem.price,
        inCart: true,
        quantity: 1,
      };

      let storedCart = JSON.parse(localStorage.getItem("cart"));
      let Array = JSON.parse(localStorage.getItem("Array"));
      for (let product of Array) {
        if (product.id == cartItem.id) {
          product.inCart = true;
        }
      }
      localStorage.setItem("Array", JSON.stringify(Array));
      if (storedCart) {
        let res = storedCart.find((item) => item.id == cartItem.id);
        if (res === undefined) {
          storedCart = [...storedCart, item];
          localStorage.setItem("cart", JSON.stringify(storedCart));

        }
      } else {
        let array = [];
        array.push(item);
        localStorage.setItem("cart", JSON.stringify(array));
      }
    },

    async like() {
      const washingtonRef = doc(db, "cities", "DC");

      await updateDoc(washingtonRef, {
        capital: true,
      });
    },
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
      a {
        color: #fff;
        text-decoration: none;
      }
      &:hover {
        background: var(--primary);
      }
    }
  }
}
</style>

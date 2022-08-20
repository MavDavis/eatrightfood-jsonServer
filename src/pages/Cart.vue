<template>
<div v-for="cartItem in CartItems" :key="cartItem.id"><h1>{{cartItem.name}}</h1></div>
</template>

<script setup>
import { collection, onSnapshot } from "firebase/firestore";
import {db} from '../firebase'
import { ref , onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router'

        const CartItems = ref([])

  onMounted(() => {
    let userinfo = localStorage.getItem("user-info");
  let CartItems = (localStorage.getItem ('cart'))
    if (userinfo) {
      return;
    } else {
      router.push("/Login");
    }})
//     const querySnapshot = await getDocs(collection(db, "cart"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });
/*
onSnapshot(collection(db, "cart"), (querySnapshot) => {
  const fbcarts = [];
  querySnapshot.forEach((doc) => {
    console.log(doc);
    const carts ={
        name: doc.data().name,
        id:doc.id,
        price:doc.data().price,
        quantity:doc.data().quantity
    }
      fbcarts.push(carts);
  });
  console.log(fbcarts, "hy")
CartItems.value = fbcarts;
});*/

  

</script>

<style>

</style>
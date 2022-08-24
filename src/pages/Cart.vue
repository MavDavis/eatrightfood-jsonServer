<template>
<div v-if="$store.state.cartQuant != 0">
<div class="head">
    <h3>Description</h3>
    <h3>Price</h3>
    <h3>Quantity</h3>
    <h3>Del/Edit</h3>
  </div>
<div v-for="cartItem in CartItems" :key="cartItem.id">
<EachItemInLc :data="cartItem" @remove="RemoveFromStorage"/>
</div>
<button>
          <router-link to="/payment">Make payments</router-link>
</button>
</div>
<div v-else>
  <div class="empty-cart">
    <i class="fas fa-shopping-cart"></i>
    <p>Empty Cart</p>
  </div>

</div></template>

<script setup>
import { collection, onSnapshot } from "firebase/firestore";
import {db} from '../firebase'
import { ref , onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router'
import EachItemInLc from '../components/ReadyForCheckout.vue'

let CartItems =ref([]);
const loading =ref(true);
  onMounted(() => {
  let localItems =  JSON.parse(localStorage.getItem("cart"))
  if(localItems === null || localItems === undefined || localItems.length < 1 ){
       loading.value = true;

  }else{
     loading.value = false;
    CartItems.value = localItems;
  }
 
    })
    const RemoveFromStorage = (id) =>{
        let localItems =  JSON.parse(localStorage.getItem("cart"))
      let newLocalItems=  localItems.filter(item => item.id !== id)
       localStorage.setItem("cart", JSON.stringify(newLocalItems));
    CartItems.value = newLocalItems;
  let Array =  JSON.parse(localStorage.getItem("Array"))
for (let product of Array) {
        if (product.id == id) {
          product.inCart = false;
        }
      }
      localStorage.setItem("Array", JSON.stringify(Array));

    }
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

<style scoped lang="scss">
.empty-cart{
  width:100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i.fas.fa-shopping-cart{
    font-size: 9rem;
  }
  p{
    font-size: 2rem;
    margin-top: 1.5rem;
  }

}
  .head{
    padding: 1rem 5%;
    position: relative;
    top:5rem;
    margin: 0 0 5rem 0;
    display: flex;
    justify-content: space-between !important;
    color:var(--dark);
    flex-wrap: wrap;
    width: 100%;
    h1{
      flex-basis: 24.5%;
    }
    @media(max-width: 500px){
      font-size: 1rem;
    }
      @media(max-width: 290px){
      font-size: .6rem;
    }
}
button{
  display: flex;
  margin: 1rem auto;
width: 60%;
justify-content: center;
padding: 8px 1rem;
border-radius: 10px;
border:none;
background: var(--dark);
a{
color:var(--light);
text-decoration: none;
}
text-transform: uppercase;
transition: ease-out .4s;
&:hover{
  cursor: pointer;
  background: var(--primary);
  color:#fff;
}
}
</style>
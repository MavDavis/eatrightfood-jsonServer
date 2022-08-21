<template>
  <section>
     <form class="paymentForm" @submit.prevent="payWithPaystack">
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" v-model="email" required />
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="tel" v-model="amount" required />
  </div>
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" v-model="firstName"/>
  </div>
  <div class="form-group">
    <label for="last-name">Last Name</label>
    <input type="text" v-model="lastName" />
  </div>
  <div class="form-submit">
    <button type="submit" @click="payWithPaystack()"> Pay </button>
  </div>




</form>
  </section>


</template>

<script setup>
import { ref } from "@vue/reactivity";

const amount = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
//paymentForm.addEventListener("submit", payWithPaystack, false);
const payWithPaystack = (e) => {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: "pk_test_b76ad5b6fb6c5e5eb2542439c62606b8bc99f359",
    email: email.value,
    amount: amount.value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1),
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}


</script>

<style scoped>
section{
  position: relative;
  top: 5rem;
  height: 100vh;
}
</style>
<template>
<div  class="paystackvue">
  <section>
    <form class="paymentForm" @submit.prevent="payWithPaystack">
      <div class="form-group" @click="show" @mouseleave="hide">
        <label for="email">Email Address</label>
        <div v-if="showEmailExplain">
          <p>Please, Input your right email to receive a payment receipt!</p>
        </div>
        <input type="email" v-model="email" required />
      </div>
   
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" v-model="lastName" />
      </div>
      <div class="form-group">
        <button type="submit" @click="payWithPaystack()">Make Payment</button>
      </div>
    </form>
  </section>
<section>
    <Amount :amount="amount" />

</section>
</div>
</template>

<script>
import Amount from "../components/amount.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    Amount,
  },
  computed: {
    sumItem() {
      const sum = this.localItems.reduce((acc, item) => acc + item.price, 0);

     return( sum);
    },
  },
  setup() {
    const showEmailExplain = ref(false);
    const localItems = ref(JSON.parse(localStorage.getItem("cart")));

    const amount = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");

   
    return {
      firstName,
      amount,
      lastName,
      email,
     
      localItems,
      showEmailExplain,
    };
  },
  methods:{
     payWithPaystack (e){

      e.preventDefault();

      let handler = PaystackPop.setup({
        key: "pk_test_b76ad5b6fb6c5e5eb2542439c62606b8bc99f359",
        email: this.email,
        amount: this.sumItem * 700,
        ref: "" + Math.floor(Math.random() * 1000000000 + 1),
        onClose: function () {
          alert("Window closed.");
        },
        callback: function (response) {
          let message = "Payment complete! Reference: " + response.reference;
          alert(message);
        },
      });

      handler.openIframe();
    }
  },
  created() {
    console.log(this.sumItem)
  },
};
</script>

<style scoped lang="scss">
.paystackvue{
  position: relative;
  top:5rem;
  padding: 0 5%;
  display: flex;
  margin: 10rem 0;
  flex-wrap: wrap;
  width:100%;
  justify-content: space-between;

  section{
    flex-basis: 45%;
.paymentForm{
    max-width: 420px;
  text-align: left;
  border-radius: 10px;
  .form-group{
  input{
background: transparent;
  display: block;
  padding: 13px 6px;
  position:relative;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid var(--primary);
  color: var(--dark);

  &:focus {
  outline: none !important;
  border: 1px solid var(--primary) !important;
  border-radius: 8px;
}
  }
  label{
 color: var(--dark);
  display: inline-block;
  margin: 15px 0;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  }
  button{
     color: var(--light);
  display: block;
  margin: 25px auto;
  border: none;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 10px 1rem;
  background: var(--primary);
  transition: 0.3s ease-out;
  border-radius: 0 8px;
  }
}
   
  }
   @media(max-width: 600px){
flex-direction: column-reverse;

    }
}
}
</style>

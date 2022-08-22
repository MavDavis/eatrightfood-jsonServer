<template>
<div v-for="data in datas" :key="data.id">
<h4>{{data.title.slice(0,15)}}..</h4>
<p>${{data.price}}</p>
<p>{{data.quantity}}</p>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name:"Amount",
    props:["amount"],
    data(){
      return{
        datas:[],
        
      }
    },
  setup() {

  },
  computed:{
    sumItem(){
    console.log(this.localItems);
      var sum = this.localItems.reduce((acc, item) => acc + item.price, 0);
return(sum);
      
    }
  },
  created(){
        const localItems = ref(JSON.parse(localStorage.getItem("cart")));
this.datas = localItems
  }
};
</script>

<style>
</style>
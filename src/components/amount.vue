<template>
<h1>HelloWorld</h1>
<input type="number"  value="{{sumItem}}"/>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name:"Amount",
    props:["amount"],
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
  }
};
</script>

<style>
</style>
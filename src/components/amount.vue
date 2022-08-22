<template >
<div class="amountDetails">
<div v-for="data in datas" :key="data.id" class="each">

  <h4>{{data.title.slice(0,15)}}..</h4>
<p>${{data.price}}</p>
<p>{{data.quantity}}items</p>
</div>
<p class="total">
  <span>Total: </span>
  ${{sumItem}}
</p>
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

  computed:{
    sumItem(){
       return this.datas.reduce((acc, item) => acc + item.price, 0);

      
    }
  },
  created(){
        const localItems = ref(JSON.parse(localStorage.getItem("cart")));
this.datas = localItems
  }
};
</script>

<style scoped lang="scss">
.amountDetails{
  position:relative;
  background: #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:fit-content;
  min-height: 100%;

.each{
  border-bottom: 1px solid var(--dark);
    padding:2rem 5%;
display:flex;
justify-content: space-between;

}
p.total{
  padding: 1em 5%;
font-size: 2rem;
color:var(--dark);
font-weight: bolder;
span{
  font-size: 1.5rem;
}
}
}
</style>
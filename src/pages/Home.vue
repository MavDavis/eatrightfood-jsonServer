<template>
<div class="home">
   <Slider/>
  
</div>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
components:{
  Slider
},
  mounted(){
    fetch("https://fakestoreapi.com")
    .then(res => res.json())
    .then(data => console.log(data));
    let userinfo = localStorage.getItem("user-info")
    if (userinfo){
       return
    }else{
       this.$router.push("/Login")
    }
}
};
</script>

<style>
.home{
 position:relative;
 height:100%;
 width:100%;
  
  }
</style>

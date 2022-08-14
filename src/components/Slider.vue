<template>
  <section>
    <Swiper  :autoPlay='true' :showIndicator='true' interval="3500" duration="500" class="Swiper">
        <Slide  class="slide slide1">
          
      <div class="text">
        <h2>Unisex Wears</h2>
        <p>  UnisexWares provides you with the best quality wares for both female and male at  affordable prices.</p>
      </div>
        </Slide>
         <Slide class="slide slide2">
         <div class="text">
        <h2>Stylish</h2>
        <p>Our customers gets the best styles from us. We have the right patterns and sizes of your choice.</p>
      </div>
       </Slide>
       <Slide class="slide slide">
       <div class="text">
        <h2>Affordable</h2>
        <p>Yayy! We don't sell just unique designs, we sell in affordable prices. High Quality, yet Affordable.</p>
      </div>
       </Slide>
      
   </Swiper>
   <div class="opacity">
   </div>
  </section>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
components:{
  Swiper, Slide,
},
data(){
  return{
  }
}
}
</script>

<style lang="scss">
section{
    position:relative;
    width:100%;
   top:5rem;
 height:calc(100vh - 6rem);

.Swiper{
    position:relative;
    width:100%;
    height:100%;

    .slide{

      &.slide1{
        background-image:url("../");
      }
.text{
  color:#fff;
}
    }
}

    .opacity{
    position:absolute;
    background:rgba(6, 13, 24, 0.5);
    top:0;
    left:0;
    height:100%;
    width:100%;
}
}
</style>
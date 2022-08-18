<template>
  <div class="home">
    <Slider />
   <heading :pTag="pTag"
    :header="header"/>
        <div v-if="!loading" >
            <DisplayView :datas="datas" />

            </div>
      <div v-else>
       <h1>Loading...</h1>
      </div>
        <heading pTag="Give your workout A new Style"
               
    header="Latest Wears(Sports Wears)"/>
      <section-three/>
      <heading header="Reviews" pTag="What Our customers Say"/>
      <FAQ :display="display"/>
 </div>
</template>

<script>
import Heading from "../components/heading.vue";
import Slider from "../components/Slider.vue";
import DisplayView from "../components/DisplayView.vue";
import SectionThree from "../components/sectionThree.vue";
import FAQ from "../components/FAQ.vue";
export default {
  components: {
    Slider,
    DisplayView,
    Heading,
    SectionThree,
    FAQ
},

  data() {
    return {
      pTag:"The best offers for both clothes and accessories",
      header:"Our best offers",
      datas: null,
      loading: true,
      error: null,
      display: null
    };
  },

  created() {
  

     window.addEventListener('resize', this.onResize);
   window.addEventListener('DOMContentLoaded', this.onResize)
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((result) => {
        this.datas = result;
        this.loading = false;
      })
      .catch((error) => console.log("error :" + error));
  },
  methods:{
      onResize() {
    console.log("hy");
      if(window.innerWidth > 960){
      this.display = 3
    }
     if (window.innerWidth <  960) {
      this.display = 2
    } 
     if(window.innerWidth < 600){
      this.display = 1
    }
   
  }
  }
};
</script>

<style lang="scss">
.home {
  overflow: visible;
  position: relative;
  min-height: fit-content;
  height: 100%;
  width: 100%;

  section {
    position: relative;
    width: 100%;
  }
}
</style>

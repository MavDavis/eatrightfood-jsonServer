<template>


    <section class="review" id="review">
       
         <swiper
    :modules="modules"
    :slides-per-view="display"
    :space-between="50"
  :autoplay="3000"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  > 
                <swiper-slide v-for="slide in swipeArray" :key="slide.name" class="slide"> 
                <i class="fa fa-quote-right"></i>
                    <div class="user">
                        <img src="images/ceo ERF.jpg" alt="">
                        <br>
                        <div class="user-info">
                            <h3>{{slide.name}}</h3>
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-alt"></i>
                            </div>
                        </div>

                    </div>
                    <p>{{slide.post}}</p>
                </swiper-slide>
               
              
            </swiper>
    </section>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay'
import { ref } from '@vue/reactivity';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {

      };
      let slidelength = ref("");

      const onSlideChange = () => {
      };

      const swipeArray = ref([
        {name:"CEO_EatRightFood", img:"../assets/img1", post:"Well, I've been in the food industry for a while but i must say that Eat right food are very good at what they do . They are interested in the customer's well-being"},
         {name:"CEO_EatRightFood", img:"../assets/img1", post:"Well, I've been in the food industry for a while but i must say that Eat right food are very good at what they do . They are interested in the customer's well-being"},
          {name:"CEO_EatRightFood", img:"../assets/img1", post:"Well, I've been in the food industry for a while but i must say that Eat right food are very good at what they do . They are interested in the customer's well-being"},
            {name:"CEO_EatRightFood", img:"../assets/img1", post:"Well, I've been in the food industry for a while but i must say that Eat right food are very good at what they do . They are interested in the customer's well-being"}
      ]);
 
      return {
        onSwiper,
        onSlideChange,
        swipeArray,
        slidelength,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
props:["display"],
mounted(){
  this.onResize;
},
beforeUnmount() {
  window.removeEventListener('resize', this.onResize)
},
    }
</script>
<style scoped>

#review {
    max-width: 100%;

    margin:1rem 0 2rem 0;
    padding: 0 5%;
}

.review .slide {
    padding: 2rem;
    box-shadow: var(--box-shadow);
    border: 3px solid var(--dark);
    border-radius: 0.5rem;
    position: relative;
    margin-bottom: 1.5rem;
}

.review .slide .fa-quote-right {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: #ccc;
}

.review .slide .user {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    padding-bottom: 1.5rem;
}

.review .slide .user img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    object-fit: cover;
}

.review .slide .user-info h3 {
    color: var(--black);
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
}

.review .slide .user-info a h3 {
    color: var(--dark);
}

.review .slide .user-info a h3:hover {
    border-bottom: 1px solid var(--dark);
    margin-bottom: 1rem;
}

.review .slide .user i {
    font-size: .8rem;
    color: var(--primary);
}

.review .slide p {
    font-size: 1.1rem;
    line-height: 1.15rem;
    color: var(--light-color);
}

.box{
box-shadow: var(--box-shadow);
height: 400px;}
</style>
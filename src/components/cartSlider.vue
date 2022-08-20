<template>
  <section class="accessories">
    <swiper
      :modules="modules"
      :slides-per-view="display"
      :space-between="50"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="slider"
    >
      <swiper-slide v-for="slide in data" :key="slide.name" class="slide">
        <img :src="slide.image" alt="" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  props: ["data", "display"],
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped lang="scss">
.accessories {
  position: relative;
  top: 4rem;
  margin-bottom: 4rem;
  height: fit-content;
  width: 100%;

  .slider {
    background: #fff;
    border: 1px solid var(--dark);
    margin: 0;
    padding: 2rem 5%;
    width: 100%;
    display: flex;

    .slide {
      width: 80px;
      height: 80px;
      img {
        height: 100%;
        width: 100%;
        position: relative;
      }
    }
  }
}
</style>



<template>
  <section>
    <swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :autoplay="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide slide1">
        <div class="bg-image bg1">
          <div class="text">
            <h2>Contact Us for help</h2>
            <p>
              Feel free to contact us at anytime. We will get back to you as
              soon as we can <i class="fas fa-phone"></i>
            </p>
          </div>
          <div class="opacity"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper- slide2"
        ><div class="bg-image bg2">
          <div class="text">
            <h2>Contact Us for help</h2>
            <p>
              Feel free to contact us at anytime. We will get back to you as
              soon as we can <i class="fas fa-phone"></i>
            </p>
          </div>
          <div class="opacity"></div></div
      ></swiper-slide>
      <swiper-slide class="swiper-slide slide3"
        ><div class="bg-image bg3">
          <div class="text">
            <h2>Contact Us for help</h2>
            <p>
              Feel free to contact us at anytime. We will get back to you as
              soon as we can <i class="fas fa-phone"></i>
            </p>
          </div>
          <div class="opacity"></div></div
      ></swiper-slide>
      ...
    </swiper>
  </section>
</template>
<script>
// import Swiper core and required modules
import { A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [A11y, Autoplay],
    };
  },
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  top: 4rem;
  min-height: 100vh;
         min-width: 100vw !important;

  .swiper {
    position: relative;
       min-width: 100vw !important;
    width: 100vw;
    height: calc(100vh - 4rem);
    .swiper-slide {
      .bg1 {
        background: url(../assets/blackWomanShopping.jpg) no-repeat center
          center;
      }
      .bg2 {
        background: url(../assets/femaleModel.jpg) no-repeat center center;
      }
      .bg3 {
        background: url(../assets/guyModel.jpg) no-repeat center center;
      }
      .bg-image {
       min-width: 100vw !important;
    width: 100vw !important;
        height: 100%;

        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        .opacity {
          position: absolute;
          background: rgba(6, 13, 24, 0.8);
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
        .text {
          display: flex;
          padding: 4rem 5%;

          position: relative;
          flex-direction: column;
          top: 30%;
          h2,
          p {
            z-index: 29;
            color: #fff;

            i {
              color: var(--primary);
              cursor: pointer;
              transition: ease 0.2s;

              &:hover {
                transform: translateY(-2px);
              }
            }
          }
          h2 {
            display: block;
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          p {
            max-width: 50%;
            font-size: 1.6rem;
          }
          @media (max-width: 500px) {
            p {
              max-width: 90%;
              font-size: 1.1rem;
            }
            h2 {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
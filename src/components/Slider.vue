<template>
  <section>
    <Swiper
      :autoPlay="true"
      :showIndicator="true"
      interval="3500"
      duration="500"
      class="Swiper"
    >
      <Slide class="slide slide1">
        <div class="opacity"></div>
        <div class="text">
          <h2>Unisex Wears</h2>
          <p>
            UnisexWares provides you with the best quality wares for both female
            and male at affordable prices.
          </p>
        </div>
      </Slide>
      <Slide class="slide slide2">
        <div class="opacity"></div>
        <div class="text">
          <h2>Stylish</h2>
          <p>
            Our customers gets the best styles from us. We have the right
            patterns and sizes of your choice.
          </p>
        </div>
      </Slide>
      <Slide class="slide slide3">
        <div class="opacity"></div>
        <div class="text">
          <h2>Affordable</h2>
          <p>
            Yayy! We don't sell just unique designs, we sell in affordable
            prices. High Quality, yet Affordable.
          </p>
        </div>
      </Slide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  components: {
    Swiper,
    Slide,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  .Swiper {
    position: relative;
    width: 100%;
    height: 100%;

    .slide {
      position: relative;
      top: 4rem;
      height: calc(100vh - 4rem);
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;

      &.slide1 {
        background: url("../assets/blackWomanShopping.jpg") no-repeat center
          center fixed;
        background-size: cover;

      }
      &.slide2 {
        background: url("../assets/femaleModel.jpg") no-repeat center center
          fixed;
        background-size: cover;
   
      }
      &.slide3 {
        background: url("../assets/guyModel.jpg") no-repeat center center fixed;
        background-size: cover;
      }
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
</style>

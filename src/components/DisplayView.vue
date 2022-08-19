<template>
  <section>
    <div class="gallery">
      <FlipCards
        v-for="(data, index) in datas"
        :key="data.id"
         :class="{ active: buttonEnable }"
        class="gallery-item"
        :sendtochild="data"
        :class-flex="index % 3"
        :buttonEnable="buttonEnable"
      />
    </div>
  </section>
</template>

<script>
import FlipCards from "./flipCards.vue";
export default {
  name: "DisplayView",
  props: ["datas", "buttonEnable"],
  components: {
    FlipCards,
  },
  methods: {},
};
</script>

<style lang="scss">
.gallery {
  padding: 2rem 5%;
  width: 100vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;


.gallery-item {
    margin: 12px auto;
    height: 300px;
    max-width: 90%;
    margin: 1rem;
    box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    

    img {
      display: block;
      width: 100%;
      height: 12rem;
    }
    &.active{
  img{
    position: relative;
    height: 100%;
  }
}
  }
}
</style>

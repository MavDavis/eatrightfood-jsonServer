<template>
<section>
      <div>
    <div v-if="!loading">
      <div v-for="data in datas" :key="data.id">
        <h3>{{ data.title }}</h3>
        <p>{{ data.description }}</p>
        <img :src="data.image" alt="" />
        <p>
          <span>{{ data.price }}</span>
        </p>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</section>
</template>

<script>
export default {
  name: "DisplayView",
  props: ["datas", "loading"],
  methods: {
    col() {
      console.log(this.datas, this.loading);
    },
  },
};
</script>

<style>
</style>
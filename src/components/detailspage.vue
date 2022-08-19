<template>
<section>
    <div v-if="!loading">
   
    </div>
    <div v-else><h1>Loading</h1></div>
</section>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      loading:true,
    };
  },
  created() {

    fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((res) => (res.json()))
      .then((onedata) => {
        this.loading =false;
       this.data =onedata
      })
  },
};
</script>

<style></style>

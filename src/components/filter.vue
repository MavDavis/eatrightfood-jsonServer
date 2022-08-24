<template>
  <section>
    <h3 class="border px-5">Filter By Category:</h3>
    <ul class="row rounded ">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="border col-lg-3 col-sm-6"
        @click="filterItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "FilterItems",
  data() {
    return {
      items: ["Electronics", "Jewelery", "Men's clothing", "Women's clothing"],
    };
  },
  methods: {
    filterItem(item) {
      this.$emit("fetchCategory", item.toLowerCase());
    },
  },
};
</script>

<style scoped lang="scss">
section {
  max-height: 500px;
  width: 100%;
  height: fit-content;
  h3 {
    color: var(--dark);
    font-size: 1.2rem;
    padding:1em 5%;
  }
 ul {
    list-style: none;

   width:100%;

    li {
      padding: 1rem 5px;
      text-align: center;
      cursor: pointer;
      transition: ease .5s;
&:hover{
  background:var(--dark);
  color:var(--light);
}
    }
  }
}
</style>
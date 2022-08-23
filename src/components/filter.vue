<template>
  <section>
    <h3>Filter By Category:</h3>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="filter-item"
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
    border: 1px solid var(--dark);
  }
  ul {
    display: flex;
    list-style: none;

   width:100%;

    li {
      border: 1px solid var(--dark);
      padding: 1rem 5%;
      border-top: 0;
      width:25%;
      height: fit-content;
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
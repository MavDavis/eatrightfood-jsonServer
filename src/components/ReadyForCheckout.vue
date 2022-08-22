<template>
  <div class="eachItem">
    <div class="desc fbas">
      <img :src="data.image" alt="" />
      <p>{{ data.title }}</p>
    </div>
    <p class="fbas fs">${{ data.price }}</p>
    <p class="fbas fs">{{ data.quantity }}</p>
    <div class="remove fbas fs" >
      <i class="fas fa-trash" @click="removeItem(data.id)"></i>
     
        <router-link :to="`/details/` + data.id">
         <i class="fas fa-pen"></i>
        </router-link
            >
    
    </div>
  </div>
</template>

<script>
export default {
  name: "EachItemInLc",
  props: ["data"],
  methods: {
    removeItem(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.eachItem {
  position: relative;
  max-width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark);
  width: 100%;
  .fbas {
    flex-basis: 24.5%;
    padding: 0 5%;

    justify-content: center;
    display: flex;
    align-items: center;
    margin: 1rem 0;

&.remove{
  display: flex;
  justify-content: space-around;
  a{
    color:var(--dark);
    transition:ease .3s;

    &:hover{
      color:var(--primary)
    }
  }
}

    &.desc {
      max-width: 25%;
      display: flex;
      flex-direction: column;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        margin-bottom: 1rem;
      }
    }

    &.fs{
                    font-size: 1.6rem;

        i{
            font-size: 1.6rem;
             transition:ease .3s;

    &:hover{
      color:var(--primary)
    }
  
        }

        @media(max-width: 500px){
                        font-size: 1rem;

        }
        @media(max-width:450px){
            font-size: 1rem;

 i{
        font-size: .8rem;
    }
}
    }
 
 @media(max-width:290px){
            font-size: .8rem;

  
}
 }
}
</style>

<template>
<div class="home">
    <h1>this is home page</h1>
</div>
</template>

<script>
export default {

  mounted(){
    fetch("https://fakestoreapi.com").then(res => res.json()).then(data => console.log(data))
    let userinfo = localStorage.getItem("user-info")
    if (userinfo){
       return
    }else{
       this.$router.push("/Login")
    }
}
};
</script>

<style>
.home{
  color:var(--light);
  
  }
</style>

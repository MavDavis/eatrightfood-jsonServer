<template>
  <h1>this is home page</h1>
</template>

<script>
export default {

  mounted(){
    let userinfo = localStorage.getItem("user-info")
    if (userinfo){
       return
    }else{
       this.$router.push("/SignUp")
    }
}
};
</script>

<style></style>

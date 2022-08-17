<template>
 <section>
     <h2>{{header}}</h2>
  <p>{{pTag}}</p>
 </section>
</template>

<script>
export default {
props:["header", "pTag"]
}
</script>

<style lang="scss" scoped>
section{
    padding:1rem 5%;
    margin: 2rem auto 0;

h2,p{
    text-align: center;
}
h2{
    color:var(--dark);
    padding: 9px;
    font-weight: bold;
    font-size: 2rem;

}
p{
    color: var(--primary);
    font-size: 1.6rem;
    font-weight: bold;

  
}
@media(max-width:500px){
    h2{
        font-size: 1.5rem;
    }
    p{
        font-size: 1.1rem;;
    }
}
}
</style>
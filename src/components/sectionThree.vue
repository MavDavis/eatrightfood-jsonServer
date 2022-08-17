<template>
  
<section>
       <div class="row">
            <div class="col-2">
                <div class="text">
            <p>We are interested in all of your wares. UnisexWares will ensure best unique outfits even in the gym!!</p>
            <p>We talked to our customers and they are super excited about these wares.</p>
            <p>We will be announcing date to release these outfits and there will be an amazing offer of 30% off.</p>
            expect us!!
            </div>
            <button> See Our Countdown</button>
            </div>
            <div class="col-2">
                <img src="../assets/image1.png" alt="">
            </div>
        </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width:100vw ;
    padding: 2rem 5%;
}
.col-2{
    flex-basis: 50%;
    min-width: 300px;
}
.col-2 img{
    max-width: 100%;

}

.col-2 button{
      display: flex;
  width: 150px;
  margin: 16px 0;
  border: none;
  background: var(--primary);
  color: var(--light);
padding: 9px 0;
border-radius: 10px 0;
cursor: pointer;
justify-content: center;
transition: ease-in-out .7s all;

}
.col-2 button:hover{
  border-radius:0 10px ;

}
.col-2 .text{
    width:70%;
    margin-top: -20%;
}
@media (max-width:500px) {
    .col-2 .text{
        margin-top:0;
        width: 90%;
    }
}
</style>
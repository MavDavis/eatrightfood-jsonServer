<template>
  <div class="scene scene--card">
    <div
      class="card"
      @mouseenter="
        cardOne == 'start' ? (cardOne = 'flipped') : (cardOne = 'start')
      "
      v-bind:class="{ flipme: cardOne == 'flipped' }"
    >
      <div class="card__face card__face--front">
        <img :src="sendtochild.image" alt="" />
      </div>
      <div class="card__face card__face--back">
        <img :src="sendtochild.image" alt="">
        <p>${{sendtochild.price}}</p>
        <span>{{sendtochild.ratings}}</span>
        <button>Details</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sendtochild"],
  data() {
    return {
      cardOne: "start",
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: sans-serif;
}

.scene {
  
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  margin: 10px;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
}

.card__face--front {
  background: white;

 
 }

.card__face--back {
  background: white;
  transform: rotateY(180deg);

   img{
    height:200px;
}
p{
  display: block;
  padding: 9px 0;
  text-align: center;
}
button{
  display: flex;
  width: 80%;
  margin: 8px auto;
  border: none;
  background: var(--dark);
  color: var(--light);
padding: 9px 0;
border-radius: 10px;
cursor: pointer;
justify-content: center;
transition: ease-in-out .7s all;

&:hover{
 background-image: linear-gradient(to right, var(--primary) , var(--dark));
}
}
}
.flipme {
  transform: rotateY(180deg);
}
</style>
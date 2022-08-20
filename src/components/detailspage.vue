<template>
  <section>
    <div v-if="!loading">
      <div class="flex">
        <div class="right col-2">
          <div class="big-img">
            <img :src="data.image" alt="" />
          </div>
          <div class="small-imgs">
            <div class="small-img"><img :src="data.image" alt="" /></div>
            <div class="small-img"><img :src="data.image" alt="" /></div>
            <div class="small-img"><img :src="data.image" alt="" /></div>
            <div class="small-img"><img :src="data.image" alt="" /></div>
          </div>
        </div>
        <div class="left col-2">
          <h3>Mavs Store</h3>
          <h2>{{ data.title }}</h2>
          <p>{{ data.description }}</p>
          <div class="price">
            <p>${{ dataPrice }}</p>
          </div>
          <div class="increment">
            <span @click="numRed">-</span>
            <p>{{ num }}</p>
            <span @click="numAdd">+</span>
          </div>
          <button>Add to cart <i class="fas fa-shopping-cart"></i></button>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading</h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      dataPrice: null,
      price: null,
      data: null,
      loading: true,
      
    };
  },
   mounted() {
    let userinfo = localStorage.getItem("user-info");

    if (userinfo) {
      return;
    } else {
      this.$router.push("/Login");
    }
  },
  methods: {
    numRed() {
      if (this.num < 2) {
        return;
      } else {
        this.num--;
        this.dataPrice =( this.dataPrice - this.price);
      }
    },
    numAdd() {
      this.num++;
      this.dataPrice = this.dataPrice + this.price;
    },
  },
  created() {
    fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((onedata) => {
        this.loading = false;
        this.data = onedata;
        this.dataPrice = onedata.price * this.num;
        this.price = onedata.price;
      });
  },
};
</script>

<style lang="scss" scoped>
.flex {
    img{
        border-radius: 9px;
    }
  flex-wrap: wrap;

  justify-content: space-around;
  display: flex;
  margin: 3rem 0;
  padding: 0 5%;

  .col-2 {
    flex-basis: 50%;


    &.right {
      flex-basis: 40%;

      .big-img {
        width: 100%;
        height: 65vh;
        padding: 50px 0 5px;

        img {
          position: relative;
          height: 100%;
          width: 100%;
        }
      }

      .small-imgs {
        height: 22vh;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .small-img {
          position: relative;
          flex-basis: 24.5%;
          height: 100%;
          width: 100%;
          box-shadow: var(--box-shadow);

          img {
            position: relative;

            height: 100%;
            width: 100%;
          }
        }
      }
    }

    &.left {
      flex-basis: 50%;
        display: flex;
        flex-direction: column;

        justify-content: center;
      h3 {
        color:var(--primary);

        @media (max-width:600px) {
            margin-top: 1.8rem;
        }
      }

      h2 {
        color:var(--dark);
        margin: 1rem 0;
      }

      p {
        color:var(--dark);
        line-height: 1.6rem;;
      }

      .price {
margin: 1rem 0;
        p {
            color:var(--dark);
        }
      }

      .increment {
                display: flex;
        background: var(--light);
        color:var(--dark);
        justify-content: space-between;
        border: 1px solid var(--dark);
        padding:3px .3rem;

        span {
            cursor: pointer;
            color:var(--dark);
            font-size: 1.8rem;
            font-weight: bolder;
        }

        p {
            color:var(--dark);
        }
      }

      button {
      display: flex;
      width: 100%;
      margin: 10px auto;
      border: none;
      background: var(--dark);
      color: var(--light);
      padding: 9px 0;
      border-radius: 10px;
      cursor: pointer;
      justify-content: center;
      transition: ease-in-out 0.7s all;

      &:hover {
        background: var(--primary);
      }
    }
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    .col-2
     {
      flex-basis: 100%;
    }
  }}

</style>

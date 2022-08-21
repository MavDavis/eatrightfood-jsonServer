<template>
  <section>
    <div v-if="!loading">
      <div class="flex">
        <div class="right col-2">
          <div class="big-img">
            <img :src="datas.image" alt="" />
          </div>
          <div class="small-imgs">
            <div class="small-img"><img :src="datas.image" alt="" /></div>
            <div class="small-img"><img :src="datas.image" alt="" /></div>
            <div class="small-img"><img :src="datas.image" alt="" /></div>
            <div class="small-img"><img :src="datas.image" alt="" /></div>
          </div>
        </div>
        <div class="left col-2">
          <h3>Mavs Store</h3>
          <h2>{{ datas.title }}</h2>
          <p>{{ datas.description }}</p>
          <div class="price">
            <p>${{ dataPrice }}</p>
          </div>
          <div class="increment">
            <span @click="numRed">-</span>
            <p>{{ num }}</p>
            <span @click="numAdd">+</span>
          </div>
          <button v-if="!datas.inCart" @click="addToCart()">
            Add to cart <i class="fas fa-shopping-cart"></i>
          </button>
          <button v-else @click="updateCart">
            Update Cart <i class="fas fa-shopping-cart"></i>
          </button>
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
  created() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== undefined) {
      let eachCartItem = cart.find((item) => item.id == this.$route.params.id);
      if (eachCartItem !== undefined) {
        this.addedtocart = true;
console.log("from lc");
        this.loading = false;
        this.datas = eachCartItem;
        this.dataPrice = eachCartItem.price * this.num;
        this.price = eachCartItem.price;
      } else {

      fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((onedata) => {
          this.loading = false;
          this.datas = { ...onedata, inCart: false };
          this.addedtocart = false;
          this.dataPrice = onedata.price * this.num;
          this.price = onedata.price;
                    console.log("from api");

        });
    }
    } 
    else {

      fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((onedata) => {
          this.loading = false;
          console.log(onedata);
          this.datas = { ...onedata, inCart: false };
          this.addedtocart = false;
          this.dataPrice = onedata.price * this.num;
          this.price = onedata.price;
                    console.log("from api");

        });
    }
  },
  data() {
    return {
      InCart: false,
      num: 1,
      dataPrice: null,
      price: null,
      datas: null,
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
    addToCart() {
      this.InCart= true;
      let item = {
        title: this.datas.title,
        id: this.datas.id,
        image: this.datas.image,
        description: this.datas.description,
        price: this.dataPrice,
        inCart: true,
        quantity: this.num,
      };
 console.log(item);
  let storedCart = JSON.parse(localStorage.getItem("cart"));
  let Array = JSON.parse(localStorage.getItem("Array"));
for (let product of Array){
  if(product.id == this.datas.id){
    product.inCart = true
  }
}
localStorage.setItem("Array", JSON.stringify(Array))
if (storedCart) {
     let res = storedCart.find(item => item.id == this.datas.id)
    console.log(res);
    if(res === undefined){
    
      storedCart =[...storedCart, item] 
              localStorage.setItem("cart", JSON.stringify(storedCart));

      console.log(storedCart);
    }
    }
     else {
        let array =[];
        array.push(item);
        localStorage.setItem("cart", JSON.stringify(array));
      }
    },
    updateCart() {
        let storedCart = JSON.parse(localStorage.getItem("cart"));
for (let product of storedCart){
  if(product.id == this.datas.id){
    product.inCart = true;
    product.quantity = this.num;
    product.price = this.dataPrice;
  }}
  localStorage.setItem("cart", JSON.stringify(storedCart))
    },
    numRed() {
      if (this.num < 2) {
        return;
      } else {
        this.num--;
        this.dataPrice = this.dataPrice - this.price;
      }
    },
    numAdd() {
      this.num++;
      this.dataPrice = this.dataPrice + this.price;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  img {
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
            object-fit: contain;
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
        color: var(--primary);

        @media (max-width: 600px) {
          margin-top: 1.8rem;
        }
      }

      h2 {
        color: var(--dark);
        margin: 1rem 0;
      }

      p {
        color: var(--dark);
        line-height: 1.6rem;
      }

      .price {
        margin: 1rem 0;
        p {
          color: var(--dark);
        }
      }

      .increment {
        display: flex;
        background: var(--light);
        color: var(--dark);
        justify-content: space-between;
        border: 1px solid var(--dark);
        padding: 3px 0.3rem;

        span {
          cursor: pointer;
          color: var(--dark);
          font-size: 1.8rem;
          font-weight: bolder;
        }

        p {
          color: var(--dark);
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

    .col-2 {
      flex-basis: 100%;
    }
  }
}
</style>

import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      count: localStorage.getItem("log") === "true",
      cartQuant:  JSON.parse(localStorage.getItem("cart"))
      ?  JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => acc + item.quantity, 0)
      : 0,
      username: localStorage.getItem("name") ? localStorage.getItem("name") : "User"
    };
  },
  mutations: {
    changeLoggedInState(state) {
      state.count = !state.count;
      localStorage.setItem("log", state.count);
    },
    increaseCartQuant(state){
    let item = JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => acc + item.quantity, 0)
state.cartQuant = item;
    },
    decreaseCartQuant(state){
        let item = JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => acc + item.quantity, 0)
state.cartQuant = item;

    },
  },
});



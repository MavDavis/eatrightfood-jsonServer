import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      count: localStorage.getItem("log") === "true",
      cartQuant: localStorage.getItem("cartQuant")
        ? localStorage.getItem("cartQuant")
        : 0,
    };
  },
  mutations: {
    changeLoggedInState(state) {
      state.count = !state.count;
      localStorage.setItem("log", state.count);
    },
    increaseCartQuant(state){
        state.cartQuant++
        localStorage.setItem("cartQuant", state.cartQuant)
    },
    decreaseCartQuant(state){
        if(state.cartQuant > 1){
            state.cartQuant--
        }else{return}
        localStorage.setItem("cartQuant", state.cartQuant)

    },
  },
});

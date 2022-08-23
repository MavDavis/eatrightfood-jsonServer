import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            count: localStorage.getItem("log") === "true",
            cartQuant: 0,

        };
    },
    mutations: {
        changeLoggedInState(state) {
            state.count =!state.count;
            localStorage.setItem("log", state.count)
        },
    },
});

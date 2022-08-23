import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            count: true,
        };
    },
    mutations: {
        changeLoggedInState(state) {
            state.count =!state.count;
            localStorage.setItem("log", state.count)
        },
    },
});

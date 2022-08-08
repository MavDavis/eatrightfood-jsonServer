import { createApp } from "vue";
import router from "./index";
import App from "./App.vue";

import { createStore } from "vuex";
const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
});



createApp(App).use(router).use(store).mount("#app");
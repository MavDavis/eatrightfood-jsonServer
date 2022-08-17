import { createApp } from "vue";
import router from "./index";
import App from "./App.vue";
import Carousel3d from 'vue-carousel-3d';


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



createApp(App).use(router).use(store).use(Carousel3d).mount("#app");
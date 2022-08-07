import { createApp } from "vue";
import router from "./index";
import App from "./App.vue";
import firebase from "firebase/compat/app"
import { firebaseConfig } from "./firebase-config.js";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const Time_stamp = firebaseApp
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
import { createApp } from "vue";
import router from "./index";
import App from "./App.vue";
import Carousel3d from 'vue-carousel-3d';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import createStore from "./store"


createApp(App).use(router).use(createStore).use(Carousel3d).mount("#app");
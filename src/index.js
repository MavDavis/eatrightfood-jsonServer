import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import SignUp from "./pages/SignUp.vue";
import Login from "./pages/Login.vue";
import Cart from "./pages/Cart.vue";
import Fashion from "./pages/Fashion.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            component: Home,
            name: "Home",
        },
        {
            path: "/About",
            component: About,
            name: "About",
        },
        {
            path: "/login",
            component: Login,
            name: "Login",
        },
        {
            path: "/SignUp",
            component: SignUp,
            name: "SignUp",
        },
        {
            path: "/cart",
            component: Cart,
            name: "Cart",
        },
        {
            path: "/fashion",
            component: Fashion,
            name: "fashion",
        },
    ],
});
export default router;
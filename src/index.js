import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import SignUp from "./pages/SignUp.vue";
import Login from "./pages/Login.vue";
import Cart from "./pages/Cart.vue";
import Shop from "./pages/Shop.vue";
import DetailsPage from "./components/detailspage.vue"
import Contact from "./pages/Contact.vue"
import Payment from './pages/payment.vue'

import User from './pages/User.vue'
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
            path:"/payment",
            component: Payment,
            name: "Payment",
        },
        {
            path:"/User",
            component: User,
            name: "User",
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
            path: "/shop",
            component: Shop,
            name: "shop",
        },
        {
            path: "/Contact",
            component: Contact,
            name: "Contact",
        },
        {
            path: "/details/:id",
            component: DetailsPage,
            name: "DetailsPage",
        },
    ],
});
export default router;
import {createRouter, createWebHistory} from "vue-router"
import AccueilVue from "../pages/Accueil.vue"
import HelpVue from "../pages/Help.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "accueil",
            component: AccueilVue
        },
        {
            path: "/help",
            name: "help",
            component: HelpVue
        }
    ]
})

export default router
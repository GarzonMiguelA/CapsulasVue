import {createRouter, createWebHistory} from "vue-router";
import LaOtraView from "@/views/LaOtraView.vue"
import HomeView from "@/views/HomeView.vue"

const routes = [
    {
        path:'/',
        name:'Home',
        component: HomeView
    },{
        path:'/about',
        name:'about',
        component: LaOtraView
    },{
        path:'/desti/:id',
        name:'desti',
        component: ()=>import('../components/Desti.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router;




import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld";
Vue.use(VueRouter);
const router = [
    {path:'/home',name:'HelloWorld',component:HelloWorld}
]
export default router;
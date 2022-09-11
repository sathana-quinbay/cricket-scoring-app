import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld";
import WagonWheelComponent from '../components/WagonWheelComponent'
Vue.use(VueRouter);
const routes = [
    {path:'/',name:'HelloWorld',component:HelloWorld},
    {path:'/wagon',name:'WagonWheelComponent',component:WagonWheelComponent}
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;
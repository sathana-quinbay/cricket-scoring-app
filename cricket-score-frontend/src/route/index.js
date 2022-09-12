import Vue from "vue";
import VueRouter from "vue-router";
// import HelloWorld from "../components/HelloWorld";
import MainComponent from "../components/MainComponent"
import WagonWheelComponent from '../components/WagonWheelComponent'
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
Vue.use(VueRouter);
const routes = [
    {path:'/',name:'login',component:LoginPage},
    {path:'/register',name:'register',component:RegisterPage},
    {path:'/main',name:'Maincomponent',component:MainComponent},
    {path:'/wagon',name:'WagonWheelComponent',component:WagonWheelComponent}

]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;
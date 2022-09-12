import Vue from "vue";
import VueRouter from "vue-router";
import MyMatches from "../pages/MyMatches";
import MainComponent from "../components/MainComponent"
import CreateMatch from "../pages/CreateMatch"
import WagonWheelComponent from '../components/WagonWheelComponent'
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
Vue.use(VueRouter);
const routes = [

    {path:'/',name:'Maincomponent',component:MainComponent},
    {path:'/create',name:'CreateMatch',component:CreateMatch},
    {path:'/match',name:'MyMatches',component:MyMatches},
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
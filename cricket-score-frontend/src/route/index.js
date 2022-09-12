import Vue from "vue";
import VueRouter from "vue-router";
// import HelloWorld from "../components/HelloWorld";
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
Vue.use(VueRouter);
const routes = [
    // {path:'/',name:'HelloWorld',component:HelloWorld},
    {path:'/',name:'login',component:LoginPage},
    {path:'/register',name:'register',component:RegisterPage},
  
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;
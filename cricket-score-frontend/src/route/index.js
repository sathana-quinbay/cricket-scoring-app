import Vue from "vue";
import VueRouter from "vue-router";
// import HelloWorld from "../components/HelloWorld";
import MainComponent from "../components/MainComponent"
import WagonWheelComponent from '../components/WagonWheelComponent'
import AddTeamComponent from '../components/AddTeamComponent'
Vue.use(VueRouter);
const routes = [
    {path:'/',name:'Maincomponent',component:MainComponent},
    {path:'/wagon',name:'WagonWheelComponent',component:WagonWheelComponent},
    {path:'/createMatch/AddTeam',name:'AddTeamComponent',component:AddTeamComponent}
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;
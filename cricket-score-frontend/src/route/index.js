import Vue from "vue";
import VueRouter from "vue-router";
import MyMatches from "../pages/MyMatches";
import MainComponent from "../components/MainComponent"
import CreateMatch from "../pages/CreateMatch"
import WagonWheelComponent from '../components/WagonWheelComponent'

import AddTeamComponent from '../components/AddTeamComponent'
import ScorecardComponent from '../components/ScorecardComponent'
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
import AddPlayers from "@/components/AddPlayers"
import LiveScoreNavTab from '@/components/LiveScoreNavTabs'
import LoaderComponent from '@/components/LoaderComponent'
import InfoComponent from '@/components/InfoComponent'
Vue.use(VueRouter);
const routes = [

    {path:'/',name:'Maincomponent',component:MainComponent},

    {path:'/wagon',name:'WagonWheelComponent',component:WagonWheelComponent},
    {path:'/createMatch/AddTeam',name:'AddTeamComponent',component:AddTeamComponent},

    {path:'/create',name:'CreateMatch',component:CreateMatch},
    {path:'/match',name:'MyMatches',component:MyMatches},
    {path:'/login',name:'login',component:LoginPage},
    {path:'/register',name:'register',component:RegisterPage},
    {path:'/main',name:'Maincomponent',component:MainComponent},
   
    {path:'/players',name:'AddPlayers',component:AddPlayers},

    {path:'/livescore',name:'LiveScoreNavTab',component:LiveScoreNavTab},
    {path:'/scorecard',name:'scorecard',component:ScorecardComponent},
    {
      path:'/loader',name:'LoaderComponent',component:LoaderComponent},
      {
        path:'/info',name:'InfoComponent',component:InfoComponent}

]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;
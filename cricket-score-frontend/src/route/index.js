import Vue from "vue";
import VueRouter from "vue-router";
import MyMatches from "../pages/MyMatches";
import MainComponent from "../components/MainComponent"
import CreateMatch from "../pages/CreateMatch"
import WagonWheelComponent from '../components/WagonWheelComponent'
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
import AddPlayers from "@/components/AddPlayers"
import MatchCentre from "@/pages/MatchCentre"
import SummaryComponent from "@/components/SummaryComponent"
import ScorecardComponent from "@/components/ScorecardComponent"
import StatsComponent from "@/components/StatsComponent"
import BallsComponent from "@/components/BallsComponent"
import InfoComponent from "@/components/InfoComponent"
Vue.use(VueRouter);
const routes = [

    {path:'/',name:'Maincomponent',component:MainComponent},
    {path:'/create',name:'CreateMatch',component:CreateMatch},
    {path:'/match',name:'MyMatches',component:MyMatches},
    {path:'/login',name:'login',component:LoginPage},
    {path:'/register',name:'register',component:RegisterPage},
    {path:'/main',name:'Maincomponent',component:MainComponent},
    {path:'/wagon',name:'WagonWheelComponent',component:WagonWheelComponent},
    {path:'/players',name:'AddPlayers',component:AddPlayers},
    {path:'/matchcentre',name:'MatchCentre',component:MatchCentre,
    children:[
      {path:'summary',name:'summary',component:SummaryComponent},
      {path:'scorecard',name:'register',component:ScorecardComponent},
      {path:'stats',name:'stats',component:StatsComponent},
      {path:'balls',name:'balls',component:BallsComponent},
      {path:'info',name:'info',component:InfoComponent},
    ]
  
  
  }


]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
export default router;
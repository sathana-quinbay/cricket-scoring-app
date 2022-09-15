import Vue from "vue";
import VueRouter from "vue-router";
import MyMatches from "../pages/MyMatches";
import MainComponent from "../components/MainComponent"
import CreateMatch from "../pages/CreateMatch"
import WagonWheelComponent from '../components/WagonWheelComponent'
import AddTeamComponent from '../components/AddTeamComponent'
import LoginPage from "@/components/LoginPage"
import RegisterPage from "@/components/RegisterPage"
import AddPlayers from "@/components/AddPlayers"
import LoaderComponent from '@/components/LoaderComponent'
import DisplayTeams from '@/components/DisplayTeams'
import MatchCentre from "@/pages/MatchCentre"
import SummaryComponent from "@/components/SummaryComponent"
import StatsComponent from "@/components/StatsComponent"
import BallsComponent from "@/components/BallsComponent"
import InfoComponent from "@/components/InfoComponent"
import NavBarComponent from '@/components/NavBarComponent.vue'
import DisplayPlayers from '@/components/DisplayPlayers'
import ScorecardComponent from '@/components/ScorecardComponent' 
Vue.use(VueRouter);
const routes = [
  {path:'/login',name:'login',component:LoginPage},
  {path:'/register',name:'register',component:RegisterPage},
  {path:'/summary',name:'summary',component:SummaryComponent},
  {path:'/',name:'NavBarComponent',component:NavBarComponent,
  children:[
    {path:'wagon',name:'WagonWheelComponent',component:WagonWheelComponent},
    {path:'createMatch/AddTeam',name:'AddTeamComponent',component:AddTeamComponent},
    {path:'create',name:'CreateMatch',component:CreateMatch},
    {path:'edit/:id',name:'EditMatch',component:CreateMatch},
    {path:'match',name:'MyMatches',component:MyMatches},
    {path:'',name:'Maincomponent',component:MainComponent},
    {path:'loader',name:'LoaderComponent',component:LoaderComponent},
    {path:'players',name:'AddPlayers',component:AddPlayers},
    {path:'displayteams',name:'DisplayTeams',component:DisplayTeams},
    {path:'displayplayers',name:'DisplayTeams',component:DisplayPlayers},
    {path:'matchcentre',name:'MatchCentre',component:MatchCentre,
     children:[
      {path:'summary',name:'summary',component:SummaryComponent},
      {path:'scorecard',name:'scorecard',component:ScorecardComponent},
      {path:'stats',name:'stats',component:StatsComponent},
      {path:'balls',name:'balls',component:BallsComponent},
      {path:'info',name:'info',component:InfoComponent},
    ]
  }
  ]},
   

]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

  router.afterEach((to, from) => {
       const role = localStorage.getItem("userid")
       console.log(from)
       if(to.path!="/login" && to.path!="/register"){
         if(role===undefined || role===null)
         {
          router.replace('/login')
         }
         
       }
       else{
        if(role!=undefined || role!=null)
        {
          router.replace('/create')
        }
          
       }
  })
export default router;
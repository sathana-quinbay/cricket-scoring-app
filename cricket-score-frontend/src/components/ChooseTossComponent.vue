<template>
    <div class="maincard">
         <b-modal
      size="md"
     centered
      v-model="show"
      title="Select Team"
       hide-footer
         header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="bodyTextVariant"
      footer-bg-variant="footerBgVariant"
      footer-text-variant="footerTextVariant"
      no-close-on-backdrop>
      <template #modal-header>
           <h5>Who won the toss ?</h5>
           <button @click="closeModal" class="closeButton">
         <b-icon-x-lg style="color:white"/>
        </button>
        </template>
      <div>
        <div class="teamGroup">
          <div @click="selectedTeam='A'" :class="selectedTeam=='A'?'selectedTeam':'teams'">
            <img src="https://t3.ftcdn.net/jpg/04/13/93/26/360_F_413932626_Q2U3udio5bdBxW5AAlJmfIRsSn1rFxnW.jpg" alt="">
            <h6>{{teamA.teamname}}</h6>
          </div>
            <div @click="selectedTeam='B'" :class="selectedTeam=='B'?'selectedTeam':'teams'">
            <img src="https://t3.ftcdn.net/jpg/04/13/93/26/360_F_413932626_Q2U3udio5bdBxW5AAlJmfIRsSn1rFxnW.jpg" alt="">
            <h6>{{teamB.teamname}}</h6>
          </div>
        </div>
        <p class="decided"><b>Decided to ?</b></p>
       <div class="groupButton">
         <button  @click="option='Bat'" :class="option=='Bat'? 'selectedbtn':'choiceButton'" >Bat</button>
        <button  @click="option='Bowl'" :class="option=='Bowl'? 'selectedbtn':'choiceButton'" >Bowl</button>
      </div>
      <div class="start">
        <button @click="scoring" class="scoring">Start Scoring</button>
      </div>
      </div>
    </b-modal>
    </div>
</template>

<script>
import {tossWonByTeam} from "../Service/match.service"
export default{
    data()
    {
        return {
         show:true,
         selectedTeam:null,
         option:null,
        }
    },
    props:[
      "matchId",
      "teamA",
      "teamB"
    ],
    mounted()
    {
     console.log(this.teamA)
    },
    methods:{
        closeModal()
        {
          this.show=false;
          this.$emit('closeTossModal')
        },
       scoring(){
        var selectedTeamId =null
        if(this.selectedTeam=='A')
        selectedTeamId=this.teamA.teamid
        else
        selectedTeamId=this.teamB.teamid 
        var payload={
          matchId:this.matchId,
          tossWonBy:selectedTeamId,
          chooseTo:this.option,
          matchStatus:"started"
        }
        console.log(payload)
        tossWonByTeam({
          success:(response)=>{
            console.log(response)
            localStorage.setItem("matchId",this.matchId)
            this.$router.push("matchcentre/summary")
          },
          error:(err)=>{
            console.log(err)
          },
          payload
        })
        
       }
    }
}
</script>

<style scoped>
  .maincard{
      text-align: center;
  }
  .won
  {
      font-weight: 600;
  }
  .decided
  {
      margin-top: 2%;
  }
  .start
  {
      display: flex;
      margin-top:4%;
      justify-content: center;
  }
  .scoring
  {
      background: #5cb85c;
      border: none;
      padding:2% 3% ;
      border-radius: 10px;
      color: white;
  }
  .groupButton
  {
      display: flex;
      justify-content: space-evenly;
  }
  .choiceButton
  {
      min-width: 70px;
      height: 30px;
      border: 1px solid grey;
      border-radius: 10px;
      background: none;
  }
  .selectedbtn
  {
       min-width: 70px;
      height: 30px;
      border-radius: 10px;
     border: none;
     background: #d9534f;
     color: white;
  }
  .teams img{
      max-height: 90px;
       border-radius: 20px;
  }
  .teams
  {
      text-align: center;
      border:1px solid grey;
      border-radius: 20px;
      height: 130px;
     
  }
  .selectedTeam img{
       max-height: 90px;
       border-radius: 20px;
  }
  .selectedTeam
  {
      text-align: center;
      border:2px solid #d9534f;
      color: #d9534f;
      border-radius: 20px;
      height: 130px;
  
  }
  .closeButton
  {
      background: none;
      border: none;
      position: absolute;
      top: 10px;
      right: 10px;
  }
  .teamGroup{
      display: flex;
      justify-content: space-evenly;
  }
  </style>

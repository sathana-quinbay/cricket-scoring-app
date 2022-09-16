<template>
  <div>
    <div>

      <h4>India</h4>
      <p>1st Innings</p>
      <h1 style="color: #319da0">{{total}}-{{wickets}}</h1>


      <hr class="table--hr" />
    </div>
    <div>
      <b-row style="font-weight: bold">
        <b-col>Extras - {{extras}}</b-col>
        <b-col>Overs - 2/20</b-col>
        <b-col>CRR - {{runrate()}}</b-col>
      </b-row>
      <b-row style="margin-bottom: 2%; font-weight: bold">
        <b-col>Partnership - 50(35)</b-col>
      </b-row>
      <b-row style="margin-bottom: 2%; font-weight: bold">
        <b-col><b-icon icon="pencil-fill" />Batsman</b-col>
        <b-col>R</b-col>
        <b-col>B</b-col>
        <b-col>4s</b-col>
        <b-col>6s</b-col>
        <b-col>SR</b-col>
      </b-row>
      <div v-if="!ballByBall.length">
        <b-row v-for="i in 2" :key="i" style="margin-bottom:1%"><b-col style="font-style:oblique;">Select Batsman</b-col><b-col>0</b-col>
        <b-col>0</b-col>
        <b-col>0</b-col>
        <b-col>0</b-col>
        <b-col>0.00</b-col></b-row>
      </div>
      <div v-if="ballByBall.length">
      <b-row v-for="(i,index) in 2" :key="index">
       <b-col @click="strikeRotate(index)" :class="(strike==index)?'strike':''">Kishore<sup v-show="(strike==index)">*</sup></b-col>
        <b-col>25</b-col>
        <b-col>12</b-col>
        <b-col>2</b-col>
        <b-col>1</b-col>
        <b-col>208.33</b-col>
      </b-row>
      </div>
      <b-row style="margin-bottom: 2%; font-weight: bold">
        <b-col><b-icon icon="pencil-fill" />Bowler</b-col>
        <b-col>O</b-col>
        <b-col>M</b-col>
        <b-col>R</b-col>
        <b-col>W</b-col>
        <b-col>ECO</b-col>
      </b-row>
      <b-row style="margin-bottom: 2%">
        <b-col>Ashwin</b-col>
        <b-col>2.4</b-col>
        <b-col>1</b-col>
        <b-col>14</b-col>
        <b-col>1</b-col>
        <b-col>4.6</b-col>
      </b-row>
      <hr class="table--hr" />
<div>
      <!-- <b-avatar text="BV"></b-avatar> -->
      <b-avatar v-for="(data,index) in scores" :key="index" variant="secondary" :text="data+''"></b-avatar>
    </div>
      <b-container class="bgColor"  fluid v-show="additionalDialog==3">
         <button class="wide-header" @click="additionalDialog=true">X</button>
 <img
      src="../assets/wheel.jpg"
      width="300"
      height="300"
      usemap="#image-map"
      alt="wagon"
      id="image"
      srcset=""
    />
         </b-container>
          <div v-show="true"  class="ball-by-ball">
           <b-avatar class="ball-align" v-for="i in ballByBall" :key="i" variant="primary" :text="i"></b-avatar>
       </div>
      <div v-show="additionalDialog!=3"  class="scoringCard">
         <b-container style="background:#ff9900;margin-top:1.5%;"  fluid v-show="additionalDialog==0">
         <b-button style="border:1px solid white;back" @click="batsmanModal=true">Select batsman</b-button>
         </b-container>
        <table class="table-style" v-show="additionalDialog==1">
          <tr>
            <td><button class="scorebtn" @click="addScore('1')">1</button></td>
            <td><button class="scorebtn" @click="addScore('2')">2</button></td>
            <td><button class="scorebtn" @click="addScore('3')">3</button></td>
            <td><button class="scorebtn" @click="addScore('4')">4</button></td>
            <td><button class="scorebtn" @click="addScore('5')">5</button></td>
          </tr>
          <tr>
            <td><button class="scorebtn" @click="addScoreList(lbList,'Leg Byes')">LB</button></td>
            <td><button class="scorebtn" @click="addScoreList(byeList,'Bye')">Bye</button></td>
            <td><button class="scorebtn" @click="addScoreList(wideList,'Wide')">Wide</button></td>
            <td><button class="scorebtn" @click="addScoreList(nbList,'No Ball')">NB</button></td>
            <td><button class="scorebtn" @click="addScore('0')">Dot</button></td>
          </tr>
          <tr>
            <td><button class="scorebtn" @click="addScoreList( moreRunsList,'More Runs')">4 5 6 7</button></td>
            <td><button class="scorebtn" @click="undo()">Undo</button></td>
            <td><button class="scorebtn" @click="addScoreList(wicketList,'Wicket')">Out</button></td>
            <td>Undo</td>
            <td>Out</td>
          </tr>
        </table>
         
        <b-container fluid v-show="additionalDialog==2" class="wide-style ">
            <b-row>
                <h5>{{this.category}}</h5>
                <button class="wide-header" @click="additionalDialog=true">X</button>
            </b-row>
            <b-row>
             <button v-for="(key,index) in buttonList" :key="index" class="widebtn" @click="addValue(key)">{{key.name}}</button>
          </b-row>
        </b-container>
      </div>
    </div>
    <div>
  <b-modal
   id="modal-center" 
   v-model="batsmanModal"
   centered title="Select Batsman"
  header-bg-variant="danger"
      header-text-variant="light"
      body-bg-variant="bodyBgVariant"
      body-text-variant="bodyTextVariant"
      hide-footer
  >
  <template #modal-header>
           <h5>Select Batsman </h5>
           <button @click="batsmanModal=false" class="closeButton">
         <b-icon-x-lg style="color:white"/>
        </button>
        </template>
  <b-container>
    <b-row>
      <b><b-col style="margin-right:50px;">S.No</b-col></b>
      <b><b-col style="margin-right:65px;">Player Name</b-col></b>
       <b><b-col>Select</b-col></b>
      </b-row>
      <b-row @click="chooseBatsman(val)" v-for="(val,index) in teamA.playerList" :key=index class="spacing-modal">
      <b-col>{{index+1}}</b-col>
      <b-col>{{val.playername}}</b-col>
      <b-col><b-button size="sm" style="padding:2%;">select</b-button></b-col>
      </b-row>

  </b-container>
  </b-modal>
</div>
  </div>
</template>

<script>
import {getParticularMatch} from "../Service/match.service"
import axios from 'axios';
export default {
  data() {
    return {
        ballByBall:[],
        buttonList:[],
        currentBatsman:null,
        c:0,
        wickets:0,
        total:0,
        batsmanModal:false,
        totalUndo:0,
        Lastele:true,
        strike:1,
        batsmanList:null,
        extras:0,
        no_of_overs:0,
        wicketList:[
           {
                name:"Bowled",
                value:"Bowled"
           },
           {
                name:"Caught",
                value:"Caught"
           },
           {
                name:"Stumped",
                value:"Stumped"
           },
           {
                name:"LBW",
                value:"LBW"
           },
           {
                name:"Run Out",
                value:"Run Out"
           },
           {
                name:"Hit Wicket",
                value:"Hit Wicket"
           },
           {
                name:"Mankad",
                value:"Mankad"
           },
        ],
        moreRunsList:[
            {
                name:"4",
                value:"4"
            },
            {
                name:"5",
                value:"5"
            },
            {
                name:"6",
                value:"6"
            },
            {
                name:"7",
                value:"7"
            }
        ],
        byeList:[
          {
            name:"1 b",
            value:"1"
           },
           {
            name:"2 b",
            value:"2"
           },
           {
            name:"3 b",
            value:"3"
           },
           {
            name:"4 b",
            value:"4"
           },
           {
            name:"5 b",
            value:"5"
           },
        ],
        lbList:[
           {
            name:"1 lb",
            value:"1"
           },
           {
            name:"2 lb",
            value:"2"
           },
           {
            name:"3 lb",
            value:"3"
           },
           {
            name:"4 lb",
            value:"4"
           },
           {
            name:"5 lb",
            value:"5"
           },
        ],
        nbList:[
          {
            name:"nb",
            value:"1"
           },
           {
            name:"1 + nb",
            value:"2"
           },
           {
            name:"2 + nb",
            value:"3"
           },
           {
            name:"3 + nb",
            value:"4"
           },
           {
            name:"4 + nb",
            value:"5"
           },
           {
            name:"5 + nb",
            value:"6"
           },
           {
            name:"6 + nb",
            value:"7"
           },
        ],
        wideList:[
           {
            name:"wd",
            value:"1"
           },
           {
            name:"1 + wd",
            value:"2"
           },
           {
            name:"2 + wd",
            value:"3"
           },
           {
            name:"3 + wd",
            value:"4"
           },
           {
            name:"4 + wd",
            value:"5"
           },
        ],
        additionalDialog:1,
        category:"",
        scores:[],
        count:1,
        noOfBalls:0,
        teamA:null,
        teamB:null,
    };
  },
  created()
  {
    if(this.no_of_overs==0&&this.c==0)
    {
      this.additionalDialog=0;
    }
     let payload={
            noOfOver:this.no_of_overs+1,
            bowlerId:12,
            matchId:'27',
            teamId:4,

         }
         axios.post('http://10.30.1.46:8087/insertOver',payload).then(response=>(console.log(response)));
         axios.get(`http://10.30.1.46:8087/getBatsManDetails/${'27'}/${4}/${23}`).then(response=>(console.log(response)));
  },
  mounted()
  {
    console.log("inside mounted")
      var matchId=localStorage.getItem("matchId")
      // var userid=localStorage.getItem("userid")
      getParticularMatch({
          success: (response) => {
            
            this.teamA=response.team1
            this.teamB=response.team2
            
          console.log(this.teamA,this.teamB);
          },
          error: (err) => {
            console.log(err);
          },
          payload: matchId,
        });
      
  },
  watch:
  {
     no_of_overs(newvalue,oldValue)
     {
         let payload={
            noOfOver:this.no_of_overs+1,
            bowlerId:12,
            matchId:'27',
            teamId:4,

         }
         axios.post('http://10.30.1.46:8087/insertOver',payload).then(response=>(console.log(response)))
         oldValue;
  },
    ballByBall(newvalue,oldValue)
    {
      let payload={
        matchId:'27',
        teamId:4,
        batsManId:23,
        bowlerId:12,
        batsManName:'Dhoni',
        bowlerName:'Bumrah',
        noOfOver:this.no_of_overs+1,
        noOfBall:this.c,
        runs:6,
        runStatus:'none',
        wicket:0,
        wicketStatus:'Not Out',
        catchby:'none'
      }
       axios.post('http://10.30.1.46:8087/insertBall',payload).then(response=>(console.log(response)));
        axios.get(`http://10.30.1.46:8087/getBatsManDetails/${'27'}/${4}/${23}`).then(response=>(console.log(response)));
       oldValue
    }
  },
  methods: {
    chooseBatsman(val)
    {
      console.log(val)
      this.currentBatsman=val
      this.additionalDialog=1
      this.batsmanModal=false
    },
    addScoreList(value,category){
        // console.log(value)
        this.additionalDialog=2
        this.buttonList=value;
        this.category=category

    },

    addValue(value){
      if(!(value.value>='A'&&value.value<='Z'))
      {
         this.total=this.total+Number(value.value);
      }
       else
       {
        this.wickets+=1;
       }
       if(!value.name.includes('nb')&&!value.name.includes('wd'))
          {
              this.c=this.c+1;
          }
          else{
            this.extras+=1;
          }
       if(this.c<=6)
        {
        this.ballByBall.push(value.name);
        }
        else{
           this.no_of_overs+=1;
          this.ballByBall=[];
          this.c=0;
        }
         

        console.log(value)
        this.additionalDialog=1;
    },
    undo()
    {
       this.totalUndo=this.ballByBall[this.ballByBall.length-1];
       if(this.totalUndo.length>1)
       {
           if(!(this.totalUndo.charAt(0)>='A'&&this.totalUndo.charAt(0)<='Z'))
          {
            console.log(!(this.totalUndo.charAt(0)>='A'&&this.totalUndo.charAt(0)<='Z'));
          if(this.totalUndo.charAt(0)=='n'||this.totalUndo.charAt(0)=='w')
          {
            this.total=this.total-1;
            this.extras-=1;
          }
          else
          {
            if(this.totalUndo.includes('wd')||this.totalUndo.includes('nb'))
            {
            this.total=this.total-(Number(this.totalUndo.charAt(0))+1);
             this.extras-=1;
            }
            else
            {
             this.total=this.total-Number(this.totalUndo.charAt(0));
              this.extras-=Number(this.totalUndo.charAt(0));
            }
          }
       }
        else
       {
        this.wickets-=1;
       }
       }
       else
       {
           this.total=this.total-this.totalUndo;
       }
       console.log(this.ballByBall.pop());
     
       this.c=this.c-1;
       
    },
    addScore(value){
      // this.additionalDialog=3;
        console.log(this.total);
        this.total=this.total+Number(value);
        if(this.c<6)
        {
        this.ballByBall.push(value);
        this.c=this.c+1;

        }
        else{
          this.no_of_overs+=1;
          this.ballByBall=[];
          this.c=0;
        }
        
    },
    runrate()
    {
      if(this.no_of_overs==0&&this.c==0)
      {
        let c=0;
           return c.toFixed(2);
      }
      return ((this.total/((this.no_of_overs*6)+this.c))*100).toFixed(2);
    },
    strikeRotate(value)
    {
      this.strike=value;
    }

},
};
</script>

<style scoped>
table,
tr,
td {
  border-collapse: collapse;
  text-align: center;
  color: white;
  /* padding: 5px; */
}
table {
  border: none;
}
tr {
  border-bottom: 1px solid black;
}
tr:nth-last-child(1) {
  border-bottom: none;
}
td:nth-last-child(1) {
  border-right: none;
}
td {
  border-right: 1px solid black;
  padding: 5px;
}
.scoringCard{
    background-color: #ff9900;
    height: 150px;
    padding-top: 2%;
    position: relative;
}
.bgColor{
  background: rgb(247, 247, 247);
}
.table-style{
    width: 90%;
    margin-left: 5%;
    background-color: #ff9900;
    padding-top: 15%;
}
.scorebtn {
  /* width: 100px !important; */
  padding: 20%;
  height: 100px;
  border: none;
  display: contents;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}
button.widebtn {
    background: none;
    display: inline-block;
    min-width: 80px;
    min-height: 30px;
    border-radius: 6px;
    border: 1px solid black;
    margin: 5px;
    color: white;
    font-weight: bolder;
}
.wide-style{
    width: 100%;
    background-color: #ff9900;
    padding: 0 25%;
   
}
.wide-header{
    float:right;
    position:absolute;
    background: none;
    border: none;
    top: 2%;
    right: 1%;
}
.ball-by-ball
{
   height:15%;
   background:white;
   border-radius:10px;
   padding-top:0.5% ;

}
.ball-align{
  margin-right:2%;
  font-size: 65%;
}
.players-select :hover{
  background: ghostwhite;
  border:1px solid black;
}
.players-select{
   display: flex;
   margin-left:2px;
}
.strike{
  
   background:#ff9900;
   border-radius:10px;
}
.strike :hover{
   background:ghostwhite;
   border-radius:10px;
   border:0.2 solid black;
}
.spacing-modal{
  margin-bottom:1%;
}
</style>
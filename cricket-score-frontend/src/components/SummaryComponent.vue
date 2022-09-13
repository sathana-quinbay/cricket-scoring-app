<template>
  <div>
    <div>
      <h4>India</h4>
      <p>1st Innings</p>
      <h1 style="color: #319da0">92-7</h1>
      <hr class="table--hr" />
    </div>
    <div>
      <b-row style="font-weight: bold">
        <b-col>Extras - 0</b-col>
        <b-col>Overs - 2/20</b-col>
        <b-col>CRR - 5.6</b-col>
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
      <b-row>
        <b-col>Kishore</b-col>
        <b-col>25</b-col>
        <b-col>12</b-col>
        <b-col>2</b-col>
        <b-col>1</b-col>
        <b-col>208.33</b-col>
      </b-row>
      <b-row style="margin-bottom: 2%">
        <b-col>Kishore</b-col>
        <b-col>25</b-col>
        <b-col>12</b-col>
        <b-col>2</b-col>
        <b-col>1</b-col>
        <b-col>208.33</b-col>
      </b-row>

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
      <b-container class="bgColor"  fluid v-show="additionalDialog==3">
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
      <div v-show="additionalDialog!=3"  class="scoringCard">
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
            <td><button class="scorebtn" @click="addScore('Undo')">Undo</button></td>
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
            
            <!-- <td><button class="scorebtn" @click="addScore('1')">Wd</button></td>
            <td><button class="scorebtn" @click="addScore('2')">2+ Wd</button></td>
            <td><button class="scorebtn" @click="addScore('3')">3+ Wd</button></td>
            <td><button class="scorebtn" @click="addScore('4')">4+ Wd</button></td>
            <td><button class="scorebtn" @click="addScore('5')">5+ Wd</button></td> -->
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        buttonList:[],
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
        category:""
    };
  },
  methods: {
    addScoreList(value,category){
        // console.log(value)
        this.additionalDialog=2
        this.buttonList=value;
        this.category=category

    },
    addValue(value){
      if(value.key)
        console.log(value)
        this.additionalDialog=1;
    },
    addScore(value){
      this.additionalDialog=3;
        console.log(value);
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
    position: relative;
}
.wide-header{
    float:right;
    position:absolute;
    background: none;
    border: none;
    top: 0;
    right: 1%;
}
</style>
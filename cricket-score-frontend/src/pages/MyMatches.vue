<template>
    <div class="match-head">
       <b-card  class="card" v-for="(key,index) in matchList" :key="index">
        <h4>{{key.matchName}}</h4>
        <p> {{key.matchLocation}} </p> 
       <p>{{new Date(key.matchDate).toDateString()}} - {{key.matchTime}}</p>
       <p>Overs:{{key.overs}}</p>
       <div style="display:flex">
       <button @click="deleted(key.matchId)" class="delete-btn" style="">Delete</button>
       <button @click="editMatch(key.matchId)" class="scoring">View</button>
       </div>
       </b-card>
    </div>
    
</template>
<script>
import {mapGetters} from "vuex"
import { deleteMatch } from '../Service/match.service';
export default{
    name:"MyMatches",
    data(){
        return {
           date:""
        }
    },
    created()
   {
    console.log("inside ciewe")
     this.$store.dispatch("GET_MATCH_LIST");
   },
    mounted()
    {
        console.log(this.matchList)
    },
    computed: {
    ...mapGetters({
      matchList: "getMatchList",
    })
},
    methods: {
      editMatch(id)
      {
         this.$router.push({ path: `/edit/${id}` });
      },
      deleted(val){
            var value=val
            console.log(typeof(value))
            deleteMatch( {
                success:(response)=>{
                console.log(response)
                this.$store.dispatch("GET_MATCH_LIST");
                },
                error:(e)=>{
                   console.log(e)
                },
               payload:value
            }
            )
    },
   },
}
</script>

<style scoped>
.card{
    max-width: 300px;
    max-height: 300px;
    background: #FFFFFF;
    margin: 2% 7% 3% 5% ;
    border-radius: 25px;
    padding-top: 10px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.match-head{
    display: flex;
    flex-wrap: wrap;
    height: 700px;
    overflow-y:auto ;
    padding-top:10px ;
}
.scoring
  {
      background: #5cb85c;
      width:70px;
      height:30px;
      margin:8% 5%; 
      border: none;
      justify-content: center;
      border-radius: 5px;
      color: white;
  }
.delete-btn{
    width:70px;
    height:30px;
    margin:8% 17%; 
    justify-content: center;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: rgb(192, 71, 71);
}
</style>
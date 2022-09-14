<template>

    <div class="match-head">
       <div @click="editMatch(key.matchId)" class="card" v-for="(key,index) in matchList" :key="index">
        <h4>{{key.matchName}}</h4>
        <p> {{key.matchLocation}} </p> 
       <p>{{new Date(key.matchDate).toDateString()}} - {{key.matchTime}}</p>
       <p>Overs:{{key.overs}}</p>
       <button @click="deleted(key.matchId)" class="deletefunc" style="">Delete</button>

       </div>
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
            deleteMatch( {
                success:(response)=>{
                console.log(response)
              
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
    width: 400px;
    height: 300px;
    background: rgb(230, 214, 214);
    margin: 5%;
}
.match-head{
    display: flex;
}
.deletefunc{
    width:70px;
    height:30px;
    /* margin:5% 40%; */
    justify-content: center;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: rgb(192, 71, 71);
}
</style>
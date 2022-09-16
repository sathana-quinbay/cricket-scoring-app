<template>
    <div>
    <div class="display-match">
    <b-card v-for="(key,index) in teamMatches" :key="index" class="match-card" bg-variant="dark" text-variant="white" title="">
       <p>{{key.matchName}} </p> 
  <b-card-text class="card-text">
    {{key.matchLocation}}<br>
    {{new Date(key.matchDate).toDateString()}}<br>
     Time : {{key.matchTime}}<br>
     Choose to : {{key.chooseTo}}
  </b-card-text>
</b-card>
</div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            // teamMatches:"getTeamMatches"
        })
    },
    mounted(){
        console.log(this.teamMatches);
    }
}
</script>

<style scoped>
.display-match{
    width: 60%;
    height: 25%;
    margin: 0% 20%;
    font-size: 25px;
}
.match-card{
    border-radius: 20px;
    margin-top: 5%;
   
}
.card-text{
    /* font-size: 25px; */
}
</style>
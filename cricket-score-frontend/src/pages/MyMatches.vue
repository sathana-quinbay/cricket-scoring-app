<template>
    <div>
       <div class="card" v-for="(key,index) in matchList" :key="index">
       <h5> {{key.matchLocation}} </h5> 
       <p>{{new Date(key.matchDate).toDateString()}}</p>
       <button @click="deleteMatch" style="width:70px;height:30px">Delete</button>

       </div>
    </div>
    

</template>
<script>
import {mapGetters} from "vuex"
export default{
    name:"MyMatches",
    data(){
        return {
           date:""
        }
    },
    computed: {
    ...mapGetters({
      matchList: "getMatchList",
    }),
    
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
    methods:{
        deleteMatch(){
            // deleteMatch({})
        }
    }

}
</script>

<style scoped>
.card{
    width: 200px;
    height: 200px;
    background: rgb(200, 187, 187);
}
</style>
<template>
   <div>
     <div v-for="match in matchList" :key="match.matchId">
        <h1 @click="editMatch(match.matchId)">{{match.matchName}}</h1>
    </div>
   </div>
</template>
<script>
import {mapGetters} from "vuex"
export default{
    name:"MyMatches",
    data(){
        return {

        }
    },
    methods: {
      editMatch(id)
      {
         this.$router.push({ path: `/edit/${id}` });
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
    }
}
</script>

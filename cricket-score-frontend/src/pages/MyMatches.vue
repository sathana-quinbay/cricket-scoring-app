<template>
    <h1>hello</h1>
</template>
<script>
import {mapGetters} from "vuex"
export default{
    name:"MyMatches",
    data(){
        return {

        }
    },
    computed: {
    ...mapGetters({
      matchList: "getTeams",
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

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
    computed:{
        ... mapGetters({
            matchList:"getMatchList"
        })
    },
    mounted()
    {
        console.log(this.matchList)
    }
}
</script>

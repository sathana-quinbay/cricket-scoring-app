<template>
    <div>
        <b-container>
          <b-row>
            <b-col cols="12" lg="12" md="12" sm="12" v-for="(player,index) in playersList" :key="player.id">
                <div class="modal--header d-flex justify-content-between align-items-center">
                    <b-avatar class="avatar-size" :text="index+1"></b-avatar>
                    <div>
                    <p>{{player.name}}</p>
                    <p>{{player.id}}</p>
                </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <b-col lg="4" class="pb-2"><b-button :class="player.status=='playing'?'success':'failed' " size="sm">Playing</b-button></b-col>
                    <b-col lg="4" class="pb-2"><b-button :class="player.status!='playing'?'success':'failed' " size="sm">Bench</b-button></b-col>
                </div>
                </div>
                <hr class="table--hr"/>
            </b-col>
          </b-row>

        </b-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
           playingButton:false
        }
    },
    methods:{
      
    },
    computed:{
        ...mapGetters({
            playersList:"getplayersList"
        })
    },
    mounted(){
        console.log(this.playersList)
    }
}
</script>

<style scoped>
  .avatar-size{
      width: 22px;
      height: 20px;
  }
  .table--hr{
    border-top: 1px solid #c2baba;
  }
  .success,.success:hover,.success:focus{
    background-color: green;
  }
  .failed,.failed:hover,.failed:focus{
    background-color: grey;
  }
  p:nth-child(2){
    margin: 0;
    font-style:italic;
  }
  p:nth-child(1){
    font-weight: bold;
  }
</style>
<template>
    <div>
        <b-container style="margin-top:5%">
        <div class="d-flex justify-content-end gap-1" style="margin-right:0">
            <b-button variant="primary" v-b-modal.modal-footer-sm>Add Players</b-button> 
            <b-modal id="modal-footer-sm" hide-footer title="Create New Player" button-size="sm">
            <b-form-input class="input-name" type="text" placeholder="Full Name"></b-form-input>
            <b-button style="margin-left: 40%;" variant="info" size="sm">Add Player</b-button>
       </b-modal>
        </div>
          <b-row style="margin-top:2%">
            <b-col cols="12" lg="12" md="12" sm="12" v-for="(player,index) in playersList" :key="player.id">
                <div class="modal--header d-flex justify-content-between align-items-center">
                    <b-avatar class="avatar-size" :text="index+1"></b-avatar>
                    <b-avatar class="avatar-size" :text="player.id"></b-avatar>
                    <div>
                    <p>{{player.name}} - {{player.id}}</p>
                </div>
                    <!-- <div class="d-flex justify-content-between align-items-center">
                    <b-col lg="4" class="pb-2"><b-button :class="player.status=='playing'?'success':'failed' " size="sm">Playing</b-button></b-col>
                    <b-col lg="4" class="pb-2"><b-button :class="player.status!='playing'?'success':'failed' " size="sm">Bench</b-button></b-col>
                </div> -->
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

  .input-name{
     border: none;
     border-radius: 0;
     border-bottom: 1px solid;
     margin-bottom: 2%;
  }
</style>
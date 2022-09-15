<template>
  <b-modal
    size="md"
    centered
    hide-footer
    scrollable
    v-model="show"
    title="Select Team"
    no-close-on-backdrop
    header-bg-variant="danger"
    header-text-variant="light"
    body-text-variant="bodyTextVariant"
    footer-bg-variant="footerBgVariant"
    footer-text-variant="footerTextVariant"
  >
    <template #modal-header>
      <h5>Add players</h5>
      <button @click="closeModal" class="closeButton">
        <b-icon-x-lg style="color: white" />
      </button>
    </template>
    <b-container fluid>
      <b-row>
        <b-col cols="12" lg="8" md="6" sm="12">
         
          <b-form-input
            class="formInput"
            v-model="playerName"
            placeholder="Player Name"
            type="text"
          ></b-form-input>
        </b-col>
        <b-col  cols="12" lg="4" md="6" sm="12">
            <button @click="addPlayer" class="submitAdd">Add Player</button>
        </b-col>
      </b-row>
      <b-row>
         <b-col class="playersComponent" cols="12" lg="8" md="6" sm="12">
             
         </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>
<style scoped>
.playersComponent
{
    height: 400px;
    overflow: ;
}
.closeButton {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
}
.formInput {
  margin-top: 0%;
  padding-top: 0%;
  text-align: center;
  border: none;
  border-radius: 5px;
  background: #f4f2f2;
  border: 1px solid #f4f2f2;
}

.formInput:focus {
  border: none;
  box-shadow: none;
  border: 1px solid yellowgreen;
  border-color: black;
}
.submitAdd
{
    background:blue;
    color: white;
    border: none;
   padding: 2%;
   height: 35px;
    border-radius: 5px;
}
</style>
<script>
import {createPlayer} from "../Service/player.service"
export default {
  data() {
    return {
      show: true,
      playerName: "",
    };
  },
  props:["selectedTeamId","teamPlayers"],
  mounted()
  {

  console.log(this.selectedTeamId,this.teamPlayers)
    //  getPlayerA({
    //         success:(response)=>{
    //             console.log(response)
    //         },
    //         error:(e)=>{
    //             console.log(e)
    //         },
    //         payload
    //     })

  },
  methods: {
    closeModal() {
      this.show = false;
      this.$emit("closePlayerModal");
    },
    addPlayer()
    {
        var payload={
            playername:this.playerName,
            teamId:this.selectedTeamId

        }
        console.log(payload)
        createPlayer({
            success:(response)=>{
                console.log(response)
            },
            error:(e)=>{
                console.log(e)
            },
            payload
        })


    }
  },
};
</script>
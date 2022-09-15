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
      <b-row v-if="playerList.length<11">
        <b-col cols="12" lg="8" md="6" sm="12">
          <b-form-input
            class="formInput"
            v-model="playerName"
            placeholder="Player Name"
            type="text"
          ></b-form-input>
        </b-col>
        <b-col cols="12" lg="4" md="6" sm="12">
          <button @click="addPlayer" class="submitAdd">Add Player</button>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col class="error">
            <span >{{errorMessage}}</span>
        </b-col>
        <b-col cols="12" lg="12" md="12" sm="12" v-if="playerList.length==0">
            <div class="noPlayers">

          
            <p> No players added</p>
            </div>
        </b-col>
        <b-col  v-else cols="12" lg="12" md="12" sm="12">
          <div class="playersComponent">
            <div
              class="playerListClass"
              v-for="(player, index) in playerList"
              :key="player.playerid"
            >
              <b-avatar
                class="avaratarPlayer"
                size="15"
                :text="`${index + 1}`"
              ></b-avatar>
               
              <div>
                
                <p class="playerName">
                     <!-- <span class="idClass">{{ player.playerid }}</span> -->
                  {{ player.playername }} 
                 
                </p>
              </div>
              <b-icon-trash class="deleteButton" @click="deletePlayer(player)"
                >delete</b-icon-trash
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>
<style scoped>
.closeButton {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
}
.idClass {
  font-weight: 300;
 
  padding: 2px;
  padding-left:10px;

  padding-right:10px ;
  background: rebeccapurple;
  color: white;
  font-size:15px ;
  border-radius: 10px;
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
.submitAdd {
  background: rebeccapurple;
  color: white;
  border: none;
  padding: 2%;
  padding-left:20px ;
  padding-right: 20px;
  height: 35px;
  border-radius: 5px;
}
.playersComponent {
  margin-top: 3%;
}
.noPlayers{
    /* background: #f4f2f2; */
    text-align:center;
    margin-top:5%
}
.playerListClass {
  display: flex;
  height: 30px;
  margin-top: 2%;
  width: 100%;
  position: relative;
  justify-content: flex-start;
  background: #f4f2f2;
  color: black;
  border-radius: 10px;
  border: 1px solid #565656;
}
.playerName {
  text-align: left;
  margin-left: 20px;
}
.avaratarPlayer {
  margin-top: 2%;
  margin-left: 2%;
  background: rebeccapurple;
}
.deleteButton {
  margin-top: 2%;
  color: red;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 2%;
}
.error{
    color: red;
    text-align: center;
}
</style>
<script>
import {
  createPlayer,
  getPlayersByTeam,
  deletePlayerByTeam,
} from "../Service/player.service";
export default {
  data() {
    return {
      show: true,
      playerName: "",
      errorMessage : "",
      playerList: [],
    };
  },
  props: ["selectedTeamId", "teamPlayers", "matchId"],
  mounted() {
    this.getPlayerList();
    console.log(this.selectedTeamId, this.teamPlayers);
    console.log(this.teamPlayers.playerList);
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
    deletePlayer(player) {
      console.log(player);

      var payload = {
        teamId: this.selectedTeamId,
        playerId: player.playerid,
      };
      deletePlayerByTeam({
        success: (response) => {
          console.log(response);
          this.getPlayerList();
        },
        error: (err) => {
          console.log(err);
        },
        payload,
      });
    },
    getPlayerList() {
      console.log("inside get player list");
      var payload = {
        matchId: this.matchId,
        teamId: this.selectedTeamId,
      };
      getPlayersByTeam({
        success: (response) => {
          console.log(response);
          this.playerName=""
          this.playerList = response.playerList;
        },
        error: (err) => {
          console.log(err);
        },
        payload,
      });
    },
    closeModal() {
      this.show = false;
      this.$emit("closePlayerModal");
    },
    playerNameCheck(name) {
      var userName = new RegExp("^[a-zA-Z . ]+$");
      if (name.length < 3) return "Required atleast 3 characters";
      if (!userName.test(name)) return "must contain alphabets only";
      return "true";
    },
    addPlayer() {
        if(this.playerList.length<=12)
        {

      
      var nameCheck = this.playerNameCheck(this.playerName);
      if (nameCheck == "true") {
        var payload = {
          playername: this.playerName,
          teamId: this.selectedTeamId,
        };
        console.log(payload);
        createPlayer({
          success: (response) => {
            console.log(response);
            this.getPlayerList();
          },
          error: (e) => {
            console.log(e);
            if(e.response.status==409)
            {
                this.errorMessage = e.response.data;

            }
          },
          payload,
        });
        this.errorMessage = "";
      } else {
        this.errorMessage = nameCheck;
      }
        }
        else{
            this.errorMessage = "Team should contain only 11 players";
        }
    },
  },
};
</script>
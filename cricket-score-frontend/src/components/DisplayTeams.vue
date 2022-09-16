<template>
  <div>
    <div>
      <b-table :items="teamList" :fields="fields">
        <template #cell(Actions)="item">
          <b-button class="match-btn" @click="viewMatch(item.item.teamid)">Matches</b-button>
          <b-button class="view-btn" @click="open(item.item)">Players</b-button>
          <b-button class="del-btn" @click="del_team(item.item.teamid)">Delete</b-button>
        </template>
      </b-table>
    <b-modal
    size="md"
    centered
    hide-footer
    scrollable
    v-model="show"
    no-close-on-backdrop
    header-bg-variant="danger"
    header-text-variant="light"
    body-text-variant="bodyTextVariant"
    footer-bg-variant="footerBgVariant"
    footer-text-variant="footerTextVariant"
  >
  <template #modal-header>
      <h5>Match Info</h5>
      <button @click="show=false" class="closeButton">
        <b-icon-x-lg style="color: white" />
      </button>
    </template>
  <div>
   
    <div class="display-match">
    <b-card v-for="(key,index) in teamMatches" :key="index" class="match-card" bg-variant="dark" text-variant="white" title="">
       <p>{{key.matchName}} </p> 
  <b-card-text class="card-text">
    Location:{{key.matchLocation}}<br>
    Date : {{new Date(key.matchDate).toDateString()}}<br>
     Time : {{key.matchTime}}<br>
     Status : {{key.matchStatus}}<br>
     Toss won by : {{key.tossWonByTeam}}<br>
     Choose to : {{key.chooseTo}}
  </b-card-text>
</b-card>
</div>
  </div>
  
      </b-modal>
    </div>
    <!-- <DisplayPlayers @closeModal="closeModal" v-if="showModal" :item="list"/> -->
    <AddPlayersComponent
      :selectedTeamId="selectedTeamId"
      :teamPlayers="teamPlayers"
      v-if="showModal"
      @closePlayerModal="closePlayerModal"
    />
    <DeleteModal
      v-if="showdelmodal"
      @closeDelModal="closeDelModal"
      :teamid="delid"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import DisplayPlayers from "@/components/DisplayPlayers.vue"
import {getTeamMatches} from "@/Service/match.service"
import DeleteModal from "./DeleteModal.vue";
import AddPlayersComponent from "../components/AddPlayersComponent.vue";
export default {
  data() {
    return {
      fields: ["teamname", "teamlocation", "Actions"],
      showModal: false,
      showdelmodal: false,
      selectedTeamId: null,
      teamPlayers: null,
      list: [],
      delid: null,
      show:false,
    };
  },
  computed: {
    ...mapGetters({
      teamList: "getTeams",
      teamMatches:"getTeamMatches"
    }),
  },
  mounted() {
    console.log(this.teamMatches);
    this.$store.dispatch("GET_TEAMS");
  },
  methods: {
    open(item) {
      this.showModal = true;
      this.list = item;
      this.selectedTeamId = item.teamid;
      this.teamPlayers = item.playerList;
      console.log(this.selectedTeamId);
      console.log(this.teamPlayers);
    },
    closePlayerModal() {
      this.showModal = false;
    },
    del_team(teamid) {
      this.showdelmodal = true;
      this.delid = teamid;
    },
    closeDelModal() {
      this.showdelmodal = false;
    },
    viewMatch(value) {
        console.log(value);
        getTeamMatches({
            success:(data) => {
                console.log(data)
                // this.$store.dispatch("GET_TEAM_MATCHES")
                this.$store.commit('setTeamMatches',data);
            },
            error:(e) => {
                console.log(e)
            },
            payload:value
        })
        this.show=true;
     },
  },
  components: { DeleteModal, AddPlayersComponent },
}
</script>

  <style scoped>
.view-btn,
.match-btn {
  margin-right: 5%;
}
.display-match{
    width: 70%;
    height: 25%;
    margin: 0% 10%;
    font-size: 25px;
}
.match-card{
    border-radius: 20px;
    margin-top: 5%;
   
}
.closeButton {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
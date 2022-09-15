<template>
    <div>     
  <div>
    <b-table :items="teamList" :fields="fields">
        <template #cell(Actions)="item">
            <b-button @click="open(item.item)">View</b-button>
            <b-button class="del-btn" @click="del_team(item.item.teamid)">Delete</b-button>
        </template>
    </b-table>
  </div>
   <!-- <DisplayPlayers @closeModal="closeModal" v-if="showModal" :item="list"/> -->
   <AddPlayersComponent
      :selectedTeamId="selectedTeamId"
    
      :teamPlayers="teamPlayers"
      
      v-if="showModal"
      @closePlayerModal="closePlayerModal"
    />
   <DeleteModal v-if="showdelmodal" @closeDelModal="closeDelModal" :teamid="delid"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import DisplayPlayers from "@/components/DisplayPlayers.vue"
import DeleteModal from "./DeleteModal.vue"
import AddPlayersComponent from "../components/AddPlayersComponent.vue"
    export default {
    data() {
        return {
            fields: ["teamname", "teamlocation", "Actions"],
            showModal:false,
            showdelmodal:false,
            selectedTeamId:null,
            teamPlayers:null,
            list:[],
            delid:null,
        };
    },
    computed: {
        ...mapGetters({
            teamList: "getTeams",
        }),
    },
    mounted() {
        console.log(this.teamList);
        this.$store.dispatch("GET_TEAMS");
    },
    methods: {
        open(item) {
            this.showModal=true
            this.list = item;
            this.selectedTeamId=item.teamid
            this.teamPlayers=item.playerList
            console.log(this.selectedTeamId)
            console.log(this.teamPlayers)
        },
        closePlayerModal(){
            this.showModal=false;
        },
        del_team(teamid){
            this.showdelmodal=true;
            this.delid=teamid;
        },
        closeDelModal(){
            this.showdelmodal=false;
        }
    },
    components: {  DeleteModal,AddPlayersComponent}
}
  </script>

  <style scoped>
  .del-btn{
    margin-left: 5%;
  }
  </style>
<template>
  <div>
    <div>
      <b-table :items="teamList" :fields="fields">
        <template #cell(Actions)="item">
          <b-button class="match-btn" @click="Matches(item.item.teamid)">Matches</b-button>
          <b-button class="view-btn" @click="open(item.item)">View</b-button>
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
        <h5>Matches </h5>
        <button @click="closeModal" class="closeButton">
          <b-icon-x-lg style="color: white" />
        </button>
        <div >
            <div>
               <h3>kfdofjofj</h3>
            </div>
        </div>
       

      </template>
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
    }),
  },
  mounted() {
    console.log(this.teamList);
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
    Matches(value) {
        console.log(value);
        this.show=true;
    },
  },
  components: { DeleteModal, AddPlayersComponent },
};
</script>

  <style scoped>
.view-btn,
.match-btn {
  margin-right: 5%;
}
</style>
<template>
  <div>
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
        <h5>Create Team {{teamOption}}</h5>
        <button @click="closeModal" class="closeButton">
          <b-icon-x-lg style="color: white" />

        </button>
      </template>
      <div v-if="dialogFor=='existing'">
        <b-icon-arrow-left-circle-fill @click="dialogFor='add'"/>
          <div class="teamList" >
                 <div class="team" @click="teamSelection(team)" @mouseover="callHover(team.teamid)" :class="hoveredItem==team.teamid?'seleted-item':''" v-for="team in teams" :key="team.teamid">  
                    <b-avatar
                      style="cursor: pointer"
                      variant="info"
                      
                      size="1.5rem"
                    >
                    </b-avatar>
                    <p>{{team.teamname}} - <i>{{team.teamlocation}}</i></p>
                  </div>
          </div>
      </div>
      <div  v-if="dialogFor=='createnew'">
         <b-icon-arrow-left-circle-fill @click="dialogFor='add'"/>
         <br>
        <label>Team name</label>
        <b-form-input
          class="formInput"
          v-model="teamName"
          type="text"
        ></b-form-input>
        <label>Location</label>
        <b-form-input
          class="formInput"
          v-model="location"
          type="text"
        ></b-form-input>
        <p class="error">{{errorMessage}}</p>
        <div class="submitButton">
          
          <br>
          <button @click="submitTeam" class="createButton">Create</button>
        </div>
      </div>

      <div v-if="dialogFor=='add'" class="align-team">
        <div v-show="!dispSearch">Selected Team</div>
         <center>
            <b-button
              variant="danger"
              @click="dialogFor='existing'"
              style="width: 200px"
              >Select From Existing</b-button
            >
          </center>
         <p style="text-align: center">or</p>
          <center>
            <b-button
              variant="danger"
              @click="dialogFor='createnew'"
              style="width: 200px"
              >Create New Team</b-button
            >
          </center>
       
        <!-- <center>
          <div style="padding-bottom: 5px">
            <b-form-input
              class="formInput"
              v-show="dispSearch"
              type="search"
              placeholder="Search by Team Name"
              v-model="searchKey"
              centered
            />
            <ul v-for="i in team" :key="i">
              <div class="align-search-teams">
                <div class="selected-team">
                  <li @click="dispSearch = false">
                    <b-avatar
                      style="cursor: pointer"
                      variant="info"
                      :src="i.img"
                      size="3.5rem"
                    ></b-avatar
                    ><br />{{ i.teamname }}
                  </li>
                </div>
                <div @click="remove()" v-show="!dispSearch" class="x">x</div>
              </div>
            </ul>
            <br />
            <p v-show="!dispSearch" class="ui-close">
              ( click 'x' to remove selection. )
            </p>
            <p v-show="resultsNone">No Matches Found.</p>
          </div>
        </center> -->

       
      </div>

      <!-- <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button> -->
      <template #modal-footer>
        <div class="w-100">
          <p class="float-left"></p>

          <b-button
            variant="dark"
            size="sm"
            class="float-right"
            @click="closeModal"
          >
            Next
          </b-button>
          <b-button
            style="float: left"
            variant="warning"
            size="sm"
            @click="closeModal"
          >
            Back
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { teamRegister } from "@/Service/team.service";
export default {
  name: "AddTeamComponent",
  data() {
    return {
      show: true,
      location: "",
      teamName: "",
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      existingTeams:false,
      headerBgVariant: "dark",
      hoveredItem:null,
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
      createNew: false,
      errorMessage:'',
      dialogFor:"add",
      team: [],
      searchKey: "",
      resultsNone: false,
      dispSearch: true,
    };
  },
  props:['teamOption'],
  watch: {
    searchKey(newvalue, oldvalue) {
      let c = 0;
      oldvalue;
      if (newvalue == "" || newvalue == undefined) {
        this.team = [];
        this.resultsNone = false;
      } else {
        this.team = [];
        for (let j = 0; j < this.teams.length; j++) {
          if (
            this.teams[j].teamname
              .toLowerCase()
              .startsWith(newvalue.toLowerCase())
          ) {
            this.team.push(this.teams[j]);
            c++;
            this.resultsNone = false;
          }
        }
        if (c == 0) {
          this.resultsNone = true;
        }
      }
    },
  },
  methods: {
    teamSelection(team)
    {
      this.$emit('chooseTeam',team,this.teamOption)
     this.show=false
    },
    callHover(teamid)
    {
      console.log("hello")
this.hoveredItem=teamid
    },
    remove() {
      this.team = [];
      this.dispSearch = true;
    },
    closeModal() {
      this.show = false;
      this.$emit("closeModal");
    },
    submitTeam() {
      var payload = {
        teamname: this.teamName,
        teamlocation: this.location,
      };
      teamRegister({
        success: (response) => {
          console.log(response);
            this.$store.dispatch('GET_TEAMS')
             this.$emit('chooseTeam',response.data,this.teamOption)
        },
        error: (e) => {
          console.log(e);
          if(e.response.status==409)
          {
            this.errorMessage=e.response.data
          }
        },
        payload,
      });
    },

  },
  computed: {
    ...mapGetters({
      teams: "getTeams",
    }),
  },
  mounted() {
    console.log(this.teams);
  },
};
</script>

<style scoped>
.closeButton {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
}
.team
{
  display:flex;
  justify-content: flex-start;
}

.team{
    margin-top: 1%;
    padding-top: 1%;
    border-radius: 10px;
   
    padding-left: 4%;
    height: 35px;
    width: 100%;
    background: #f2f2f2;
}
.seleted-item{
  background: #c5c5c5;
}
  
.team p{
  margin-left: 10%;
}
input[type="search"] {
  border: 0.01px solid black;
  background: whitesmoke;
  border-radius: 10px;
  outline: none;
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
.align-team {
  display: list-item;
  list-style-type: none;
  margin-left: 5%;
  padding: 5%;
}
.createButton {
  color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  padding: 2%;
  background-color: #d9534f;
  border: none;
}
.error{
  color: red;
  text-align: center;
}
.align-search-teams {
  margin-left: 30%;
  padding-bottom: 2%;
  display: flex;
  list-style-type: none;
  margin-top: 2%;
}
.submitButton {
  display: flex;
  margin-top: 2%;
  justify-content: center;
}
li :hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.remove-item {
  float: right;
  margin-top: -100px;
  font-size: 75%;
}
.x {
  font-size: 15px;
  background: lightgrey;
  border-radius: 40px;
  /* padding:1%; */
  height: 20px;
  cursor: pointer;
}
.selected-team {
  background: lightgrey;
  padding: 5%;
  border-radius: 50%;
}
.ui-close {
  font-size: 70%;
  text-align: center;
}
</style>




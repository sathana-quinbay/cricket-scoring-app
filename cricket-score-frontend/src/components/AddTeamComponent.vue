<template>
   <div>
    <b-modal
    size="md"
     centered
     hide-footer
      v-model="show"
      title="Select Team"  
      no-close-on-backdrop
      header-bg-variant="danger"
      header-text-variant="light"
      
      body-text-variant="bodyTextVariant"
      footer-bg-variant="footerBgVariant"
      footer-text-variant="footerTextVariant">
         <template #modal-header>
           <h5>Create Team</h5>
            <button @click="closeModal" class="closeButton">
<b-icon-x-lg style="color:white"/>
        </button>
        </template>
         <div v-if="createNew">
               <label>Team name</label>
                <b-form-input class="formInput" v-model="teamName" type="text"></b-form-input>
                  <label>Location</label>
                <b-form-input class="formInput" v-model="location" type="text"></b-form-input>
                <div class="submitButton">
                  <button @click="submitTeam" class="createButton">Create Team</button>
                </div>
           </div>
      <div v-else class="align-team"> 
          
          <div v-show="!dispSearch">Selected Team</div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           <center>
            <div style="padding-bottom:5px;">
  <b-form-input class="formInput" v-show="dispSearch"  type="search" placeholder="Search by Team Name" v-model="searchKey" centered />
   <ul v-for="i in team" :key="i">
    <div class="align-search-teams">
       <div class="selected-team"><li @click="dispSearch=false"><b-avatar style="cursor:pointer;" variant="info" :src="i.img" size="3.5rem"></b-avatar><br>{{i.name}}</li></div><div @click="remove()" v-show="!dispSearch" class="x">x</div>
  </div>
  </ul>
   <br><p v-show="!dispSearch" class="ui-close">( click 'x' to remove selection. )</p>
  <p v-show="resultsNone">No Matches Found.</p>
  </div>
</center>

<div v-show="dispSearch">
        <p style="text-align:center">or</p>
           <center><b-button variant="danger" @click="createNew=true" style="width:200px;">Create New Team</b-button></center>
          
           
</div>

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
          <b-button style="float:left;"
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
import {mapGetters} from 'vuex';
import {teamRegister} from "@/Service/team.service"
export default {
    name:"AddTeamComponent",
    data() {
      return {
        show:true,
        location:'',
        teamName:'',
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark',
        createNew:false,
        team:[],
        searchKey:'',
        resultsNone:false,
        dispSearch:true
      }
    },
    watch:
    {
         searchKey(newvalue,oldvalue)
         {
             let c=0;
            oldvalue
            if(newvalue==''||newvalue==undefined)
             {
              this.team=[];
                   this.resultsNone=false
            }
            else
            {
            this.team=[];
            for(let j=0;j<this.teams.length;j++)
            {
            if(this.teams[j].name.toLowerCase().startsWith(newvalue.toLowerCase()))
            {
                this.team.push(this.teams[j]);
                c++;
                this.resultsNone=false
            }
            }
            if(c==0)
            {
                this.resultsNone=true;
            }
         }
    }
    },
    methods:
    {
       remove()
       {
        this.team=[];
        this.dispSearch=true;
       },
      closeModal()
      {
        this.show=false;
        this.$emit('closeModal')
      },
      submitTeam()
      {
        var payload={
          teamname:this.teamName,
          teamlocation:this.location
        }
        teamRegister({
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
    computed:
    {
      ...mapGetters({
          teams:'getTeams'
      })
    }
}
</script>

<style scoped>
.closeButton
{
    background: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
}
input[type=search] {
    border: 0.01px solid black;
    background: whitesmoke;
    border-radius:10px;
    outline:none;
}
.formInput{
    margin-top:0%;
    padding-top:0%;
    text-align: center;
    border:none;
    border-radius: 5px;
    background: #f4f2f2;
    border: 1px solid #f4f2f2;

}

.formInput:focus{
    border: none;
   box-shadow: none;
    border: 1px solid yellowgreen;
    border-color: black;
}
.align-team{
    display:list-item;
    list-style-type: none;
    margin-left: 5%;
    padding:5%;
}
.createButton{
        color: #fff;
        border-radius:5px ;
        margin: 0 auto;
        padding: 2%;
    background-color: #d9534f;
    border:none;
}
.align-search-teams{
    margin-left: 30%;
    padding-bottom:2%;
    display: flex;
    list-style-type: none ;
    margin-top: 2%;

}
.submitButton{
  display: flex;
  margin-top: 2%;
  justify-content: center;
}
li :hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.remove-item{
    float:right;
    margin-top:-100px;
    font-size:75%;
}
.x{
    font-size:15px;
    background:lightgrey;
    border-radius: 40px;
    /* padding:1%; */
    height:20px;
    cursor:pointer;
}
.selected-team
{
    background: lightgrey;
    padding:5%;
    border-radius:50%;
}
.ui-close{
    font-size:70%;
    text-align: center;
}
</style>




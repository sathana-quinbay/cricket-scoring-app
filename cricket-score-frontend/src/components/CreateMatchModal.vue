<template>
   <div>
   
    <b-modal
    size="md"
     centered
    no-close-on-backdrop
      v-model="show"
      title="Select Team"  
      header-bg-variant="danger"
      header-text-variant="light"
      body-bg-variant="light"
      body-text-variant="bodyTextVariant"
      footer-bg-variant="footerBgVariant"
      footer-text-variant="footerTextVariant">
      <div class="align-team"> 
          <div v-show="dispSearch">Option 1</div>
          <div v-show="!dispSearch">Selected Team</div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           <center>
            <div style="padding-bottom:5px;">
  <input v-show="dispSearch" style="width:250px;text-align:center;" type="search" placeholder="Search by Team Name" v-model="searchKey" centered>
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
          Option 2  <br><br>
           <center><b-button variant="danger" style="width:200px;">Create New Team</b-button></center></div>
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
            @click="show=false"
          >
            Next
          </b-button>
          <b-button style="float:left;"
            variant="warning"
            size="sm"
            @click="show=false"
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
export default {
    name:"AddTeamComponent",
    data() {
      return {
        show:true,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark',
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
input[type=search] {
    border: 0.01px solid black;
    background: whitesmoke;
    border-radius:10px;
    outline:none;
}
.align-team{
    display:list-item;
    list-style-type: none;
    margin-left: 5%;
    padding:5%;
}
.align-search-teams{
    margin-left: 30%;
    padding-bottom:2%;
    display: flex;
    list-style-type: none ;
    margin-top: 2%;

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
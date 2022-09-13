<template>
   <div>
    <!-- <b-button @click="show=true" variant="primary">Show Modal</b-button> -->

    <b-modal
      id="modalHeader"
       size="md"
       centered
      v-model="show"
      header-bg-variant="danger"
      header-text-variant="light"
      body-bg-variant="light"
     
      body-text-variant="bodyTextVariant"
      footer-bg-variant="footerBgVariant"
      footer-text-variant="footerTextVariant">
         <template #modal-header>
           <h5>Choose Team</h5>
        </template>
      <div class="align-team"> 
          
          <div v-show="!dispSearch">Selected Team</div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           <center>
            <div style="padding-bottom:5px;">
              <label for="">Search by Team Name</label>
  <b-form-input class="formInput" v-show="dispSearch"  type="search" v-model="searchKey" centered/>
   <ul v-for="i in team" :key="i">
    <div class="align-search-teams">
        <li @click="dispSearch=false"><b-avatar style="cursor:pointer;" variant="info" :src="i.img" size="3.5rem"></b-avatar><br>{{i.name}}</li>
  </div>
  </ul>
  <p v-show="resultsNone">No Matches Found.</p>
  </div>
  <div @click="remove()" v-show="!dispSearch" class="remove-item">
  <img  src="../assets/trash.svg" height="30px" width="30px"><br>
  Remove Item</div>
</center>
<div v-show="dispSearch">
          <p style="text-align:center">or</p>
           <center><b-button class="dangerButton" style="width:200px;">Create New Team</b-button></center></div>
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
            Save
          </b-button>
          <b-button style="float:left;"
            variant="warning"
            size="sm"
            @click="closeModal"
          >
            Close
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
       },
       closeModal()
       {
        this.show=false;
        this.$emit('closeModal')
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
.dangerButton,.dangerButton:focus,.dangerButton:hover{
  color: white;
  border: none;
  background: #d9534f;
}
input[type=search] {
    border: 0.01px solid black;
    background: whitesmoke;
    border-radius:10px;
    outline:none;
}
.modal-body {
    position: relative;
    flex: 1 1 auto;
    background: #d9534f;
    padding: 0% !important;
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
.formInput{
    margin-top:0%;
    padding-top:0%;
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
li :hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.remove-item{
    float:right;
    margin-top:-100px;
    font-size:75%;
}
</style>
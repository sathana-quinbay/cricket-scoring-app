<template>
  <div>
    <AddTeamComponent v-if="showModal" @closeModal="closeModal" :value="wideList"/>
      <ChooseTossComponent v-if="showTossModal" @closeTossModal="closeTossModal"/>
    <b-container class="main-container">
         <h4 class="heading">Create Match</h4>
      <b-row class="card">
        <b-col cols="12" lg="12">
         
          <div class="avatar-div">
              <div class="create-match">
                <p>Select Team</p>
                <div class="avatar-create">
                <b-icon-plus @click="shownModal" class="h1"></b-icon-plus> 
              </div>
               <h6>TEAM A</h6>
              </div>
                <div class="create-match">
                    <p>Select Team</p>
                <div class="avatar-create">
                <b-icon-plus @click="shownModal" class="h1"></b-icon-plus>
              </div>
              <h6>TEAM B</h6>
              </div>
          </div>
          <div class="match-form">
                <b-row>
                    <b-col cols="12" lg="6" md="12" sm="12">
                     <label for=""> <b-icon-geo-alt-fill />  <p>Venue</p></label>
                        <b-form-input class="formInput" type="text"></b-form-input>
                    </b-col>
                     <b-col cols="12" lg="6" md="12" sm="12">
                          <label for=""> <b-icon-mask /> <p>Overs</p></label>
                        <b-form-select v-model="overs" :options="oversList" class="formInput" type="text"></b-form-select>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                     <b-col cols="12" lg="6" md="12" sm="12"> 
                          <label for=""> <b-icon-calendar  /> <p>Date</p></label>
                        <b-form-input class="formInput" type="date"></b-form-input>
                    </b-col>
                     <b-col cols="12" lg="6" md="12" sm="12">
                          <label for=""> <b-icon-clock /> <p>Time</p></label>
                        <b-form-input class="formInput" type="time"></b-form-input>
                    </b-col>
                    <b-col>
                       <div class="Submit">
                         <button class="saveButton">Save</button>
                         <button class="startMatch" @click="showTossModal=true">Start Match</button>
                       </div>
                    </b-col>
                </b-row>
              </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AddTeamComponent from "../components/AddTeamComponent"
import ChooseTossComponent from "../components/ChooseTossComponent.vue"
export default{
    name:"CreateMatch",
    data(){
        return {
            oversList:[10,20,30,40,50],
            overs:10,
            showModal:false,
            showTossModal:false,
        }
    },
    components:{
        AddTeamComponent,
        ChooseTossComponent
    },
    methods:{
        closeTossModal()
        {
            this.showTossModal=false
        },
        closeModal()
        {
            this.showModal=false
        },
        shownModal()
        {
            this.showModal=true
        }
    }
}
</script>
<style scoped>
.Submit
{
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
}

.Submit button{

    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    min-width: 150px;
    border-radius:10px;
    cursor: pointer;
    padding: 10px 16px;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
}
.startMatch{
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
.saveButton
{
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}
.match-form
{
    margin-top:4%;
    padding-left:10%;
    padding-right: 10%;
}
@media screen and (max-width:600px) {
    .Submit button{
        min-width: 100px;
    }
}
@media screen and (max-width:300px) {
    .Submit {
        display: block;

    }
    .Submit button{
        margin-top:3%;
    }
}
label{
    float: left;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0;
}
label p{
     margin: 0;
    margin-left: 10%;
   
}
.card{
    padding: 2%;
    background: white;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.main-container{
    display: block;
    padding-top: 5%;
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
.heading{
    float: left;
     width: 100%;
     text-align: left;
     margin-top:2%;
     margin-bottom: 2%;
    display: block;
}
.avatar-div
{
   display: flex;
   justify-content:space-around;
}
.create-match h6{
    margin-top:10%;
}
.avatar-create {
  background: #aeaeae;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80px;
  cursor: pointer;
  border-radius: 50%;
  height: 80px;
  color: white;
  font-size: 20px;
}
</style>

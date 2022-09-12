<template>
    <div>
        <b-container >
            <b-row>
            <b-col class="align-div" cols="12" lg="6" sm="12" md="12"> 
            <b-card style="min-height: 300px;">
            <b-card-title>Register Here!!</b-card-title>
            <b-form-input class="name" v-model="username" type="text" placeholder="Name"></b-form-input>
            <span v-if="checkName" style="color: red"
            >Contains only alphabets</span
          >
            <b-form-input class="phoneNo" v-model="userPhoneNo" aria-label="mobile number" type="number" placeholder="Mobile number"></b-form-input>
            <span v-if="checkPhoneNum" style="color: red"
            >Should contain 10 digits</span
          >
            <b-form-input class="input-password" v-model="userPassword" aria-label="password" type="password" placeholder="Password"></b-form-input>
            <b-form-text id="password-help-block">
             Your password must be 8-20 characters long, contain letters and numbers
            </b-form-text>
            <b-form-input class="input-confirm-password" aria-label="password" type="password" placeholder="Confirm Password"></b-form-input>

            <b-button class="reg-btn" variant="outline-primary">Register</b-button><br>
           <router-link to="/" >Already have an account? Sign In</router-link>
          </b-card>
          </b-col>
          <b-col class="align-div" cols="12" lg="6" sm="12" md="12">
          <img class="reg-img" src="https://thumbs.dreamstime.com/b/cricket-batsman-sport-player-action-cartoon-graphiccricket-bowler-sport-player-action-cartoon-graphic-cricket-bowler-sport-player-163707646.jpg"/>
          
               </b-col> 
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.align-div.col-sm-12.col-md-12.col-lg-6.col-12 {
    padding: 0;
    margin: 0;
}
.align-div.col-sm-12.col-md-12.col-lg-4.col-12 {
    padding: 0;
    margin: 0;
}
.reg-img{
    width: 100%;
    min-height:100%;
}
.name,.phoneNo,.input-password,.input-confirm-password,.reg-btn{
    margin-top: 8%;
}
.reg-btn{
    width: 40%;
    margin-bottom: 5%;
}
</style>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    // watch
}
</script>
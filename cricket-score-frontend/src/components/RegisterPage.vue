<template>
    <div>
        <b-container class="mainContainer" >
            <b-row>
            <b-col class="align-div" cols="12" lg="6" sm="12" md="12"> 
            <b-card style="min-height: 300px;">
            <b-card-title>Register Here!!</b-card-title>
            <b-form-input class="name" v-model="registerDetails.username" type="text" placeholder="Name"></b-form-input>
            <span v-if="checkName" style="color: red"
            >Contains only alphabets</span
          >
            <b-form-input class="phoneNo" v-model="registerDetails.phoneno" aria-label="mobile number" type="number" placeholder="Mobile number"></b-form-input>
            <span v-if="checkPhoneNum" style="color: red"
            >Should contain 10 digits</span
          >
            <b-form-input class="input-password" v-model="registerDetails.password" aria-label="password" type="password" placeholder="Password"></b-form-input>
            <span v-if="checkPassword==true" style="color: red"
            >Your password must be 8-15 characters long,uppercase,lowercase and numbers</span
          >
            <b-form-text id="password-help-block">
             
            </b-form-text>
            <b-form-input class="input-confirm-password" aria-label="password" type="password" placeholder="Confirm Password"></b-form-input>

            <b-button class="reg-btn" variant="outline-primary" @click="userRegister">Register</b-button><br>
           <router-link to="/login" >Already have an account? Sign In</router-link>
          </b-card>
          </b-col>
          <b-col class="align-div" cols="12" lg="6" sm="12" md="12">
          <img class="reg-img" src="https://thumbs.dreamstime.com/b/cricket-batsman-sport-player-action-cartoon-graphiccricket-bowler-sport-player-action-cartoon-graphic-cricket-bowler-sport-player-163707646.jpg"/>
          
               </b-col> 
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { UserRegister } from '@/Service/loginService'
export default {
    data(){
        return{
          registerDetails:{
            username:null,
            phoneno:null,
            password:null
          },
          checkName:false,
          checkPhoneNum:false,
          checkPassword:false,
        }
    },
    methods:{
        userRegister(){
            if(this.registerDetails.username!=null && this.registerDetails.password!=null && this.registerDetails.phoneno!=null)
            {
            console.log("inside if")
            UserRegister({
            success:(response) => {
               console.log(response)
            },
            error:(e) =>{
               console.log(e);
            },
            payload:this.registerDetails
          })
            }
        }
    },
    watch:{
        "registerDetails.username"(){
            var nameValidate = new RegExp("^[A-Za-z ]+$");
       
            nameValidate.test(this.registerDetails.username)
            ? (this.checkName = false)
            : (this.checkName = true);
        //   }
        },
        "registerDetails.phoneno"() {
      this.registerDetails.phoneno.length == 10
        ? (this.checkPhoneNum = false)
        : (this.checkPhoneNum = true);
    },
    // "registerDetails.password"() {
    //     var passwordValidate = new RegExp("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/");
    //     passwordValidate.test(this.registerDetails.password)
    //     ?(this.checkPassword=false)
    //     :(this.checkPassword=true)
    // },
       
    }
}
</script>

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
    .mainContainer
    {
        padding-top: 5%;
    }
    </style>
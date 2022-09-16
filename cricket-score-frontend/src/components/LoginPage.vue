<template>
  <div class="loginComponent">
    <b-container>
      <b-row>
        <b-col class="align-div" cols="12" lg="6" sm="12" md="12">
          <img class="ball-image" src="https://media.istockphoto.com/videos/animated-cricket-ball-flies-quickly-against-background-of-stands-with-video-id1317608556?s=640x640" alt="ball">
        </b-col>
        <b-col class="align-div" cols="12" lg="4" sm="12" md="12">
          <b-card style=" height:100%;min-height: 300px;">
            <b-card-title>Login</b-card-title>
            <b-form-input v-model="userLogin.phoneno" class="input-mob" aria-label="mobile number" type="number" placeholder="Mobile number"></b-form-input>
            <span v-if="checkPhoneNum" style="color: red"
            >Enter valid phone number</span
          >
            <b-form-input v-model="userLogin.password" class="input-password" aria-label="password" type="password" placeholder="Password"></b-form-input>
            <b-button class="login-btn" variant="outline-primary" @click="login()">Login</b-button><br>
            <span v-show="checkLogin" style="color:red">{{message}}</span><br>
            <router-link to="/register"> Don't have an account? Sign Up</router-link>

          </b-card>

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
.loginComponent {
    /* top:40%;

    left:20%;

    position: absolute; */
  padding-top: 10%;
  padding-left:10% ;
 /* transform:translate(-50%,-50%); */
 min-height: 25%;

}
.input-mob{
  margin-top: 5%;
  margin-right: 3%;
}
.input-password{
  margin-top: 10%;
  margin-right: 3%;
}
.login-btn{
   margin-top: 8%;
   width: 40%;
   margin-bottom: 5%;
}
.ball-image{
   width: 100%;
}
.align-div.col-sm-12.col-md-12.col-lg-6.col-12 {
    padding: 0;
    margin: 0;
 
}
.align-div.col-sm-12.col-md-12.col-lg-4.col-12 {
    padding: 0;
    margin: 0;
   
}
</style>

<script>
import {UserLogin} from "@/Service/loginService"
export default {
  data(){
    return{
      userLogin:{
        phoneno: null,
        password:null,
      },
      checkPhoneNum:false,
      userPhoneNo:"",
      checkLogin:false,
      message:""
    }
  },
  methods:{
     login(){
       if(this.userLogin.phoneno!=null && this.checkPhoneNum==false && this.userLogin.password!=null)
       {
          UserLogin({
            success:({data}) => {
               console.log(data)
               localStorage.setItem("userid",data.userid);
               localStorage.setItem("username",data.username);
               if(data.userid){
                   this.$router.push({path:"/create"})
               }
            },
            error:(e) =>{
               console.log(e);
               if(e.response.status==409)
               {
                  this.checkLogin=true;
                  this.message=e.response.data;
               }
            },
            payload:this.userLogin
          })
       }
      //  else{
           
      //  }
     }
  },
  watch: {
    "userLogin.phoneno"() {
        console.log("inside watch");
        (this.userLogin.phoneno.length==10)?(this.checkPhoneNum=false):(this.checkPhoneNum=true)
    }
  }
}
</script>
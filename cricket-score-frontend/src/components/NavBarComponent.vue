<template>
  <div>
    <header>
      <div class="logo"> 
        <div>
          <b-button class="toggle" v-b-toggle.sidebar-1
            ><b-icon icon="text-center" style="background:none;"></b-icon>
          </b-button>
          <b-sidebar id="sidebar-1" title="" shadow>
            <div class="btn-style">
              <router-link  to="/match" ><button class="nav-btn">My Matches</button></router-link>
              <router-link to="/create" ><button class="nav-btn">Create Match</button></router-link>
              <router-link to="/displayTeams" ><button class="nav-btn">My Teams</button></router-link> 
            </div>
          </b-sidebar>
        </div>
        <div><img class="crick-logo" src="https://www.cricbuzz.com/images/cb_logo.svg"/></div> 
        <b-button @click="logOut()" class="logout-btn" 
          >Logout</b-button
        >
      </div>
    </header>
    <div style="margin-top: 5%">
      <router-view />
    </div>

  </div>
</template>
<script>
import logOut from "@/Mixins/validation";
export default {
  name: "NavBarComponent",
  mixins: [logOut],
};
</script>
<style scoped>
.logo {
  border: 0.5px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  /* background: #908146; */
  background: #009270;
  z-index: 1;
}
.logo a {
  margin-left: 0;
  text-decoration: none;
  color: #fbffff;
  margin-bottom: 2px;
  padding-bottom:15px ;
}
.logo a:hover {
  color: red;
  background-color: #FFBE0F;
}
.btn .b-icon.bi, .nav-link .b-icon.bi, .dropdown-toggle .b-icon.bi, .dropdown-item .b-icon.bi, .input-group-text .b-icon.bi {
    font-size: 160%;
    vertical-align: text-bottom;
}
.toggle {
  float: left;
  margin: 1% 0;
}
.logout-btn{
  float: right;
  margin: 1% 2%;
  border: none;
  border-radius: 14px;
}
button.btn.toggle.btn-secondary.collapsed {
    background: none;
    border: none;
}
.btn-style{
  display: flex;
  flex-direction: column;
  /* float: right; */
}
.crick-logo{
   height: 50px;
    width: 150px;
    float: left;
    margin-top: 0.5%;
    margin-left: 2%;
}
.nav-btn{
  border: none;
  background: none;
  margin-top:5% ;
  align-content: center;
}
</style>


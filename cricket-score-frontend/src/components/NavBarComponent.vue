<template>
  <div>
    <header>
      <div class="logo">
        <div>
          <b-button class="toggle" v-b-toggle.sidebar-1
            ><b-icon icon="text-center" style="background:none"></b-icon>
          </b-button>
          <b-sidebar id="sidebar-1" title="" shadow>
            <div class="btn-style">
              <router-link  to="/match" ><button class="nav-btn">My Matches</button></router-link>
              <router-link to="/create" ><button class="nav-btn">Create Match</button></router-link>
              <router-link to="" ><button class="nav-btn">My Teams</button></router-link> 
            </div>
          </b-sidebar>
        </div>
        <b-button @click="logOut()" style="float: right; margin: 1% 2%"
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
  background: #b90e0a;
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
.toggle {
  float: left;
  margin: 1% 0;
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
.nav-btn:hover{

}
.nav-btn{
  border: none;
  background: none;
  margin-top:5% ;
  align-content: center;
}
</style>


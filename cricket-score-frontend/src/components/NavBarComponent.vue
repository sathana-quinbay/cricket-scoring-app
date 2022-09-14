<template>
  <div>
    <header>
      <div class="logo">
        <div>
          <b-button class="toggle" v-b-toggle.sidebar-1
            ><b-icon icon="text-center"></b-icon>
          </b-button>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="list-style">
              <li>My Matches</li>
              <li>My Teams</li>
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
  padding-left: 3vw;
  text-decoration: none;
  color: #fbffff;
  padding-right: 50px;
  margin-bottom: 2px;
}
.logo a:hover {
  color: red;
}
.toggle {
  float: left;
  margin: 1% 0;
}
.list-style{
  list-style: none;
}
</style>


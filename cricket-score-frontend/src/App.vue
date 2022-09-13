<template>
  <div id="app">
     <NavBarComponent/>
   <router-view/>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
export default {
  name: 'App',
  components: {
   
    NavBarComponent
  }
}
</script>

<style>
*{
margin: 0;
font-family: nunito,sans-serif;
padding: 0;
}
body,html{
width: 100vw;
height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: whitesmoke;
}
</style>

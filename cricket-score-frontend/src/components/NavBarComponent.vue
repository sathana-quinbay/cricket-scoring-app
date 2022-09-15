<template>
 <div>
   <header>
        <div class="logo">
          <img style="float:left;margin-left:5%;margin-top:0.2%;border-radius:10px;" src="../assets/cricLogo.svg" height=50px width=50px>
          <h3 class="logo-align">Crick Masters</h3>
    </div> 

  </header>
  <router-view/>
 </div>
</template>
<script>
export default {
  name:"NavBarComponent"
}
</script>
<style scoped>
  .logo
{
    border: 0.5px solid black;
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:60px;
   background: #b90e0a;
   z-index:99999;
}
.logo a{
  margin-left:0;
  padding-left:3vw ;
    text-decoration: none;
    color: #FBFFFF;
    padding-right: 50px;
    margin-bottom: 2px;
}
.logo a:hover{
    color:red;
}
.logo-align{
  color:whitesmoke;
  float:left;
  padding-top:1%;
  padding-left:7px;
}
</style>


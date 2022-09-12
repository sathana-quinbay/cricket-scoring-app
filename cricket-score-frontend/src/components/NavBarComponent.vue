<template>
  <header>
        <div class="logo">
        
    </div> 

  </header>
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

</style>


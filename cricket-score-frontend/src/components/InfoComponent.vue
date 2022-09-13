<template>
  <div>
    <div class="avatar-align">
        <div class="border-info">
     <b-avatar style="cursor:pointer;margin-right:20%;" variant="info" src="https://cdn.vectorstock.com/i/1000x1000/73/59/angry-bull-logo-vector-41117359.webp" size="5rem"></b-avatar>
     <b-avatar style="cursor:pointer;" variant="info" src="https://cdn.vectorstock.com/i/1000x1000/73/59/angry-bull-logo-vector-41117359.webp" size="5rem"></b-avatar>
     <b-table style="margin-top:2%" stacked :items="items"></b-table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
   data()
   {
    return{
        items:[{Organizer:'Sharon','Match Title':'Open Match',Format:'T10',Playing:'11 per side',Overs:10,Venue:'Coimbatore'
        ,'Date & Time':'13 Sep 2022 12:00','Toss Won By':'Bulls','Decided To':'Bat',Scorer:'Sharon','Match ID':'nke12ed'}]
    }
   }
}
</script>

<style scoped>
.avatar-align{
    padding-top:50px;
}
.border-info{
    border:0.1px solid black;
    padding-top:1%;
    width:70%;
    margin-left:15%;
    background:white;
    border-radius:10px;
}
</style>
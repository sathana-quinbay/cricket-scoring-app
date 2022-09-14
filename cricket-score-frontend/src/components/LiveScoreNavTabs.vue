<template>
<div>
  <div class="tabs">
  <b-card title="Card Title" no-body>
    <b-card-header v-if="tab1" header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Scoring</b-nav-item>
        <b-nav-item @click="tab2c()">Scorecard</b-nav-item>
        <b-nav-item @click="tab3c()">Stats</b-nav-item>
      </b-nav></b-card-header>
       <b-card-header v-if="tab2" header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item  @click="tab1c()">Scoring</b-nav-item>
        <b-nav-item active>Scorecard</b-nav-item>
        <b-nav-item @click="tab3c()">Stats</b-nav-item>
      </b-nav></b-card-header>
      <b-card-header v-if="tab3" header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item @click="tab1c()">Scoring</b-nav-item>
        <b-nav-item @click="tab2c()">Scorecard</b-nav-item>
        <b-nav-item active>Stats</b-nav-item>
      </b-nav></b-card-header>
    
  </b-card>
</div>
</div>
</template>

<script>
export default {
   data()
   {
    return{
        tab1:true,
        tab2:false,
        tab3:false,
    }
   },
   methods:
   {
    tab1c()
    {
        this.tab1=true,
        this.tab2=false,
        this.tab3=false
    },
    tab2c()
    {
        this.tab1=false,
        this.tab2=true,
        this.tab3=false
    },
    tab3c()
    { 
        this.tab1=false,
        this.tab2=false,
        this.tab3=true
    }
   }
}
</script>

<style>
.nav-link.active{
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}
.tabs{
    text-decoration:none;
}
</style>
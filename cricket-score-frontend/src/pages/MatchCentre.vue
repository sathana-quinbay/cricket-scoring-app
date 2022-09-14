<template>
    <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item to="/matchcentre/summary" exact exact-active-class="active">Summary</b-nav-item>
        <b-nav-item to="/matchcentre/scorecard" exact exact-active-class="active">Scorecard</b-nav-item>
        <b-nav-item to="/matchcentre/stats" exact exact-active-class="active">Stats</b-nav-item>
        <b-nav-item to="/matchcentre/balls" exact exact-active-class="active">Balls</b-nav-item>
        <b-nav-item to="/matchcentre/info" exact exact-active-class="active">Info</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <router-view></router-view>
  
    </b-card-body>
  </b-card>
</template>
<style>
    li.nav-item {
    width: 20%;
}
a.nav-link {
    color: black;
}
    .card-header-tabs {
    display: flex;
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
    justify-content: space-between;
}
@media screen and (max-width: 600px){
    a.nav-link{
        font-size: 8px;
    }
}
</style>
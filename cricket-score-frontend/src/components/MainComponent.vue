<template>
  <div class="hello">
  <h3>Welcome Sharon</h3><br><br>
  <div class="align-issue">
  <div class="cric-align">
  <div class="slider">
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="4000"
      fade
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        caption="To create your Own Team"
      > <template #img>
          <b-img
            src="https://media.gettyimages.com/photos/dhonis-kit-in-india-dressing-rooms-ahead-of-the-group-stage-match-of-picture-id1156218412?k=20&m=1156218412&s=612x612&w=0&h=e_Lk4yecrNWmNnASwhYrrqu2n6y1nLCSFy9VrRubMuM="
            alt="image slot" style="height:350px;width:1000px;" fluid-grow
          ></b-img>
        </template> <b-button variant="danger">Click Here</b-button></b-carousel-slide>


      <b-carousel-slide
      caption="To create a Match"
      >
      <template #img>
          <b-img
            src="https://media.gettyimages.com/photos/cricket-batsman-hits-a-six-picture-id181094694?k=20&m=181094694&s=612x612&w=0&h=uq_TNi3rKhnkMtCu71dJhfjBmBRP1PUy2ZYkfT3TLBI="
            alt="image slot" style="height:350px;width:1000px;" fluid-grow
          ></b-img>
        </template>
        <b-button variant="danger">Click here</b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
  <div class="create-a-match">
  <b-card
    title="Create Match"
    img-src="https://media.gettyimages.com/photos/cricket-the-game-moment-picture-id642535304?k=20&m=642535304&s=612x612&w=0&h=vbKAPGdcZranRTlzrW65242u0l3iBk8Ji-Ik0R4IURA="
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <createMatchModal></createMatchModal>
  </b-card>
    </div>
    </div>
  <div class="arrange-stats">
  <div class="user-stats">
   <b-card img-src="https://media.istockphoto.com/photos/cricket-cricket-stadium-picture-id641189676?k=20&m=641189676&s=612x612&w=0&h=OaGJJOoFpF4vsXCCL4wzEPJ4Sz2l5i43C0598uJ8hDg=" img-alt="Card image" img-top>
   <div class="stats-flex">
        <b-card-text>
           <h4>34</h4><br>Matches
        </b-card-text>&emsp;&emsp;&emsp;
        <b-card-text>
           <h4>443</h4><br>Runs
        </b-card-text>&emsp;&emsp;&emsp;
        <b-card-text>
           <h4>42</h4><br>Wickets
        </b-card-text>&emsp;&emsp;&emsp;
        </div>
      </b-card>

</div>
 <div class="my-teams">
  <b-card
    title="My Teams"
    tag="article"
    class="mb-2"
  >
  <div class="align-myTeams" v-for="i in teams" :key="i">
    <router-link to=''><b-avatar style="cursor:pointer;" variant="info" :src="i.img"></b-avatar></router-link><br>{{i.name}}&nbsp;
    </div>
     <router-link to=''><b-avatar style="border:0.5px solid black;cursor:pointer" variant="info" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"></b-avatar></router-link><br>Add&nbsp;
  </b-card>
</div>
  </div>
</div>

  <!-- <div class="create-a-match">
       <router-link to='/'>
          <b-button variant="light">Create match</b-button>
       </router-link>
    </div>
  <div class="match-records"> -->
  </div>
</template>

<script>
import createMatchModal from '../components/CreateMatchModal.vue';
import {mapGetters} from 'vuex';
export default {
  name:"MainComponent",
    data() {
      return {
        slide: 0,
        sliding: null,
        show:true,
        teams:this.$store.state.MyTeams.teams
      }
    },
    mounted()
    {
     console.log(this.teams)
    },
    components:
    {
      createMatchModal
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      showM()
      {
         this.show=!this.show;
         console.log(this.show);
      }
    },
    computed:
    {
      ...mapGetters({
          teams:'getTeams'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  float:left;
  margin-left:5vw;
}
.create-a-match{
  padding:10px;
  float: left;
  /* display: flex; */
  width:62vw;
   margin-left:1vw;
   padding-left:5%;
   margin-top:48vh;
   cursor:pointer;
}
.slider{
  float:left;
  width:60vw;
  height:3vh;
  border-radius:10px !important;
  padding-left: 5% ;
}
.user-stats{
  height:20vh !important;
  width:30vw;
  float:right;

}
.my-teams{
  padding-top:4%;
  float:right;
margin-top:200px;
  width:30vw;
  height:30vh;

  }
  .cric-align{
    display:list-item;
  }
  .stats-flex{
    display:flex;
    padding-left:20%;
    font-size: 1vw;
  }
  .align-issue
  {
    display: table;
  }
  .arrange-stats
  {
    display: table;
      padding-right: 5% ;
      margin-top: -2%;
  }
  .align-myTeams{
    display: inline-grid;
  }
</style>

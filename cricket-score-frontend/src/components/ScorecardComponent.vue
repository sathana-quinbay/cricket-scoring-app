<template>
  <div>
    <div v-if="!items.length" class="match-not-started">
      <center>Match Not Started Yet.</center>
    </div>
    <div v-if="items.length">
      <b-card title="Card Title" no-body>
        <b-card-header v-show="teamA" header-tag="nav">
          <b-nav card-header pills>
            <b-nav-item style="width: 50%; font-weight: 600" active
              >Team A</b-nav-item
            >
            <b-nav-item @click="teamBc()" style="width: 48%; font-weight: 600"
              >Team B</b-nav-item
            >
          </b-nav>
        </b-card-header>
        <b-card-header v-show="teamB" header-tag="nav">
          <b-nav card-header pills>
            <b-nav-item @click="teamAc()" style="width: 48%; font-weight: 600"
              >Team A</b-nav-item
            >
            <b-nav-item style="width: 50%; font-weight: 600" active
              >Team B</b-nav-item
            >
          </b-nav>
        </b-card-header>
        <b-table class="score-table" :items="items" :fields="fields" responsive>
          <!-- <template #cell(SR)>
           <p id="Sr"></p>
        </template>     -->
        </b-table>
        <div class="align-outside-comp">
          <div class="align-score">
            <div style="display: flex">
              <b style="padding-right: 26%">Extras</b>{{ extras }}
            </div>
            <div style="display: flex; color: #319da0">
              <b style="padding-right: 30%">Total</b>&nbsp;<b
                >{{ total }}/{{ wickets }}</b
              >
            </div>
          </div>
          <div class="align-Overs">
            <div style="display: flex">
              <b style="padding-right: 49%">Overs</b>{{ Overs }}
            </div>
            <div style="display: flex">
              <b style="padding-right: 20%"
                ><div style="display: flex">
                  <div>Run</div>
                  &nbsp;
                  <div>Rate</div>
                </div></b
              >{{ RunRate }}
            </div>
          </div>
        </div>
        <div>
          <b-table
            class="score-table"
            :items="bowlers"
            :fields="bowlerHeadings"
            responsive
          >
          </b-table>
        </div>
        <div v-if="items.length > 2" class="fall-align">
          <b>Fall of Wickets</b>
          <div
            class="fall-of-wickets"
            v-for="(i, index) in fallOfWickets"
            :key="index"
          >
            <div style="float: left; margin-left: 5%; display: flex">
              <div style="padding-right: 60%">
                <b>{{ index + 1 }}.</b>
              </div>
              <b>{{ i.name }}</b>
            </div>
            <div style="float: right; margin-right: 5%">
              {{ runs }}({{ wicketBall }})
            </div>
            <br />
            <hr />
          </div>
        </div>
        <div class="partnership">
          <center><b>Partnership</b></center>
          <br />
          <div style="float: left; margin-left: 5%">
            <b>{{ items[0].Batsman }}</b
            ><br /><span>{{ items[0].R }}({{ items[0].B }})</span>
          </div>
          <b-avatar
            style="
              border: 0.2px solid #319da0;
              font-weight: 500;
              color: #319da0;
            "
            variant="light"
            :text="items[0].R + items[1].R"
          ></b-avatar>
          <div style="float: right; margin-right: 5%">
            <b>{{ items[1].Batsman }}</b
            ><br /><span>{{ items[1].R }}({{ items[1].B }})</span>
          </div>
          <br /><b
            ><center style="font-size: 12px; color: #319da0">
              {{ items[0].B + items[1].B }} Balls
            </center></b
          >
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamA: true,
      teamB: false,
      fields: ["Batsman", "R", "B", "4s", "6s", "SR"],
      items: [
        { Batsman: "Dhoni", R: 21, B: 13, "4s": 4, "6s": 4, SR: 100 },
        { Batsman: "kohli", R: 13, B: 13, "4s": 3, "6s": 4, SR: 100 },
        { Batsman: "Yuvraj", R: 13, B: 13, "4s": 6, "6s": 2, SR: 100 },
      ],
      bowlerheadings: [
        "Bowler",
        "O",
        "M",
        "R",
        "W",
        "Eco",
        "0s",
        "4s",
        "6s",
        "Wd",
        "NB",
      ],
      bowlers: [
        {
          Bowler: "Broad",
          O: 2.1,
          M: 0,
          R: 4,
          W: 4,
          Eco: 100.0,
          "0s": 1,
          "4s": 2,
          "6s": 4,
          Wd: 2,
          NB: 3,
        },
        {
          Bowler: "Bumrah",
          O: 2,
          M: 0,
          R: 3,
          W: 4,
          Eco: 75.0,
          "0s": 1,
          "4s": 2,
          "6s": 4,
          Wd: 2,
          NB: 1,
        },
        {
          Bowler: "Bhuvaneshwar",
          O: 1,
          M: 0,
          R: 6,
          W: 2,
          Eco: 100.25,
          "0s": 1,
          "4s": 2,
          "6s": 4,
          Wd: 2,
          NB: 1,
        },
      ],
      extras: 0,
      total: 123,
      wickets: 3,
      Overs: 0.2,
      RunRate: 8.0,
      fallOfWickets: [{ name: "kishore" }],
      runs: 25,
      wicketBall: 1.3,
    };
  },
  methods: {
    teamAc() {
      this.teamA = true;
      this.teamB = false;
    },
    teamBc() {
      this.teamA = false;
      this.teamB = true;
    },
  },
};
</script>

<style scoped>
.score-table {
  margin-top: 2%;
  width: 90%;
  margin-left: 5%;
  /* border:0.2px solid black; */
  /* border-radius:15px; */
}
.align-score {
  float: left;
  margin-left: 10%;
  text-align: left;
}
.align-Overs {
  float: right;
  margin-right: 10%;
  text-align: left;
}
.align-outside-comp {
  width: 70%;
  margin-left: 15%;
  border: 0.2px solid black;
  background: whitesmoke;
  border-radius: 10px;
}
.fall-of-wickets {
  width: 70%;
  margin-left: 15%;
}
a {
  color: black;
  text-decoration: none;
  background-color: transparent;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #ff9900;
  border-radius: 13px;
}
.fall-align {
  background: whitesmoke;
  width: 60%;
  margin-left: 20%;
  border: 0.2px solid black;
  border-radius: 10px;
}
.partnership {
  margin-top: 2%;
  width: 80%;
  border: 0.1px solid black;
  margin-left: 10%;
  border-radius: 10px;
  padding: 2%;
  background: whitesmoke;
}
div th {
  color: #319da0;
}
th {
  color: #319da0 !important;
}
.match-not-started {
  margin-top: 10%;
}
</style>

<template>
  <div style="margin-top:10%">
    <img
      src="../assets/wheel.jpg"
      width="300"
      height="300"
      usemap="#image-map"
      alt="wagon"
      id="image"
       @click="noteCoords($event)"
      srcset=""
    />

    <!-- <map name="image-map">
      <area
       
        target=""
        alt=""
        title="1"
        coords="123,123,4,122,8,99,16,72,29,51,38,38"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title="2"
        coords="122,7,123,122,41,36,61,19,89,8,109,2"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title="3"
        coords="207,39,123,122,124,3,148,5,166,13,192,25"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title="4"
        coords="122,122,238,122,236,92,226,66,215,47,207,39"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title="5"
        coords="123,123,205,205,230,171,239,138,241,120"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title="6"
        coords="124,240,123,119,205,208,182,224,150,238"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        coords="122,124,41,203,63,226,96,238,121,240"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        coords="124,120,4,120,10,152,17,174,27,192,39,204"
        shape="poly"
      />
    </map> -->
    <div>
      <canvas ref="canvas" id="drawing-pad" width="300" height="300" />
      <button @click="drawCanva">draw</button>
    </div>
  </div>
</template>
<style scoped>
#drawing-pad {
  height: 250px;
  width: 250px;
  border: 1px solid gray;
  background-repeat: no-repeat;
  background-image: url("@/assets/wheel.jpg");
  background-size: contain;
}
#image{
    cursor: url('https://png.pngtree.com/png-vector/20211006/ourmid/pngtree-cricket-ball-png-image_3971675.png'),auto;
}
</style>
<script>
export default {
  mounted() {},
  data() {
    return {
      coords:{
        runs:[2,3,4,5,6,1,2,3,4,5,6],
        x:[],
        y:[]
      },
      color:['yellow','yellow','yellow','red','green','blue']
    };
  },
  methods: {
    noteCoords(e) {
      var img = document.getElementById("image");
      var rect = img.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      this.coords.x.push(x);
      this.coords.y.push(y);
    },
    drawCanva()
    {
        console.log(this.coords.x)
      var c = document.getElementById("drawing-pad");
      var ctx = c.getContext("2d");
      this.vueCanvas = ctx;
     
      for(var i=0;i<this.coords.x.length;i++)
      {
         ctx.beginPath();
         ctx.moveTo(150, 150);
         ctx.lineTo(this.coords.x[i], this.coords.y[i]);
         console.log(this.color[this.coords.runs[i]])
         ctx.strokeStyle=this.color[this.coords.runs[i]]
         ctx.stroke();
      }
     
     
    }
  },
};
</script>


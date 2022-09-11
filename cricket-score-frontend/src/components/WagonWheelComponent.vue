<template>
  <div>
    <img
      src="../assets/wagonwheel3.png"
      usemap="#image-map"
      alt="wagon"
      srcset=""
    />

    <map name="image-map">
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        
        coords="123,123,4,122,8,99,16,72,29,51,38,38"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        
        coords="122,7,123,122,41,36,61,19,89,8,109,2"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        
        coords="207,39,123,122,124,3,148,5,166,13,192,25"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        
        coords="122,122,238,122,236,92,226,66,215,47,207,39"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        
        coords="123,123,205,205,230,171,239,138,241,120"
        shape="poly"
      />
      <area
        @click="noteCoords($event)"
        target=""
        alt=""
        title=""
        
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
    </map>
    <div>
        <div style="background: url('https://analyzesmart.files.wordpress.com/2015/03/wagonwheel3.png'); width:550px; height:513px; position: relative; background-repeat:no-repeat">
    <img src="http://i.imgur.com/Yip7l.png" style="position: relative; top:264px; left:258px; width:7px; height:7px;">
</div>

    </div>
  </div>
</template>
<script>
export default {
  methods: {
    noteCoords(coords) {
      console.log(coords);
    },
  },
};
</script>

<template>
    <div>
    <b-modal
    size="md"
    centered
    hide-footer
    scrollable
    v-model="show"
    no-close-on-backdrop
    header-bg-variant="danger"
    header-text-variant="light"
    body-text-variant="bodyTextVariant"
    footer-bg-variant="footerBgVariant"
    footer-text-variant="footerTextVariant"
  >
  <template #modal-header>
        <h5>Players List </h5>
        <button @click="closeModal" class="closeButton">
          <b-icon-x-lg style="color: white" />
        </button>
      </template>
       
    <div v-for="(i,index) in item.playerList" :key="index">
         {{index+1}}     {{i.playername}}
    </div>
    </b-modal>
</div>
</template>
<style>
.closeButton {
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
<script>


export default {
    data(){
       return{
           show:true
       }
    },
    props:{
        item: {
            type:Object
        } 
    },
    mounted(){
        console.log(this.item.playerList)
    },
    methods:{
        closeModal(){
           this.$emit("closeModal");
           this.show = false
        }
    }
}
</script>
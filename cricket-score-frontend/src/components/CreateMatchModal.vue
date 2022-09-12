<template>
  <div>
    <b-button @click="show=true" variant="primary">Show Modal</b-button>

    <b-modal
     centered
      v-model="show"
      title="Create match"  
      header-bg-variant="danger"
      header-text-variant="light"
      body-bg-variant="light"
      body-text-variant="bodyTextVariant"
      footer-bg-variant="footerBgVariant"
      footer-text-variant="footerTextVariant">
      <section>
        <div style="display:flex; padding-right:30px;"><center><div>Select Team</div><div>Select Team</div></center></div>
        <center>   
        <b-avatar style="margin-right:120px;border:0.5px solid black;cursor:pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" size=5rem></b-avatar>
        <b-avatar style="border:0.5px solid black;cursor:pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" size=5rem></b-avatar>
        </center>
        </section>
         <template #modal-footer>
        <div class="w-100">
          <p class="float-left"></p>
          <center>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
          </center>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
    data() {
      return {
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark'
      }
    },
    props:
    {
        ShowModal: {
      type: Object,
      default: () => {
        return {};
      },
    },
    }
}
</script>

<style>

</style>
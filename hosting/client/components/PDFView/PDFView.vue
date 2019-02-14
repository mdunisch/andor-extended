<template>
  <el-dialog
    v-if="dialogVisible"
    :visible="true"
    :fullscreen="true"
    :before-close="handleClose"
  >
    <div v-for="card in cards" :key="card.id">
      <CardPreview :card-data="card" :print="true" />
    </div>
    <span slot="title" class="dialog-footer">
      <el-button v-loading="loading" icon="el-icon-download" @click="download">
        Download PDF
      </el-button>
    </span>
  </el-dialog>
</template>

<script>

  import CardPreview from './../CardPreview/CardPreview';

  export default {
    components: { CardPreview },
     data() {
      return {
        loading: false
      }
    },
    computed: {
      dialogVisible() {
        return this.$store.state.showPdf;
      },
      cards(){
          return this.$store.state.cards;
      }
    },
    methods: {
      handleClose(){
        this.$store.commit('showPdf', false);
      },
      download(){

        this.loading = true;

        // 1. Get PNGs of all Cards in Modal
        // 2. For in array of pngs => Create Page 2 Cards per Page
        // 2. Download pdf

        window.setTimeout(() => {
          //console.log('starting download + generating pdf');
          this.loading = false;
        }, 2000);
      }
    }
  }
</script>

<style scoped>
</style>

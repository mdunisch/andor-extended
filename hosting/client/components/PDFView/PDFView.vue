<template>
  <el-dialog v-if="dialogVisible" :visible="true" :fullscreen="true" :before-close="handleClose">
    <div v-for="(card, index) in cards" :key="card.id" class="cards2print">
      <CardPreview :card-data="card" :print="true" v-bind:class="{pageBreak: (index % 2 === 0)}"/>
    </div>
    <span slot="title" class="dialog-footer">
      <el-button v-loading="loading" icon="el-icon-printer" @click="print">Drucken</el-button>
    </span>
  </el-dialog>
</template>

<script>

  import CardPreview from './../CardPreview/CardPreview';
  import html2canvas from 'html2canvas';

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
          return this.$store.getters.getCards;
      }
    },
    methods: {
      handleClose(){
        this.$store.commit('showPdf', false);
      },
      print(){
        window.print();
      }
    }
  }
</script>

<style scoped>
.pageBreak {
  page-break-before: always;
  margin-top: 20px!important;
}
</style>

<style>
@media print {
  .el-dialog__header, .v-modal, footer, .el-container.fullHeight > .el-container {
    display: none!important;
  }
  .el-dialog__wrapper {
    position: relative;
    overflow: visible;
  }
  .el-popup-parent--hidden {
    overflow: visible;
  }
  .el-dialog {
    box-shadow: none;
  }

  @page {
    size: A4 portrait;
    margin: 0mm;
  }

  body {
    zoom: 100%;
  }
}
</style>

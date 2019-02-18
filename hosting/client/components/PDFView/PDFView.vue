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
  import JsPDF from 'jsPDF';
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
          return this.$store.state.cards;
      }
    },
    methods: {
      handleClose(){
        this.$store.commit('showPdf', false);
      },
      download(){

        const pdf = new JsPDF();
        this.loading = true;

        // 1. Get PNGs of all Cards in Modal
        // 2. For in array of pngs => Create Page 2 Cards per Page
        // 2. Download pdf

        html2canvas(document.querySelector(".card.print")).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', 10, 10);
          pdf.save('sample-file.pdf');

          this.loading = false;
        });
      }
    }
  }
</script>

<style scoped>
</style>

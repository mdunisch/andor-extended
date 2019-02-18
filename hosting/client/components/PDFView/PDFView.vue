<template>
  <el-dialog
    v-if="dialogVisible"
    :visible="true"
    :fullscreen="true"
    :before-close="handleClose"
  >
    <div v-for="card in cards" :key="card.id" class="cards2print">
      <CardPreview :card-data="card" :print="true" style="margin-bottom: 20px" />
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
  import JsPDF from 'jspdf';
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
        const pdf = new JsPDF('p', 'mm', 'a4', true);
        this.loading = true;

        const cards = [...document.querySelectorAll('.cards2print .card.print')];
        const allStrongTags = document.querySelectorAll('.cards2print strong');

        // Fix for custom font bold rendering on Chrome
        if(navigator.userAgent.indexOf('Chrome')) {
          allStrongTags.forEach(strong => strong.setAttribute('style', 'top: -5px; position: relative;'));
        }
      

        let i = 0;
        Promise.all(cards.map(card => html2canvas(card, {}))).then(results => {
          results.forEach(canvas => {
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10 + i, 190, 140, '', 'FAST');
            i = i + 140;
          });

          if(navigator.userAgent.indexOf('Chrome')) {
            allStrongTags.forEach(el => el.setAttribute("style", ""));
          }

          pdf.save('sample-file.pdf');
          this.loading = false;
        });
      }
    }
  }
</script>

<style scoped>
</style>

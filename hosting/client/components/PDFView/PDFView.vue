<template>
  <el-dialog
    v-if="dialogVisible"
    title="Druckansicht"
    :visible="true"
    :fullscreen="true"
    :before-close="handleClose"
  >
    <div v-for="card in cards" :key="card.id">
      <CardPreview :card-data="card" :print="true" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button>
        Download PDF
      </el-button>
    </span>
  </el-dialog>
</template>

<script>

  import CardPreview from './../CardPreview/CardPreview';

  export default {
    components: { CardPreview },
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
        }
    }
  }
</script>

<style scoped>
</style>

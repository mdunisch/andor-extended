<template>
  <el-dialog v-if="dialogVisible" :visible="true" :fullscreen="true" :before-close="handleClose">
    <div v-for="(card, index) in cards" :key="card.id" class="cards2print">
      <CardPreview
        :card-data="card"
        :print="true"
        :name="name"
        :class="{pageBreak: (index % 2 === 0)}"
      />
    </div>
    <span slot="title" class="dialog-footer">
      <el-button v-loading="loading" icon="el-icon-printer" @click="print">Drucken</el-button>&#x2190; Im Drucken-Menü einfach "Speichern als PDF" auswählen
    </span>
  </el-dialog>
</template>

<script>
import CardPreview from "andor-legendenkarte";

export default {
  components: { CardPreview },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    dialogVisible() {
      return this.$store.state.showPdf;
    },
    cards() {
      return this.$store.getters.getCards;
    },
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    handleClose() {
      this.$store.commit("showPdf", false);
    },
    print() {
      if (!navigator.userAgent.includes("Chrome")) {
        alert("Bitte benutzten Sie den neusten Chrome zum drucken als PDF");
      }
      window.print();
    }
  }
};
</script>

<style scoped>
.pageBreak {
  page-break-before: always;
  margin-top: 20px !important;
}
</style>

<style>
@media print {
  .el-dialog__header,
  .v-modal,
  footer,
  .el-container.fullHeight > .el-container {
    display: none !important;
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

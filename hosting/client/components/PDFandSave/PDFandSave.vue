<template>
  <el-row style="width: 100%">
    <el-col :span="12">
      <el-button type="primary" icon="el-icon-printer" @click="pdf">Druckversion</el-button>
    </el-col>
    <el-col :span="12" style="text-align: right;">
      <el-button type="primary" icon="el-icon-document" @click="saveState">Speichern</el-button>
      <div class="el-button el-button--primary" style="position: relative;">
        <i class="el-icon-upload2"></i>
        <input type="file" accept=".json" @change="loadState">
        Laden
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { saveAs } from "file-saver";

export default {
  methods: {
    saveState() {
      const blob = new Blob([JSON.stringify(this.$store.state)], {
        type: "application/json"
      });
      saveAs(blob, "andor.json");
    },
    loadState(e) {
      try {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = e => {
          const newState = JSON.parse(e.target.result);
          if (!this.validateJson(newState)) {
            return window.alert("Fehler beim laden der Datei");
          }
          this.$store.commit("loadState", newState);
        };
        // Start reading file
        reader.readAsText(file);
      } catch (e) {
        window.alert("Fehler beim laden der Datei");
      }
    },
    // Simple validation of Loading JSON
    validateJson(object) {
      if (
        !object.name ||
        !object.newCardOpenIndex ||
        !Array.isArray(object.cards)
      ) {
        return false;
      }
      return true;
    },
    pdf() {
      this.$store.commit("showPdf", true);
    }
  }
};
</script>

<style scoped>
input[type="file"] {
  position: absolute;
  left: 0;
  opacity: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>


<template>
    <el-row style="width: 100%">
        <el-col :span="12">
            <el-button type="primary" icon="el-icon-download">Download als PDF</el-button>
        </el-col>
        <el-col :span="12" style="text-align: right;">
            <el-button type="primary" icon="el-icon-document" @click="saveState">Speichern</el-button>
        </el-col>
    </el-row>
</template>

<script>
    
  import { saveAs } from 'file-saver';

  export default {
      methods: {
          saveState() {
              const blob = new Blob([JSON.stringify(this.$store.state)], {type: "application/json"});
              saveAs(blob);
          }
      }
  }
</script>

<style scoped>
</style>


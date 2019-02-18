<template>
  <el-container class="fullHeight">
    <el-container>
      <el-aside width="50%">
        <el-container class="fullHeight">
          <el-main>
            <NewCard />
          </el-main>
        </el-container>
      </el-aside>
      <el-main class="main">
        <el-container class="fullHeight">
          <el-header>
            <BasicInfos />
          </el-header>
          <el-main>
            <el-row style="width: 100%">
              <el-col :span="12">
                <h5 style="margin-top: 0">Deine Karten</h5>
              </el-col>
              <el-col :span="12" style="text-align: right;">
                <el-button
                  type="info"
                  size="mini"
                  icon="el-icon-circle-plus"
                  @click="handleNewCard"
                >
                  Neu
                </el-button>
              </el-col>
            </el-row>
            <CardsOverview />
          </el-main>
          <el-footer class="footer">
            <PDFandSave />
          </el-footer>
        </el-container>
      </el-main>
    </el-container>
    <el-footer class="footer">
      <small>Andor/Die Legenden von Antor ist eine Marke der Franckh-Kosmos Verlags-GmbH &amp; Co. KG, durch die die vorliegende Webseite weder gesponsert noch autorisiert oder unterstützt wird.</small>
      <el-button size="mini" @click="openGoogleForms">Kontakt / Feedback</el-button>
    </el-footer>
    <PDFView />
  </el-container>
</template>

<script>
import BasicInfos from "./BasicInfos/BasicInfos";
import PDFandSave from "./PDFandSave/PDFandSave";
import CardsOverview from "./CardsOverview/CardsOverview";
import NewCard from "./NewCard/NewCard.vue";
import PDFView from "./PDFView/PDFView.vue";

// Code Splitting for PDF-View
//const PDFView = () => import("./PDFView/PDFView.vue");

export default {
  components: { BasicInfos, PDFandSave, CardsOverview, NewCard, PDFView },
  methods: {
    openGoogleForms() {
      window.open("https://goo.gl/forms/834NVBDKokUASJeq1");
    },
    handleNewCard() {
      this.$store.commit("addCard");
    }
  }
};
</script>

<style scoped>
.fullHeight {
  height: 100%;
}
.main {
  background-color: #f8f8f8;
}

.footer {
  display: flex;
  align-items: center;
}
.footer small {
  font-size: 12px;
  margin-right: 20px;
}
</style>
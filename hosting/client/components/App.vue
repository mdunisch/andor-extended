<template>
    <el-container class="fullHeight">
        <el-container>
            <el-aside width="50%">Aside</el-aside>
            <el-main class="main">
                <el-container class="fullHeight">
                    <el-header>
                        <BasicInfos></BasicInfos>
                    </el-header>
                    <el-main>
                        <CardsOverview></CardsOverview>
                    </el-main>
                    <el-footer>
                        <PDFandSave></PDFandSave>
                    </el-footer>
                </el-container>
            </el-main>
        </el-container>
        <el-footer class="footer">
            <small>Andor/Die Legenden von Antor ist eine Marke der Franckh-Kosmos Verlags-GmbH & Co. KG, durch die die vorliegende Webseite weder gesponsert noch autorisiert oder unterstützt wird.</small>
            <el-button size="mini">Kontakt / Feedback</el-button>
        </el-footer>
    </el-container>
</template>
<script>

    import BasicInfos from './BasicInfos/BasicInfos';
    import PDFandSave from './PDFandSave/PDFandSave';
    import CardsOverview from './CardsOverview/CardsOverview';

    export default {
      components: { BasicInfos, PDFandSave, CardsOverview },
      created () {
        console.log(this.$store.state);
      }
    }
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
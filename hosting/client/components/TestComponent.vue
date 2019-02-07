<template>
    <div class="container">
        <el-container class="container">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main class="main">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          component: 'Foobar'
        }
      },
      created () {
        console.log(this.$store.state.count);
      }
    }
</script>

<style scoped>
    .container {
        height: 100%;
    }
    .main {
        background-color: #dd6161;
    }
</style>
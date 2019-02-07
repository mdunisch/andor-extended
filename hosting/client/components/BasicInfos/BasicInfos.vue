<template>
    <el-form label-width="120px">
        <el-form-item label="Legenden-Name">
            <el-input placeholder="Name der Legende" v-model="name"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    computed: {
      name: {
        get () {
          return this.$store.state.name
        },
        set (value) {
          this.$store.commit('setName', value);
        }
      }
    }
  }
</script>

<style scoped>
</style>
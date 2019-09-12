<template>
  <el-form>
    <el-form-item label="Legenden-Name" style="font-weight: bold">
      <el-input v-model="name" placeholder="Name der Legende" />
    </el-form-item>
    <el-form-item label="Legenden-Nummer" style="font-weight: bold">
      <el-input
        v-model="number"
        placeholder="Nummer der Legende"
        :maxlength="1"
      />
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      }
    },
    number: {
      get() {
        return this.$store.state.number;
      },
      set(value) {
        this.$store.commit("setNumber", value);
      }
    }
  }
};
</script>

<style scoped>
</style>
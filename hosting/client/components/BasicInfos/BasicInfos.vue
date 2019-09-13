<template>
  <el-form>
    <el-form-item label="Legenden-Name" style="font-weight: bold">
      <el-input v-model="name" placeholder="Name der Legende" />
    </el-form-item>
    <el-form-item label="Legenden-Typ" style="font-weight: bold">
      <el-radio-group v-model="type">
        <el-radio label="single">Einzeln</el-radio>
        <el-radio label="series">Mehrteilig</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="(type === 'series')" label="Serien-Name">
      <el-input
        v-model="series"
        placeholder="Name der Legendenserie"
      />
    </el-form-item>
    <el-form-item v-if="(type === 'series')" label="Legenden-Nummer">
      <el-input
        v-model="number"
        placeholder="Nummer der Legende innerhalb der Serie"
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
    type: {
      get() {
        return this.$store.state.type;
      },
      set(value) {
        this.$store.commit("setType", value);
      }
    },
    series: {
      get() {
        return this.$store.state.series;
      },
      set(value) {
        this.$store.commit("setSeries", value);
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

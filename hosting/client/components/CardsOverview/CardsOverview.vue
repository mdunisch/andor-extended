<template>
  <el-table :data="cards" empty-text="Noch keine Karten angelegt" style="width: 100%">
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <div class="text-right">
          <el-button
            size="mini"
            type="warning"
            icon="el-icon-edit"
            @click="handleEdit(scope.row.id)"
          ></el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.row.id)"
          />
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  computed: {
    cards() {
      return this.$store.getters.getCards;
    }
  },
  methods: {
    handleDelete(id) {
      if (window.confirm("Willst du diese Karte wirklich löschen?")) {
        this.$store.commit("deleteCard", id);
      }
    },
    handleEdit(id) {
      this.$store.commit("editCard", id);
    }
  }
};
</script>

<style scoped>
.text-right {
  text-align: right;
}
</style>

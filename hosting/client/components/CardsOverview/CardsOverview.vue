 <template>
     <el-table
      :data="cards"
      empty-text="Noch keine Karten angelegt"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column>
          <template slot-scope="scope">
            <div style="text-align: right">
              <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index)"></el-button>
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
        handleDelete(index) {
          if(window.confirm('Willst du diese Karte wirklich löschen?')){
            this.$store.commit('deleteCard', index);
          }
        },
    }
  }
</script>

<style scoped>
</style>

 <template>
     <el-table
      :data="cards"
      empty-text="Noch keine Karten angelegt"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
      <el-table-column
        label="Sortierung">
          <template slot-scope="scope">
            <el-button
            size="mini"
            icon="el-icon-arrow-down"
            @click="handleSorting('down', scope.$index)"
            v-if="scope.$index !== (cards.length - 1)"></el-button>
            <el-button
            size="mini"
            icon="el-icon-arrow-up"
            @click="handleSorting('up', scope.$index)"
            v-if="scope.$index !== 0"></el-button>
        </template>
      </el-table-column>
    </el-table>
</template>
<script>
  export default {
      computed: {
        cards() {
            return this.$store.state.cards
        }
      },
      methods: {
        handleSorting(direction, index) {
            this.$store.commit('changeSorting', { direction, index });
        }
    }
  }
</script>

<style scoped>
</style>

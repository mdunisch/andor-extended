<template>
    <div>
        Mal ein test für {{ component }}
        <ul>
            <li v-for="item in legenden"> {{ item }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          component: 'Foobar'
        }
      },
      computed: {
        legenden(){
          return Object.values(this.$store.state.legendenColletction.legenden);
        }
      },
      created () {
        console.log(this.$store.state.legendenColletction.legenden);
      }
    }
</script>

<style scoped>
    div {
        font-weight: bold;
    }
</style>
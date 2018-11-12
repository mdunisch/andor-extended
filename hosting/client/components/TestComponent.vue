<template>
    <div>
        Mal ein test für {{ component }}
    </div>
</template>
<script>
    export default {
      data() {
        return {
          component: 'Foobar'
        }
      }
    }
</script>

<style scoped>
    div {
        font-weight: bold;
    }
</style>
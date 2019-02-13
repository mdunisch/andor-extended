<template>
  <div class="card">
    <div class="name">
      {{ name }}
    </div>
    <div 
      v-if="(cardData.type === 'letter')"
      class="number"
    >
      {{ cardData.name[0] }} 
      <span>{{ cardData.name[1] || '' }}</span>
    </div>
    <div
      class="text"
      v-html="MDtoHTML(cardData.text || '')"
    />
  </div>
</template>

<script>
    import MDtoHTML from 'marked';

    MDtoHTML.setOptions({
        sanitize: true,
        breaks: true,
        gfm: true
    });

    export default {
        props: {
            cardData: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            name() {
                return this.$store.state.name
            }
        },
        methods: {
            MDtoHTML
        }
    }
</script>

<style scoped>

    .card {
        background-image: url('./../../asserts/blanco_card.png');
        height: 452px;
        width: 604px;
        background-size: 100%;
        position: relative;
        font-family: 'Crimson Text', serif;
    }

    .card .text {
        position: absolute;
        right: 0;
        top: 0;
        width: calc(50% - 20px);
        height: calc(100% - 10px);
        overflow: hidden;
        padding: 5px 10px;
        font-size: 13px;
        line-height: 1em;
    }

    .card .name {
        font-weight: bold;
        text-align: center;
        width: 50%;
        position: absolute;
        top: 180px;
        font-size: 17px;
    }

    .card .number {
        -webkit-text-stroke: 2px black;
        color: white;

        font-size: 100px;
        position: absolute;
        top: 200px;
        left: 95px;
    }

    .card .number span {
        font-size: 80px;
        display: inline-block;
        margin-left: -20px;
    }

    .card >>> hr {
        overflow: visible;
        padding: 0;
        border: none;
        border-top: medium double #333;
        color: #333;
    }

    .card >>> p {
        margin: 10px 0;
    }

    .card >>> ul {
        padding-left: 2rem;
        margin: 0;
    }

</style>
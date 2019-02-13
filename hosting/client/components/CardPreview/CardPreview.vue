<template>
  <div class="card">
    <div 
      class="left"
      :class="{ 'left_letter': cardData.type === 'letter' }"
    >
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
        class="cardname"
        v-if="(cardData.type != 'letter')"
      >
        <div class="title">
          {{ cardData.name }}
        </div>
        <div class="subname">
          {{ cardData.subname }}
        </div>
      </div>
    </div>
    <div 
      class="right text" 
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
        height: 452px;
        width: 604px;
        position: relative;
        font-family: 'Crimson Text', serif;
    }

    .left {
        background-image: url('./../../asserts/cardgfx/mini/left_ohne.png');
        background-size: cover;
        position: relative;
        height: 100%;
        width: 50%;
    }

    .left_letter {
        background-image: url('./../../asserts/cardgfx/mini/left_mit.png');
    }

    .right {
        background-image: url('./../../asserts/cardgfx/mini/right.png');
        background-size: cover;
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
        position: relative;
        top: 180px;
        font-size: 17px;
    }

     .card .cardname {
        text-align: center;
        position: relative;
        top: 280px;
    }
    .card .cardname .title {
        font-weight: bold;
        font-size: 17px;
    }
    .card .cardname .subname {
        margin: 0 40px;
        line-height: 1em;
    }

    .card .number {
        -webkit-text-stroke: 2px black;
        color: white;

        font-size: 100px;
        position: absolute;
        top: 200px;
        left: 100px;
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
<template>
  <div class="card" :class="{ 'print': print}">
    <div class="left" :class="{ 'left_letter': cardData.type === 'letter' }">
      <div class="name">{{ name }}</div>
      <div v-if="(cardData.type === 'letter')" class="number">
        {{ cardData.name[0] }}
        <span>{{ cardData.name[1] || '' }}</span>
      </div>
      <div v-if="(cardData.type != 'letter')" class="cardname">
        <div class="title">{{ cardData.name }}</div>
        <div class="subname">{{ cardData.subname }}</div>
      </div>
    </div>
    <div class="right" v-html="MDtoHTML(cardData.text || '')" />
  </div>
</template>

<script>
import MDtoHTML from "marked";

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
    },
    print: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    MDtoHTML
  }
};
</script>

<style scoped>
.card {
  height: 452px;
  width: 604px;
  position: relative;
  font-family: "Crimson Text", serif;
  color: black;
  letter-spacing: -0.2px;
  background: linear-gradient(90deg, #a26f3e 50%, #ebd188 50%);
}

.left {
  background-image: url("./../../asserts/cardgfx/mini/left_ohne.png");
  background-size: cover;
  height: 100%;
  width: 50%;
  float: left;
  position: relative;
}

.card.print {
  padding: 25px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.card.print >>> .left {
  background-image: url("./../../asserts/cardgfx/full/left_ohne.png");
  border: 1px dashed black;
  border-right: none;
  left: -1px;
}

.left_letter {
  background-image: url("./../../asserts/cardgfx/mini/left_mit.png");
}

.card.print >>> .left_letter {
  background-image: url("./../../asserts/cardgfx/full/left_mit.png");
}

.right {
  background-image: url("./../../asserts/cardgfx/mini/right.png");
  background-size: cover;
  height: calc(100% - 10px);
  overflow: hidden;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 1em;
}

.card.print >>> .right {
  background-image: url("./../../asserts/cardgfx/full/right.png");
  border: 1px dashed black;
  border-left: none;
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
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding-top: 1px;
}

.card >>> p {
  margin: 10px 0;
}

.card >>> ul {
  padding-left: 2rem;
  margin: 0;
}
</style>
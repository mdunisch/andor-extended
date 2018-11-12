import Vue from 'vue';
import test from './components/TestComponent';
new Vue({

  el: '#app',
  render: h => h(test),
  components: { test }
});
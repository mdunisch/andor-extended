import Vue from 'vue';
import store from './store';

import test from './components/TestComponent';

new Vue({
  el: '#app',
  render: h => h(test),
  store,
  components: { test }
});

store.dispatch('legendenColletction/openDBChannel');
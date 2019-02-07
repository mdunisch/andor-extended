import Vue from 'vue';

// adding Element UI
import { Button, Row, Col, Container, Header, Main, Aside, Footer } from 'element-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Footer);

import test from './components/TestComponent';
import store from './store';


new Vue({
  el: '#app',
  render: h => h(test),
  store
});
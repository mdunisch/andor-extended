import Vue from 'vue';

// adding Element UI
import { Button, Row, Col, Container, Header, Main, Aside, Footer, Table, Form, FormItem, Input, TableColumn } from 'element-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(Table);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(TableColumn);

import App from './components/App';
import store from './store';

new Vue({
  el: '#app',
  render: h => h(App),
  store
});
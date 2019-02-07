import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: null,
    cards: [
      {
        date: '1',
        name: 'das222',
        address: 'Fadasd 22'
      },
      {
        date: '2',
        name: 'das222',
        address: 'Fadasd 22'
      },
      {
        date: '3',
        name: 'das222',
        address: 'Fadasd 22'
      }
    ]
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
    changeSorting(state, { direction, index }){
      if(direction === 'up'){
        [state.cards[index - 1], state.cards[index]] = [state.cards[index], state.cards[index - 1]];
      }
      if(direction === 'down') {
        [state.cards[index], state.cards[index - 1]] = [state.cards[index - 1], state.cards[index]];

      }
    }
  }
})
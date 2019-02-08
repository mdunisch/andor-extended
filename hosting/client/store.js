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

      const cardsInStore = [...state.cards];

      if(direction === 'up'){
        [cardsInStore[index - 1], cardsInStore[index]] = [cardsInStore[index], cardsInStore[index - 1]];
      }
      if(direction === 'down') {
        [cardsInStore[index], cardsInStore[index + 1]] = [cardsInStore[index + 1], cardsInStore[index]];
      }

      state.cards = cardsInStore;
    }
  }
})
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * 
 * @param {object} card1 
 * @param {object} card2
 * @returns {number} 
 */
const sorter = (card1, card2) => {
  return (
    // Type sort
    card1.type.localeCompare(card2.type)
    // Name sort
    - card1.name.localeCompare(card2.name)
  );
};


export default new Vuex.Store({
  state: {
    name: null,
    cards: [
      {
        type: 'custom',
        name: 'Bittere Pille',
        subname: 'Wird aufgedeckt sobald....',
        content: ''
      },
      {
        type: 'letter',
        name: 'A1',
        content: ''
      },
      {
        type: 'letter',
        name: 'C',
        content: ''
      },
      {
        type: 'letter',
        name: 'A2',
        content: ''
      }
    ]
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
    deleteCard(state, cardIndex) {
      state.cards.splice(cardIndex, 1);
    }
  },
  getters: {
    getCards: state => {
      return state.cards.sort(sorter).reverse();
    }
  }
});
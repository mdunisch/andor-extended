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
  // If not the same type order by type
  if(card2.type !== card1.type) {
    return (card2.type === 'letter') ? 1 : -1;
  }

  // Sort by name
  return card1.name.localeCompare(card2.name);
};


export default new Vuex.Store({
  state: {
    name: null,
    newCardOpen: false,
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
    },
    changeVisibleOfNewCard(state, open) {
      state.newCardOpen = open;
    },
    addCard(state, carddata) {
      state.cards.push(carddata);
    }
  },
  getters: {
    getCards: state => {
      return state.cards.sort(sorter);
    }
  }
});
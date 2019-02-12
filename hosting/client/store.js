import Vue from 'vue';
import Vuex from 'vuex';
import Nanoid from 'nanoid';

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
  //strict: true,
  state: {
    name: null,
    newCardOpenIndex: null,
    cards: [
      {
        type: 'custom',
        name: 'Bittere Pille',
        subname: 'Wird aufgedeckt sobald....',
        content: '',
        id: 2
      },
      {
        type: 'letter',
        name: 'A1',
        content: '',
        id: 66
      },
      {
        type: 'letter',
        name: 'C',
        content: '',
        id: 44
      },
      {
        type: 'letter',
        name: 'A2',
        content: '',
        id: 87
      }
    ]
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
    deleteCard(state, cardId) {
      
      // if this card is currently open
      if(state.newCardOpenIndex === cardId){
        state.newCardOpenIndex = null;
      }

      state.cards = state.cards.filter(i => i.id != cardId);
    },
    editCard(state, cardId) {
      state.newCardOpenIndex = cardId;
    },
    closeCardWindow(state) {
      state.newCardOpenIndex  = null;
    },
    addCard(state) {

      const newId = Nanoid();
      state.cards.push({
        name: '',
        subname: '',
        type: 'letter',
        text: '',
        id: newId
      });

      state.newCardOpenIndex = newId;
    }
  },
  getters: {
    getCards: state => {
      return [...state.cards].sort(sorter);
    }
  }
});
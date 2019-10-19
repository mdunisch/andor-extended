import Vue from 'vue';
import Vuex from 'vuex';
import Nanoid from 'nanoid';

Vue.use(Vuex);

/**
 * Create a Slug from a string
 * @param {String} string 
 * @return {String}
 */
function slugify(string) {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    // Remove all non-word characters 
    .replace(/[^\w\-]+/g, '') // eslint-disable-line no-useless-escape 
    // Replace multiple - with single -
    .replace(/\-\-+/g, '-') // eslint-disable-line no-useless-escape 
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text */
}


/**
 * 
 * @param {object} card1 
 * @param {object} card2
 * @returns {number} 
 */
const sorter = (card1, card2) => {

  // treat end as letter
  let newCard1 = { ...card1 };
  let newCard2 = { ...card2 };

  if (newCard1.type === 'end') {
    newCard1.type = 'letter';
  }

  if (newCard2.type === 'end') {
    newCard2.type = 'letter';
  }

  // If not the same type order by type
  if (newCard2.type !== newCard1.type) {
    return (newCard2.type === 'letter') ? 1 : -1;
  }

  // Sort by name
  return newCard1.name.localeCompare(newCard2.name);
};


export default new Vuex.Store({
  //strict: true,
  state: {
    name: 'Die dunklen weiten von Andor',
    type: 'single',
    series: null,
    number: null,
    newCardOpenIndex: 1,
    showPdf: false,
    cards: [{
        type: 'letter',
        name: 'A1',
        slug: 'a1',
        text: 'Führt zuerst die Anweisungen auf der **Checkliste** aus.\n\nAnschließend legt ihr zusätzlich folgenden Material neben dem Spielplan bereit:\n* Legt die Hexte, die 15 Kreaturplättchen, den Gegenstand Gibt und 3 schwarze Würfel bereit.\n* Legen **Sternchen auf D, H und N** der Legendenleiste.\n\n*In Andor trug sich eine Geschichte zu, die Ging so:....*\n\nStellt alle Helden auf das Feld **57.**\n\n***\n**Aufgabe:**\nDie Helden müssen die Burg verteidigen und den **die Dunkelheit** daran hindern, alle Bauern zu verschlingen bevor der Erzähler den Buchstaben **Feld H** erreicht hat.\n***',
        id: 1
      },
      {
        type: 'custom',
        name: 'In der Dunkelheit',
        slug: 'in-der-dunkelheit',
        subname: 'Diese Karte wird aufgedeckt, sobald die Dunkelheit in der Burg ist',
        text: '*Nach dem Sieg über den Drachen Tarok ist es Varkur gelungen, ein Drachenei in seinen Besitz zu bringen. Einen zweiten Drachen würde Andor nicht überleben, doch glücklicherweise konnten die Helden das Drachenei stehlen. Doch die eigentliche Aufgabe fängt gerade erst an: Um das Drachenei zu zerstören, müssen die Helden mehr altes Wissen über die Drachen zusammentragen und gleichzeitig den Bewohnern Andors helfen, sich von Taroks Angriff zu erholen.*\n\n***\n**Legendenziel:**\nAlle Feld um die Brug (Feld 22, 34, 45, 34 und 33) müssen von der Dunkelheit befreit sein.\n***\n**Wichtig:** Für jeden Feld, das ein Held die Dunkelheit bekämpft, muss der Held Willenspunkte abgeben:\nbei **2** Spielern **pro Feld 2 Willenspunkte**\nbei **3** Spielern **pro Feld 3 Willenspunkte**\nbei **4** Spielern **pro Feld 4 Willenspunkte**\n',
        id: 2
      },
      {
        type: 'end',
        name: 'N',
        slug: 'N',
        success: 'Die Legende nahm ein **gutes Ende,** wenn ...\n... der König in der Burg ist und ...\n... die Burg erfolgreich verteidigt wurde.\n\n*Es war der Eskorte des Königs zu verdanken, dass dieser noch einmal auf seine Burg zurückkehrte. Der Regen hörte endlich auf und ein Regenboden spannte sich über den Innenhof.*',
        failure: 'Die Legende nahm ein **böses Ende**, wenn ...\n... der König **nicht** in der Burg ist ...\n... die Burg **nicht** erfolgreich verteidigt wurde.\n\nWenn ihr den Schwierigkeitsgrad der Legende etwas senden wollt, spielt doch einfach besser.',
        id: 3
      },
      {
        type: 'put',
        name: 'Der Handel',
        slug: 'der-handel',
        text: '*Wie so oft begab es sich, dass Garzwog den Helden einen Handel anbot.*\nJedem Helden ist es nun einmalig möglich **2 Stärkepunkte** im tausch gegen **6 Gold** zu erhalten.\n',
        id: 4
      }
    ]
  },
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
    setType(state, newType) {
      state.type = newType;
    },
    setSeries(state, newName) {
      state.series = newName;
    },
    setNumber(state, newNumber) {
      state.number = newNumber;
    },
    setSlug(state, newName) {

      // Create new Slug
      let slug = slugify(newName);

      // Add 1 if there a other cards have the same slug
      while (state.cards.filter(i => i.slug === slug && i.id !== state.newCardOpenIndex).length !== 0) {
        slug += 1;
      }

      // Set new Slug
      state.cards.find(i => i.id === state.newCardOpenIndex).slug = slug;
    },
    loadState(state, newState) {
      state.name = newState.name;
      state.type = newState.type || 'single';
      state.series = newState.series || null;
      state.number = newState.number || null;
      state.newCardOpenIndex = newState.newCardOpenIndex;
      state.cards = newState.cards;

      // If slugs a missing
      if (state.cards.some(i => typeof i.slug === "undefined")) {
        state.cards.forEach(card => {
          card.slug = slugify(card.name);
        });
      }
    },
    deleteCard(state, cardId) {

      // if this card is currently open
      if (state.newCardOpenIndex === cardId) {
        state.newCardOpenIndex = null;
      }

      state.cards = state.cards.filter(i => i.id != cardId);
    },
    editCard(state, cardId) {
      state.newCardOpenIndex = cardId;
    },
    showPdf(state, visible) {
      state.showPdf = visible;
    },
    closeCardWindow(state) {
      state.newCardOpenIndex = null;
    },
    addCard(state) {

      const newId = Nanoid();
      state.cards.push({
        name: '',
        slug: '',
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

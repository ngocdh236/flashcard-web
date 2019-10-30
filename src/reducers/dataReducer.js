import { Types } from './actionTypes';

import '../extensions/Array';

const initialState = {
  decks: [],
  decksFetched: false,
  recentDecks: [],
  recentDecksFetched: false
};

function reducer(state = initialState, action) {
  const { decks, deck, deckId } = action;
  switch (action.type) {
    case Types.SET_DECKS:
      return { ...state, decks, decksFetched: true };

    case Types.SET_RECENT_DECKS:
      return { ...state, recentDecks: decks, recentDecksFetched: true };

    case Types.CREATE_DECK:
      return {
        ...state,
        decks: [...state.decks, deck],
        recentDecks: [deck, ...state.recentDecks]
      };

    case Types.UPDATE_DECK: {
      const deckIndex = state.recentDecks.findIndex(
        deckItem => deckItem.id === deck.id
      );
      const newRecentDecks = state.recentDecks.map(deckItem =>
        deckItem.id === deck.id ? deck : deckItem
      );

      if (newRecentDecks[deckIndex]) {
        newRecentDecks.move(deckIndex, 0);
      }

      return {
        ...state,
        decks: state.decks.map(deckItem =>
          deckItem.id === deck.id ? deck : deckItem
        ),
        recentDecks: newRecentDecks
      };
    }

    case Types.DELETE_DECK:
      return {
        ...state,
        decks: state.decks.filter(deckItem => deckItem.id !== deckId),
        recentDecks: state.recentDecks.filter(
          deckItem => deckItem.id !== deckId
        )
      };

    default:
      return state;
  }
}

export { initialState, reducer };

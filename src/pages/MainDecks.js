/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import '../styles/MainDecks.scss';

import DeckButton from '../components/DeckButton';
import { DataContext } from '../contexts/DataContext';

export default function MainDecks({ history }) {
  const { data, deckService } = React.useContext(DataContext);

  const allDecks = data.decks.map(deck => (
    <DeckButton
      key={deck.id}
      deck={deck}
      onClick={() => history.push(`/decks/${deck.id}/cards`)}
    />
  ));

  return (
    <div className="MainDecks main">
      <i className="fas fa-arrow-left mb-4"></i>
      <div className="decks">
        {allDecks}
        <DeckButton newDeck={true} />
        {allDecks.length % 3 !== 0 && <DeckButton blankDeck={true} />}
      </div>
    </div>
  );
}

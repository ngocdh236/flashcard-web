/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MainHome.scss';

import DeckButton from '../components/DeckButton';
import { DataContext } from '../contexts/DataContext';

export default function MainHome({ history }) {
  const { data, deckService } = useContext(DataContext);

  useEffect(() => {
    deckService.getAll('-updatedAt');
    if (!data.decksFetched) deckService.getAll('name');
  }, []);

  const recentDecks = data.recentDecks
    .slice(0, 3)
    .map(deck => (
      <DeckButton
        key={deck.id}
        deck={deck}
        history={history}
        onClick={() => history.push(`/decks/${deck.id}/cards`)}
      />
    ));

  return (
    <div className="MainHome main">
      <h4>Create new deck</h4>
      <DeckButton newDeck={true} />
      <h4>Recent</h4>
      <div className="decks">
        {recentDecks}
        {recentDecks.length % 3 !== 0 && <DeckButton blankDeck={true} />}
      </div>

      <Link to="/decks">View all</Link>
    </div>
  );
}

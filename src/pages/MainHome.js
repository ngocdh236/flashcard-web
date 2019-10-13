import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MainHome.scss';

import Deck from '../components/Deck';
import { DataContext } from '../contexts/DataContext';

export default function MainHome() {
  const { data, deckService } = React.useContext(DataContext);

  useEffect(() => {
    deckService.getAll();
  }, []);

  const allDecks = data.decks.map(deck => <Deck key={deck._id} deck={deck} />);

  return (
    <div className="MainHome main">
      <h4>Create new deck</h4>
      <Deck newDeck={true} />
      <h4>Recent</h4>
      <div className="decks">{allDecks}</div>
      <Link className="ml-auto">View all</Link>
    </div>
  );
}

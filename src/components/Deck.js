import React, { useState } from 'react';
import classnames from 'classnames';

import '../styles/Deck.scss';
import iconAdd from '../assets/iconAdd.svg';

import DeckDetail from './DeckDetail';

export default function Deck(props) {
  const { history, blankDeck, newDeck, deck } = props;
  const [showDetail, setShowDetail] = useState(false);

  const toggleCreateDeck = () => {
    if (newDeck) {
      setShowDetail(!showDetail);
    }
  };

  const onDeckClick = () => {
    if (!newDeck && !blankDeck) history.push(`/decks/${deck.id}/edit`);
  };

  return (
    <div
      className={classnames('Deck', { 'Deck-blank': blankDeck })}
      onClick={onDeckClick}
    >
      <div
        className="xy-centered"
        style={{ width: '100%', height: '100%' }}
        onClick={toggleCreateDeck}
      >
        {newDeck && <img src={iconAdd} alt="Add" />}
        {!blankDeck && !newDeck && (
          <span
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '600'
            }}
          >
            {deck.name}
          </span>
        )}
      </div>
      {showDetail ? <DeckDetail toggleCreateDeck={toggleCreateDeck} /> : null}
    </div>
  );
}

Deck.defaultProps = {
  newDeck: false,
  blankDeck: false
};

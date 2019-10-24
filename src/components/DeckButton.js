import React, { useState } from 'react';
import classnames from 'classnames';

import '../styles/DeckButton.scss';
import iconAdd from '../assets/iconAdd.svg';

import AddDeckPopup from './AddDeckPopup';

export default function DeckButton({ onClick, blankDeck, newDeck, deck }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleCreateDeck = () => {
    if (newDeck) {
      setShowDetail(!showDetail);
    }
  };

  return (
    <div
      className={classnames('DeckButton', { 'DeckButton-blank': blankDeck })}
      onClick={onClick}
    >
      <div
        className="xy-centered"
        style={{ width: '100%', height: '100%', position: 'relative' }}
        onClick={toggleCreateDeck}
      >
        {newDeck && <img src={iconAdd} alt="Add" />}
        {!blankDeck && !newDeck && <span>{deck.name}</span>}
      </div>

      {showDetail ? <AddDeckPopup toggleCreateDeck={toggleCreateDeck} /> : null}
    </div>
  );
}

DeckButton.defaultProps = {
  onClick: () => {},
  newDeck: false,
  blankDeck: false
};

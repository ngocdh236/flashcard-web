import React, { useState, useEffect } from 'react';

import '../styles/DeckTest.scss';

import CardButton from './CardButton';
import iconBack from '../assets/iconBack.svg';
import iconNext from '../assets/iconNext.svg';

export default function DeckTest({ deck }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  return (
    <div className="DeckTest main">
      <div className="d-flex justify-content-between">
        <button
          onClick={() => setCurrentCardIndex(currentCardIndex - 1)}
          disabled={currentCardIndex === 0}
        >
          <img src={iconBack} alt="Back"></img>
        </button>
        <CardButton
          card={deck.cards[currentCardIndex] || { id: 0, key: '', value: '' }}
        />
        <button
          onClick={() => setCurrentCardIndex(currentCardIndex + 1)}
          disabled={currentCardIndex === deck.cards.length - 1}
        >
          <img src={iconNext} alt="Next"></img>
        </button>
      </div>
      <input placeholder="Test yourself"></input>
    </div>
  );
}

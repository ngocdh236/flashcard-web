import React, { useState } from 'react';

import CardButton from './CardButton';

import '../styles/DeckCards.scss';

export default function DeckCards({ deck }) {
  const { name, cards } = deck;
  const allCards = cards.map(card => <CardButton key={card.id} card={card} />);

  return (
    <div className="DeckCards main">
      <div className="cards">
        {allCards}
        <CardButton newCard={true} />
        {allCards.length % 3 !== 0 && <CardButton blankCard={true} />}
      </div>
    </div>
  );
}

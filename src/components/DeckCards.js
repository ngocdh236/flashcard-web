import React from 'react';

import CardButton from './CardButton';

export default function DeckCards({ deck, history }) {
  const { name, cards } = deck;
  const allCards = cards.map(card => <CardButton key={card.id} card={card} />);

  return (
    <div className="DeckCards main">
      <div className="cards">
        {allCards}
        <CardButton
          newCard={true}
          onClick={() =>
            history.push(`/decks/${deck.id}/edit`, { addCard: true })
          }
        />
        {allCards.length % 3 !== 0 && <CardButton blankCard={true} />}
      </div>
    </div>
  );
}

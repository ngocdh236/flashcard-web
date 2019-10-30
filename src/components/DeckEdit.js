import React, { useState } from 'react';

import { Types } from '../reducers/actionTypes';

import '../styles/DeckEdit.scss';

export default function DeckEdit({
  history,
  deck,
  setDeck,
  deckService,
  dispatchData
}) {
  const [newCard, setNewCard] = useState({
    id: new Date(),
    key: '',
    value: ''
  });
  const [currentDeck, setCurrentDeck] = useState({
    ...deck,
    name: deck.name,
    cards: [...deck.cards]
  });

  const handleAddCard = e => {
    if (e.key === 'Enter') {
      setCurrentDeck({
        ...currentDeck,
        cards: [...currentDeck.cards, newCard]
      });

      setNewCard({
        ...newCard,
        key: '',
        value: ''
      });
    }
  };

  const handleEditCard = (e, cardId) => {
    setCurrentDeck({
      ...currentDeck,
      cards: currentDeck.cards.map(card => {
        if (card.id === cardId) card[e.target.name] = e.target.value;
        return card;
      })
    });
  };

  const handleDeleteDeck = () => {
    deckService.remove(deck.id);
    history.push('/');
  };

  return (
    <div className="DeckEdit">
      <h6>Create cards</h6>
      <div className="cards-edit">
        {currentDeck.cards.map(card => (
          <div key={card.id} className="card-edit">
            <input
              value={card.key}
              name="key"
              onChange={e => handleEditCard(e, card.id)}
            />
            <div className="horizontal-line"></div>
            <input
              value={card.value}
              name="value"
              onChange={e => handleEditCard(e, card.id)}
            />
          </div>
        ))}

        <div className="card-edit">
          <input
            value={newCard.key}
            name="key"
            onChange={e => setNewCard({ ...newCard, key: e.target.value })}
            onKeyDown={handleAddCard}
          />
          <div className="horizontal-line"></div>
          <div className="input-value">
            <input
              value={newCard.value}
              name="value"
              onChange={e => setNewCard({ ...newCard, value: e.target.value })}
              onKeyDown={handleAddCard}
            />
            <span className="font-italic">Press Enter</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          className="button-cancel"
          onClick={() => history.push(`/decks/${deck.id}/cards`)}
        >
          Cancel
        </button>
        <button
          className="button-done"
          onClick={() => {
            deckService.update(currentDeck).then(res => {
              dispatchData({ type: Types.UPDATE_DECK, deck: currentDeck });
              setDeck(currentDeck);
            });

            history.push(`/decks/${deck.id}/cards`);
          }}
        >
          Done
        </button>
      </div>
      <button className="text-danger button-delete" onClick={handleDeleteDeck}>
        Delete this deck
      </button>
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { createRef, useState, useEffect } from 'react';

import { Types } from '../reducers/actionTypes';

import '../styles/DeckEdit.scss';
import ConfirmPopup from './ConfirmPopup';
import { generateShortId } from '../utils/generateShortId';

export default function DeckEdit({
  history,
  deck,
  setDeck,
  deckService,
  dispatchData
}) {
  const newCardKeyInput = createRef();

  const [newCard, setNewCard] = useState({
    id: generateShortId(),
    key: '',
    value: ''
  });

  const [currentDeck, setCurrentDeck] = useState({
    ...deck,
    name: deck.name,
    cards: [...deck.cards]
  });

  const [showDeleteDeckConfirmPopup, setShowDeleteDeckConfirmPopup] = useState(
    false
  );

  const onNewCardChange = e => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleAddCard = e => {
    if (e.key === 'Enter') {
      setCurrentDeck({
        ...currentDeck,
        cards: [...currentDeck.cards, newCard]
      });

      setNewCard({
        id: generateShortId(),
        key: '',
        value: ''
      });

      newCardKeyInput.current.focus();
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

  useEffect(() => {
    if (history.location.state) {
      if (history.location.state.addCard) newCardKeyInput.current.focus();
    }
  }, []);

  return (
    <div className="DeckEdit">
      <h6>Cards</h6>

      <div className="cards-edit">
        <div className="card-edit" id="card-description">
          <input value="Front" name="front" disabled />
          <input value="Back" name="back" disabled />
        </div>

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
            onChange={onNewCardChange}
            onKeyDown={handleAddCard}
            ref={newCardKeyInput}
          />
          <div className="horizontal-line"></div>
          <div className="input-value">
            <input
              value={newCard.value}
              name="value"
              onChange={onNewCardChange}
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
      <button
        className="text-danger button-delete"
        onClick={() => setShowDeleteDeckConfirmPopup(true)}
      >
        Delete this deck
      </button>
      {showDeleteDeckConfirmPopup && (
        <ConfirmPopup
          dismissPopup={() =>
            setShowDeleteDeckConfirmPopup(!showDeleteDeckConfirmPopup)
          }
          message="Are you sure you want to delete this deck?"
          actionTitle="Delete"
          action={handleDeleteDeck}
        />
      )}
    </div>
  );
}

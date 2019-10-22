import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexts/DataContext';

import '../styles/DeckEdit.scss';
import iconEdit from '../assets/iconEdit.svg';

export default function DeckEdit(props) {
  const { match } = props;
  const { data, deckService } = useContext(DataContext);
  const [deck, setDeck] = useState({
    name: 'English',
    cards: [
      { id: '0', key: 'Dog', value: 'Con cho' },
      { id: '1', key: 'Cat', value: 'Con meo' },
      { id: '2', key: 'Cat', value: 'Con meo' },
      { id: '3', key: 'Cat', value: 'Con meo' },
      { id: '4', key: 'Cat', value: 'Con meo' },
      { id: '5', key: 'Cat', value: 'Con meo' },
      { id: '6', key: 'Cat', value: 'Con meo' }
    ]
  });

  return (
    <div className="DeckEdit">
      <div className="d-flex">
        <h5 className="mr-2 mb-2">{deck.name}</h5>
        <img src={iconEdit} alt="Edit"></img>
      </div>
      <h6>Create cards</h6>
      <div className="cards">
        {deck.cards.map(card => (
          <div key={card.id} className="card">
            <input value={card.key} name="key" />
            <div className="horizontal-line"></div>
            <input value={card.value} name="value" />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="button-cancel">Cancel</button>
        <button className="button-done">Done</button>
      </div>
    </div>
  );
}

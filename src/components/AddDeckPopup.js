import React, { useState } from 'react';

import { Types } from '../reducers/actionTypes';

import '../styles/AddDeckPopup.scss';

import { DataContext } from '../contexts/DataContext';

export default function AddDeckPopup({ history, toggleCreateDeck }) {
  const { deckService, dispatchData } = React.useContext(DataContext);

  const [name, setName] = useState('');

  function onChange(e) {
    setName(e.target.value);
  }

  function onCreateClick(e) {
    e.preventDefault();

    const deck = {
      name: name
    };

    deckService.create(deck).then(res => {
      dispatchData({ type: Types.CREATE_DECK, deck: res.data });
      history.push(`/decks/${res.data.id}/cards`);
    });
    toggleCreateDeck();
  }

  return (
    <div className="AddDeckPopup">
      <div className="popup-container" onClick={toggleCreateDeck} />
      <div className="popup">
        <h4>Create new deck</h4>
        <p>Name</p>
        <input name="name" value={name} onChange={onChange} />
        <p>Category</p>
        <input name="category" onChange={onChange} />
        <button onClick={onCreateClick}>Create</button>
      </div>
    </div>
  );
}

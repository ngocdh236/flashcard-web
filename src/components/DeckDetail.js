import React, { useState } from 'react';

import '../styles/DeckDetail.scss';

import { DataContext } from '../contexts/DataContext';

export default function DeckDetail(props) {
  const { deckService } = React.useContext(DataContext);

  const [name, setName] = useState('');
  const [category, setCategory] = useState({});

  function onChange(e) {
    setName(e.target.value);
  }

  function onCreateClick(e) {
    e.preventDefault();

    const deck = {
      name: name,
    };

    deckService.create(deck);
    props.toggleCreateDeck();
  }

  return (
    <div className="DeckDetail">
      <div className="popup-container" onClick={props.toggleCreateDeck} />
      <div className="popup">
        <h4>Create new deck</h4>
        <p>Name</p>
        <input name="name" value={name} onChange={onChange} />
        <p>Category</p>
        <input name="category" value={category.name} onChange={onChange} />
        <button onClick={onCreateClick}>Create</button>
      </div>
    </div>
  );
}

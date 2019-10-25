import React, { useContext, useState, useEffect } from 'react';

import '../styles/DeckEdit.scss';

export default function DeckEdit({ deck }) {
  return (
    <div className="DeckEdit">
      <h6>Create cards</h6>
      <div className="cards-edit">
        {deck.cards.map(card => (
          <div key={card.id} className="card-edit">
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

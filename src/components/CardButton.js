import React, { useState } from 'react';
import classnames from 'classnames';

import '../styles/CardButton.scss';
import iconAddPrimary from '../assets/iconAddPrimary.svg';
import iconFlip from '../assets/iconFlip.svg';

export default function CardButton({
  onClick,
  blankCard,
  newCard,
  isCard,
  card
}) {
  const [flipped, setFlipped] = useState(false);

  const toggleCreateCard = () => {
    if (newCard) {
    }
  };

  return (
    <div
      className={classnames(
        'CardButton',
        { 'CardButton-blank': blankCard },
        { 'CardButton-flipped': flipped }
      )}
      onClick={onClick}
    >
      <div className="CardButton-inner" onClick={toggleCreateCard}>
        {newCard && (
          <div className="CardButton-front">
            <img src={iconAddPrimary} alt="Add" />
          </div>
        )}
        {!blankCard && !newCard && (
          <>
            <div className="CardButton-front">
              <span>{card.key}</span>
            </div>
            <div className="CardButton-back">
              <span>{card.value}</span>
            </div>
          </>
        )}
      </div>
      {!blankCard && !newCard && (
        <button onClick={() => setFlipped(!flipped)}>
          <img className="icon-flip" src={iconFlip} alt="Switch" />
        </button>
      )}
    </div>
  );
}

CardButton.defaultProps = {
  onClick: () => {},
  newCard: false,
  blankCard: false
};

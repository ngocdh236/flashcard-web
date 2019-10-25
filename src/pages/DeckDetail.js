import React, { useState } from 'react';

import DeckNav from '../components/DeckNav';
import DeckCards from '../components/DeckCards';
import DeckEdit from '../components/DeckEdit';

import iconEdit from '../assets/iconEdit.svg';
import '../styles/DeckDetail.scss';

export default function DeckDetail(props) {
  const { match } = props;
  const [deck, setDeck] = useState({
    name: 'Fake',
    cards: [
      { id: 0, key: 'Hello', value: 'Xin chao' },
      { id: 1, key: 'Hello', value: 'Xin chao' },
      { id: 2, key: 'Hello', value: 'Xin chao' },
      { id: 3, key: 'Hello', value: 'Xin chao' },
      { id: 4, key: 'Hello', value: 'Xin chao' },
      { id: 5, key: 'Hello', value: 'Xin chao' },
      { id: 6, key: 'Hello', value: 'Xin chao' },
      { id: 7, key: 'Hello', value: 'Xin chao' },
      { id: 8, key: 'Hello', value: 'Xin chao' },
      { id: 9, key: 'Hello', value: 'Xin chao' },
      { id: 10, key: 'Hello', value: 'Xin chao' },
      { id: 11, key: 'Hello', value: 'Xin chao' },
      { id: 12, key: 'Hello', value: 'Xin chao' }
    ]
  });
  const [currentLink, setCurrentLink] = useState('');

  const CurrentNav = () => {
    switch (match.params[0]) {
      case 'cards': {
        setCurrentLink(`All cards (${deck.cards.length})`);
        return <DeckCards deck={deck} />;
      }
      case 'test': {
        setCurrentLink('Test');
        return <div></div>;
      }
      case 'progress': {
        setCurrentLink('Progress');
        return <div></div>;
      }
      case 'edit': {
        setCurrentLink('Edit');
        return <DeckEdit deck={deck} />;
      }
      default:
        return <></>;
    }
  };

  return (
    <div className="DeckDetail">
      <DeckNav className="aside" deck={deck} currentLink={currentLink} />
      <div className="deck-name">
        <h5>{deck.name}</h5>
        <img src={iconEdit} alt="Edit"></img>
      </div>
      <CurrentNav />
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import DeckNav from '../components/DeckNav';
import DeckCards from '../components/DeckCards';
import DeckEdit from '../components/DeckEdit';
import { DataContext } from '../contexts/DataContext';

import iconEdit from '../assets/iconEdit.svg';
import '../styles/DeckDetail.scss';
import DeckTest from '../components/DeckTest';

export default function DeckDetail(props) {
  const { match, history } = props;
  const { data, deckService, dispatchData } = useContext(DataContext);
  const [deck, setDeck] = useState({
    name: '',
    cards: []
  });

  const [currentLink, setCurrentLink] = useState('');

  useEffect(() => {
    const deckId = match.params.id;

    const fetchDeck = async id => {
      let deckItem = {};
      await deckService.getById(id).then(res => {
        deckItem = res.data;
      });

      setDeck(deckItem);
    };

    const item =
      data.decks.find(deckItem => deckItem.id === deckId) ||
      data.recentDecks.find(deckItem => deckItem.id === deckId);

    if (item) {
      setDeck(item);
    } else {
      fetchDeck(deckId);
    }
  }, []);

  const CurrentNav = () => {
    switch (match.params[0]) {
      case 'cards': {
        setCurrentLink(`All cards (${deck.cards.length})`);
        return <DeckCards deck={deck} history={history} />;
      }
      case 'test': {
        setCurrentLink('Test');
        return <DeckTest deck={deck} />;
      }
      case 'progress': {
        setCurrentLink('Progress');
        return <div></div>;
      }
      case 'edit': {
        setCurrentLink('Edit');
        return (
          <DeckEdit
            deck={deck}
            setDeck={setDeck}
            deckService={deckService}
            history={history}
            dispatchData={dispatchData}
          />
        );
      }
      default:
        return <></>;
    }
  };

  return (
    <div className="DeckDetail">
      <span className="link">
        {deck.category && `${deck.category} >`} {deck.name}
      </span>
      <DeckNav className="aside" deck={deck} currentLink={currentLink} />
      <div className="name">
        <input value={deck.name} disabled={match.params[0] !== 'edit'}></input>
        {match.params[0] === 'edit' && (
          <img src={iconEdit} alt="Edit" className="ml-2"></img>
        )}
      </div>
      <CurrentNav />
    </div>
  );
}

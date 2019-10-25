import React, { useState } from 'react';

import LinkWithIcon from './LinkWithIcon';

import '../styles/DeckNav.scss';

export default function DeckNav({ currentLink, deck, match }) {
  const links = [
    {
      id: 0,
      icon:
        currentLink === `All cards (${deck.cards.length})`
          ? require('../assets/iconCardsActive.svg')
          : require('../assets/iconCards.svg'),
      link: `/decks/${deck.id}/cards`,
      name: `All cards (${deck.cards.length})`
    },
    {
      id: 1,
      icon:
        currentLink === 'Test'
          ? require('../assets/iconTestActive.svg')
          : require('../assets/iconTest.svg'),
      link: `/decks/${deck.id}/test`,
      name: 'Test'
    },
    {
      id: 2,
      icon:
        currentLink === 'Progress'
          ? require('../assets/iconProgressActive.svg')
          : require('../assets/iconProgress.svg'),
      link: `/decks/${deck.id}/progress`,
      name: 'Progress'
    },
    {
      id: 3,
      icon:
        currentLink === 'Edit'
          ? require('../assets/iconEditActive.svg')
          : require('../assets/iconEdit.svg'),
      link: `/decks/${deck.id}/edit`,
      name: 'Edit'
    }
  ];

  return (
    <div className="DeckNav">
      <p>{currentLink}</p>
      <div className="links">
        {links.map(link => (
          <LinkWithIcon
            key={link.id}
            icon={link.icon}
            link={link.link}
            name={link.name}
          ></LinkWithIcon>
        ))}
      </div>
    </div>
  );
}

DeckNav.defaultProps = {
  currentLink: '',
  deck: {
    id: 0,
    cards: []
  }
};

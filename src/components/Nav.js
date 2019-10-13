import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Nav.scss';
import LinkWithIcon from './LinkWithIcon';
import ava from '../assets/ava.svg';
import iconDecks from '../assets/iconDecks.svg';
import iconSetting from '../assets/iconSetting.svg';

export default function Nav() {
  const items = [
    {
      id: 0,
      icon: require('../assets/iconDecks.svg'),
      link: '/decks',
      name: 'All decks'
    },
    {
      id: 1,
      icon: require('../assets/iconSetting.svg'),
      link: '/setting',
      name: 'Setting'
    }
  ];

  return (
    <div className="Nav aside">
      <img src={ava} className="mb-5" alt="Avatar" />

      {items.map(item => (
        <LinkWithIcon
          key={item.id}
          icon={item.icon}
          link={item.link}
          name={item.name}
        />
      ))}
    </div>
  );
}

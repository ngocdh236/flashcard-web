import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Header.scss';
import logo from '../assets/logo.svg';

import { AuthContext } from '../contexts/AuthContext';
import LinkWithIcon from '../components/LinkWithIcon';
import iconToggle from '../assets/iconToggle.svg';

export default function Header() {
  const { authService } = React.useContext(AuthContext);

  const items = [
    {
      id: 0,
      icon: require('../assets/iconHome.svg'),
      link: '/',
      name: 'Home'
    },
    {
      id: 1,
      icon: require('../assets/iconDecks.svg'),
      link: '/categories',
      name: 'Category'
    },
    {
      id: 2,
      icon: require('../assets/iconSetting.svg'),
      link: '/setting',
      name: 'Setting'
    },
    {
      id: 3,
      icon: require('../assets/iconLogout.svg'),
      name: 'Logout',
      link: '/logout',
      onClick: authService.logout
    }
  ];

  return (
    <div className="Header navbar navbar-expand-sm">
      <NavLink exact to="/">
        <img className="logo" src={logo} alt="Logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <img src={iconToggle} alt="toggle"></img>
      </button>

      <div className="collapse navbar-collapse navbar-default" id="mobile-nav">
        <div className="navbar-nav ml-auto">
          {items.map(item => (
            <LinkWithIcon
              key={item.id}
              icon={item.icon}
              link={item.link}
              name={item.name}
              onClick={item.onClick}
            ></LinkWithIcon>
          ))}
        </div>
      </div>
    </div>
  );
}

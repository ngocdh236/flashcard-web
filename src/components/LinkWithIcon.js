import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import '../styles/LinkWithIcon.scss';

export default function LinkWithIcon({ icon, link, name, onClick }) {
  return (
    <NavLink
      className="LinkWithIcon nav-link nav-item-bold"
      id={name}
      activeClassName="a-active"
      exact
      to={link}
      onClick={onClick}
    >
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <span>{name}</span>
    </NavLink>
  );
}

LinkWithIcon.defaultProps = {
  link: '',
  onClick: () => {}
};

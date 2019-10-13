import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LinkWithIcon({ id, icon, link, name, onClick }) {
  return (
    <div id={id} className="LinkWithIcon">
      <div className="icon">
        <img src={icon} alt="" />
      </div>

      <NavLink
        className="nav-link nav-item-bold"
        activeClassName="a-active"
        exact
        to={link}
        onClick={onClick}
      >
        {name}
      </NavLink>
    </div>
  );
}

LinkWithIcon.defaultProps = {
  link: '',
  onClick: () => {}
};

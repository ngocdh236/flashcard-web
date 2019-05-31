import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import logo from '../assets/Logo.png'

class Nav extends Component {
  render() {
    return (
      <div className='Nav navbar navbar-expand-sm'>
        <NavLink exact to='/'>
          <img src={logo} alt='Logo' />
        </NavLink>
      </div>
    )
  }
}

export default Nav

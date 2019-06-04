import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import logo from '../assets/logo.svg'

class Nav extends Component {
  render() {
    return (
      <div className='Nav navbar navbar-expand-sm'>
        <NavLink exact to='/'>
          <img src={logo} alt='Logo' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#mobile-nav'
        >
          <i className='fas fa-bars' />
        </button>
        <div
          className='collapse navbar-collapse navbar-default'
          id='mobile-nav'
        />
      </div>
    )
  }
}

export default Nav

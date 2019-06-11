import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import logo from '../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className='Header navbar navbar-expand-sm container'>
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
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                activeClassName='a-active'
                exact
                to='/home'
              >
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                className='nav-link'
                activeClassName='a-active'
                exact
                to='/create'
              >
                Create
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                className='nav-link'
                activeClassName='a-active'
                exact
                to='/category'
              >
                Category
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link'>Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { logoutUser } from '../actions/authActions'
import logo from '../assets/logo.svg'

import '../styles/Header.scss'

class Header extends Component {
  render() {
    return (
      <div className='Header navbar navbar-expand-sm my-5'>
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
          <div className='navbar-nav ml-auto'>
            <NavLink
              className='nav-link'
              activeClassName='a-active'
              exact
              to='/'
            >
              Home
            </NavLink>

            <NavLink
              className='nav-link'
              activeClassName='a-active'
              exact
              to='/create'
            >
              Create
            </NavLink>

            <NavLink
              className='nav-link'
              activeClassName='a-active'
              exact
              to='/categories'
            >
              Category
            </NavLink>

            <button className='nav-link mr-0' onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

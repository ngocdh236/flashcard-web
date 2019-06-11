import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import ava from '../assets/ava.svg'
import iconDecks from '../assets/iconDecks.svg'
import iconSetting from '../assets/iconSetting.svg'

class Nav extends Component {
  render() {
    return (
      <div>
        {/* <nav className='Nav nav flex-column'>
          <NavLink className='nav-link'>
            <img className='nav-link' src={ava} alt='Avatar' />
          </NavLink>
          <div className='nav-link'>
            <img src={iconDecks} />
            <NavLink activeClassName='a-active' exact to='/decks'>
              All Decks
            </NavLink>
          </div>
          <div className='nav-link'>
            <img src={iconSetting} className='mr-2' />
            <NavLink activeClassName='a-active' exact to='/setting'>
              Setting
            </NavLink>
          </div>
        </nav> */}

        <table className='Nav'>
          <NavLink className='nav-link'>
            <img className='nav-link' src={ava} alt='Avatar' />
          </NavLink>
          <tbody>
            <tr>
              <th>
                <img src={iconDecks} />
              </th>
              <td>
                <NavLink activeClassName='a-active' exact to='/decks'>
                  All Decks
                </NavLink>
              </td>
            </tr>

            <tr>
              <th>
                <img src={iconSetting} />
              </th>
              <td>
                <NavLink activeClassName='a-active' exact to='/setting'>
                  Setting
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Nav

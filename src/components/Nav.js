import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Nav.scss'
import ava from '../assets/ava.svg'
import iconDecks from '../assets/iconDecks.svg'
import iconSetting from '../assets/iconSetting.svg'

export default function Nav() {
  return (
    <table className='Nav'>
      <tbody>
        <tr>
          <th />
          <td>
            <img src={ava} className='mb-5' alt='Avatar' />
          </td>
        </tr>

        <tr>
          <th>
            <img src={iconDecks} alt='Decks' />
          </th>
          <td>
            <NavLink
              className='nav-link nav-item-bold'
              activeClassName='a-active'
              exact
              to='/decks'
            >
              All Decks
            </NavLink>
          </td>
        </tr>

        <tr>
          <th>
            <img src={iconSetting} alt='Setting' />
          </th>
          <td>
            <NavLink
              className='nav-link nav-item-bold'
              activeClassName='a-active'
              exact
              to='/setting'
            >
              Setting
            </NavLink>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

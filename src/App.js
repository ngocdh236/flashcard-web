import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'

import store from './store'
import Nav from './containers/Nav'
import Login from './containers/Login'

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Nav />
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='a-active'
                  to='/login'
                >
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='a-active'
                  to='/register'
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
            <Route exact path='/login' basename='/login' component={Login} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

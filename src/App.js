import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import store from './store'
import Nav from './containers/Nav'
import Auth from './containers/Auth'
import setAuthToken from './actions/setAuthToken'
import { setUser } from './actions/authActions'

import './App.scss'

if (localStorage.token) {
  const token = localStorage.token
  setAuthToken(token)
  const user = jwtDecode(token)
  store.dispatch(setUser(user))
}

class App extends React.Component {
  render() {
    const { isAuthenticated } = false
    const guestLinks = (
      <div>
        <Auth />
      </div>
    )

    const userLinks = (
      <div>
        <Nav />
      </div>
    )
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>{isAuthenticated ? userLinks : guestLinks}</div>
        </Router>
      </Provider>
    )
  }
}

export default App

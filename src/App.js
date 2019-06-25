import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import Header from './components/Header'
import Nav from './components/Nav'
import Auth from './components/Auth'
import MainHome from './components/MainHome'
import MainDecks from './components/MainDecks'
import setAuthToken from './actions/setAuthToken'
import { AuthContext } from './contexts/AuthContext'
import { setUser, logoutUser } from './actions/authActions'
import isEmpty from './utils/isEmpty'

import './App.scss'

export default function App() {
  const { auth, authDispatch } = React.useContext(AuthContext)

  useEffect(() => {
    const token = localStorage.token

    if (!isEmpty(token)) {
      const user = jwtDecode(token)
      const currentTime = Date.now() / 1000
      if (user.exp < currentTime) {
        logoutUser()
      } else {
        setAuthToken(token)
        authDispatch(setUser(user))
      }
    }
  }, [authDispatch])

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        )
      }
    />
  )

  return (
    <Router>
      <Route exact path='/auth' basename='/auth' component={Auth} />

      <div className='App container'>
        <PrivateRoute
          exact
          path='/(|decks|categories|setting)'
          component={Header}
        />

        <div className='aside'>
          <PrivateRoute
            exact
            path='/(|decks|categories|setting)'
            component={Nav}
          />
        </div>

        <div className='main'>
          <PrivateRoute exact path='/' basename='/' component={MainHome} />
          <PrivateRoute
            exact
            path='/decks'
            basename='/decks'
            component={MainDecks}
          />
        </div>
      </div>
    </Router>
  )
}

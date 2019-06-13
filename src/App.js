import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import store from './store'
import Header from './containers/Header'
import Nav from './containers/Nav'
import Auth from './containers/Auth'
import MainHome from './containers/MainHome'
import setAuthToken from './actions/setAuthToken'
import { setUser, logoutUser } from './actions/authActions'
import { getAllDecks } from './actions/deckActions'

import './App.scss'

const token = localStorage.token

if (token) {
  setAuthToken(token)
  const user = jwtDecode(token)
  store.dispatch(setUser(user))
  store.dispatch(getAllDecks())

  const currentTime = Date.now() / 1000
  if (user.exp < currentTime) {
    store.dispatch(logoutUser())
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
      )
    }
  />
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/auth' basename='/auth' component={Auth} />

          <div className='App'>
            {store.getState().auth.isAuthenticated ? <Header /> : null}

            {store.getState().auth.isAuthenticated ? (
              <div className='aside'>
                <Nav />
                <div className='vertical-line mx-5' />
              </div>
            ) : null}

            <div className='main'>
              <PrivateRoute exact path='/' basename='/' component={MainHome} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

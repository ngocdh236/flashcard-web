/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Header from './components/Header';
import Nav from './components/Nav';
import Auth from './pages/Auth';
import MainHome from './pages/MainHome';
import MainDecks from './pages/MainDecks';
import DeckDetail from './pages/DeckDetail';
import setAuthToken from './services/setAuthToken';
import { AuthContext } from './contexts/AuthContext';
import { isEmpty } from './utils/isEmpty';

import './App.scss';

export default function App(props) {
  const { auth, authService } = useContext(AuthContext);

  const token = localStorage.token;
  let user = {};

  if (!isEmpty(token)) {
    user = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      authService.logout();
    }
    setAuthToken(token);
  }

  useEffect(() => {
    authService.setUser(user);
  }, []);

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
  );

  return (
    <Router>
      <div className="App">
        <Route exact path="/auth" basename="/auth" component={Auth} />

        <PrivateRoute path="/(|decks|categories|setting)" component={Header} />

        <PrivateRoute
          exact
          path="/(|decks|categories|setting)"
          component={Nav}
        />

        <PrivateRoute exact path="/" basename="/" component={MainHome} />
        <PrivateRoute exact path="/decks" component={MainDecks} />

        <PrivateRoute
          exact
          path="/decks/:id/(cards|test|progress|edit)"
          component={DeckDetail}
        />
      </div>
    </Router>
  );
}

import React from 'react'
import jwtDecode from 'jwt-decode'

import { Types } from './types'
import isEmpty from '../utils/isEmpty'
import customAxios from '../actions/customAxios'
import setAuthToken from '../actions/setAuthToken'

export const AuthContext = React.createContext()

const initialState = {
  isAuthenticated: false,
  user: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default:
      return state
  }
}

export function AuthProvider(props) {
  const [auth, authDispatch] = React.useReducer(reducer, initialState)

  const userUrl = '/users'
  const registerUrl = '/users/register'
  const loginUrl = '/users/login'

  const registerUser = userData => {
    customAxios
      .post(registerUrl, userData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const loginUser = userData => {
    customAxios
      .post(loginUrl, userData)
      .then(res => {
        const token = res.data.token
        console.log(res)
        localStorage.setItem('token', token)
        setAuthToken(token)
        const user = jwtDecode(token)
        authDispatch(setUser(user))
      })
      .catch(err => console.log(err))
  }

  const deleteUser = () => {
    customAxios
      .delete(userUrl)
      .then(res => logoutUser())
      .catch(err => console.log(err))
  }

  const setUser = user => {
    return {
      type: Types.SET_USER,
      user: user
    }
  }

  const logoutUser = () => {
    setAuthToken(false)
    localStorage.removeItem('token')
    window.location.href = '/auth'
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        authDispatch,
        registerUser,
        loginUser,
        deleteUser,
        setUser,
        logoutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

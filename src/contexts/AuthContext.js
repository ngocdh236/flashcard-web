import React from 'react'

import { Types } from './types'
import isEmpty from '../utils/isEmpty'

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

export const AuthContext = React.createContext()

export function AuthProvider(props) {
  const [auth, authDispatch] = React.useReducer(reducer, initialState)

  return (
    <AuthContext.Provider
      value={{
        auth,
        authDispatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

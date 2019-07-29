import jwtDecode from 'jwt-decode'

import customAxios from './customAxios'
import setAuthToken from './setAuthToken'
import { Types } from '../reducers/actionTypes'

export const useService = (state, dispatch) => {
  const userUrl = '/users'
  const registerUrl = '/users/register'
  const loginUrl = '/users/login'

  const register = userData => {
    customAxios
      .post(registerUrl, userData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const login = userData => {
    console.log('Alo')
    customAxios
      .post(loginUrl, userData)
      .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        setAuthToken(token)
        const user = jwtDecode(token)
        dispatch(setUser(user))
      })
      .catch(err => console.log(err))
  }

  const remove = () => {
    customAxios
      .delete(userUrl)
      .then(res => logout())
      .catch(err => console.log(err))
  }

  const setUser = user => {
    dispatch({
      type: Types.SET_USER,
      user
    })
  }

  const logout = () => {
    setAuthToken(false)
    localStorage.removeItem('token')
    window.location.href = '/auth'
  }

  return {
    register,
    login,
    remove,
    setUser,
    logout
  }
}

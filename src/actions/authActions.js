import jwtDecode from 'jwt-decode'

import customAxios from './customAxios'
import { Types } from '.'
import setAuthToken from './setAuthToken'

const userUrl = '/users'
const registerUrl = '/users/register'
const loginUrl = '/users/login'

export const registerUser = userData => {
  customAxios
    .post(registerUrl, userData)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}

export const loginUser = userData => dispatch => {
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

export const deleteUser = userId => {
  customAxios
    .delete(`${userUrl}/${userId}`)
    .then(res => logoutUser())
    .catch(err => console.log(err))
}

export const setUser = user => {
  return {
    type: Types.SET_USER,
    user: user
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  setAuthToken(false)
  window.location.href = '/auth'
}

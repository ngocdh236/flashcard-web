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
      console.log(res)
      const token = res.data.token
      localStorage.setItem('token', token)
      setAuthToken(token)
      const user = jwtDecode(token)
      console.log(user)
    })
    .catch(err => console.log(err))
}

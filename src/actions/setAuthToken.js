import customAxios from './customAxios'

const setAuthToken = token => {
  if (token) {
    customAxios.defaults.headers.common['Authorization'] = token
  } else {
    delete customAxios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken

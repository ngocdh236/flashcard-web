import customAxios from './customAxios'

export default token => {
  if (token) {
    customAxios.defaults.headers.common['Authorization'] = token
  } else {
    delete customAxios.defaults.headers.common['Authorization']
  }
}

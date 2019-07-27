import axios from 'axios'

const customAxios = axios.create({
  baseURL: 'https://sheltered-reaches-53167.herokuapp.com/api'
})

export default customAxios

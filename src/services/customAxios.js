import axios from 'axios';

const customAxios = axios.create({
  // baseURL: 'http://localhost:5000/api'
  baseURL: 'https://sheltered-reaches-53167.herokuapp.com/api'
});

export default customAxios;

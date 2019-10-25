import jwtDecode from 'jwt-decode';

import customAxios from './customAxios';
import setAuthToken from './setAuthToken';
import { Types } from '../reducers/actionTypes';
import formatAuthInputErrors from '../utils/formatAuthInputErrors';

export const useService = (state, dispatch) => {
  const userUrl = '/users';
  const registerUrl = '/users/register';
  const loginUrl = '/users/login';

  const setUser = user => {
    dispatch({
      type: Types.SET_USER,
      user
    });
  };

  const register = userData => customAxios.post(registerUrl, userData);

  const login = (userData, setErrors) => {
    customAxios
      .post(loginUrl, userData)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        setAuthToken(token);
        const user = jwtDecode(token);
        setUser(user);
      })
      .catch(err => setErrors(formatAuthInputErrors(err.response.data)));
  };

  const remove = () => {
    customAxios
      .delete(userUrl)
      .then(res => logout())
      .catch(err => console.log(err));
  };

  const logout = () => {
    setAuthToken(false);
    localStorage.removeItem('token');
    window.location.href = '/auth';
  };

  return {
    register,
    login,
    remove,
    setUser,
    logout
  };
};

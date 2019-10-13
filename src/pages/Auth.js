import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import '../styles/Auth.scss';
import logo from '../assets/logo.svg';

import { AuthContext } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataContext';
import AuthInput from '../components/AuthInput';
import RegisterPopup from '../components/RegisterPopup';

export default function Auth(props) {
  const { auth, authService } = React.useContext(AuthContext);

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const [openRegisterPopup, setOpenRegisterPopup] = useState(false);

  const [errors, setErrors] = useState([]);

  const { from } = props.location.state || {
    from: { pathname: '/' },
  };

  if (auth.isAuthenticated) {
    return <Redirect to={from} />;
  }

  const onChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const toggleRegisterPopup = e => {
    e.preventDefault();
    setOpenRegisterPopup(!openRegisterPopup);
  };

  const login = e => {
    e.preventDefault();

    const userData = {
      email: inputValues.email,
      password: inputValues.password,
    };

    authService.login(userData, setErrors);
  };

  const loginModel = [
    {
      type: 'text',
      placeholder: 'Email',
      value: 'email',
      icon: require('../assets/iconEmail.svg'),
    },
    {
      type: 'password',
      placeholder: 'Password',
      value: 'password',
      icon: require('../assets/iconPassword.svg'),
    },
  ];

  return (
    <div className="Auth">
      <div className="Login text-center">
        <img src={logo} alt="Logo" className="mb-4" />

        <h5>Study faster and better. Login to create your own flashcards.</h5>

        {loginModel.map(field => (
          <AuthInput
            key={field.value}
            icon={field.icon}
            placeholder={field.placeholder}
            type={field.type}
            name={field.value}
            value={inputValues[field.value]}
            onChange={onChange}
            error={errors ? errors[field.value] : null}
          />
        ))}

        <button className="button-login" onClick={login}>
          Login
        </button>

        <button className="button-register" onClick={toggleRegisterPopup}>
          Register
        </button>
      </div>
      {openRegisterPopup ? (
        <RegisterPopup
          authService={authService}
          toggleRegisterPopup={toggleRegisterPopup}
        />
      ) : null}
    </div>
  );
}

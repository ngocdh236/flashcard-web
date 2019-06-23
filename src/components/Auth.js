import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import '../styles/Auth.scss'
import logo from '../assets/logo.svg'
import iconEmail from '../assets/iconEmail.svg'
import iconPassword from '../assets/iconPassword.svg'
import iconUser from '../assets/iconUser.svg'

import { AuthContext } from '../contexts/AuthContext'
import Input from './Input'

export default function Auth(props) {
  const { auth, loginUser } = React.useContext(AuthContext)

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [isLoginPage, setIsLoginPage] = useState(true)

  const { from } = props.location.state || {
    from: { pathname: '/' }
  }

  if (auth.isAuthenticated) {
    return <Redirect to={from} />
  }

  function onChange(e) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  function toggleRegisterPopup(e) {
    e.preventDefault()
    setIsLoginPage(!isLoginPage)
  }

  function login(e) {
    e.preventDefault()

    const userData = {
      email: inputValues.email,
      password: inputValues.password
    }

    loginUser(userData)
  }

  const registerPopup = (
    <div className='Register d-flex justify-content-center'>
      <div className='popup-container' onClick={toggleRegisterPopup} />
      <form
        className='popup d-flex flex-column justify-content-center align-items-center'
        noValidate
      >
        <h4>Create your own account</h4>
        <div className='mt-5'>
          <img src={iconUser} alt='User' />
          <Input
            placeholder='Name'
            name='name'
            value={inputValues.name}
            onChange={onChange}
          />
        </div>

        <div className='input-icon'>
          <img src={iconEmail} alt='Email' />
          <Input name='email' value={inputValues.email} onChange={onChange} />
        </div>

        <div>
          <img src={iconPassword} alt='Password' />
          <Input
            name='password'
            type='password'
            value={inputValues.password}
            onChange={onChange}
          />
        </div>

        <button type='submit' className='btn-login mt-5'>
          Register
        </button>
      </form>
    </div>
  )

  return (
    <div className='Auth'>
      <div className='Login'>
        <img src={logo} alt='Logo' />
        <form className='mt-5' noValidate>
          <h4>Study faster and better. Login to create your own flashcards.</h4>
          <div>
            <img src={iconEmail} alt='Email' />
            <Input name='email' value={inputValues.email} onChange={onChange} />
          </div>

          <div>
            <img src={iconPassword} alt='Password' />
            <Input
              name='password'
              type='password'
              value={inputValues.password}
              onChange={onChange}
            />
          </div>

          <button type='submit' className='btn-login' onClick={login}>
            Login
          </button>

          <button className='btn-register ml-3' onClick={toggleRegisterPopup}>
            Register
          </button>
        </form>
      </div>
      {!isLoginPage ? registerPopup : null}
    </div>
  )
}

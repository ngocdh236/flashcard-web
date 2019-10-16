import React, { useState } from 'react'

import AuthInput from './AuthInput'
import formatAuthInputErrors from '../utils/formatAuthInputErrors'

export default function RegisterPopup({ authService, toggleRegisterPopup }) {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState([])

  const onChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
  }

  const RegisterInputModel = [
    {
      type: 'text',
      placeholder: 'Name',
      value: 'name',
      icon: require('../assets/iconUser.svg')
    },
    {
      type: 'text',
      placeholder: 'Email',
      value: 'email',
      icon: require('../assets/iconEmail.svg')
    },
    {
      type: 'password',
      placeholder: 'Password',
      value: 'password',
      icon: require('../assets/iconPassword.svg')
    },
    {
      type: 'password',
      placeholder: 'Confirm Password',
      value: 'confirmPassword',
      icon: require('../assets/iconPassword.svg')
    }
  ]

  const register = e => {
    const userData = {
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password
    }

    if (inputValues.password === inputValues.confirmPassword) {
      authService
        .register(userData)
        .then(() => {
          toggleRegisterPopup()
        })
        .catch(err => {
          setErrors(formatAuthInputErrors(err.response.data))
        })
    } else {
      setErrors({ confirmPassword: 'Password does not match' })
    }
  }

  return (
    <div className='RegisterPopup'>
      <div className='popup-container' onClick={toggleRegisterPopup} />

      <div className='popup text-center'>
        <h5>Create your own account</h5>

        {RegisterInputModel.map(field => (
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

        <button className='button-submit' onClick={register}>
          Submit
        </button>
      </div>
    </div>
  )
}

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Input from '../components/Input'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }

  render() {
    const { errors } = this.state

    return (
      <div className='Login mt-5 text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4'>Log In</h1>
              <form className='mt-5' noValidate onSubmit={this.onSubmit}>
                <Input
                  placeholder='Email'
                  name='email'
                  type='text'
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <Input
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <input type='submit' className='btn btn-lg btn-light mt-5' />
              </form>
              <br />
              <Link className='nav-link' to='/register'>
                Don't have an account yet? Click here
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default Login

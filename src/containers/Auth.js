import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from '../components/Input'
import logo from '../assets/logo.svg'
import iconEmail from '../assets/iconEmail.svg'
import iconPassword from '../assets/iconPassword.svg'
import iconUser from '../assets/iconUser.svg'
import { loginUser } from '../actions/authActions'

import '../styles/Auth.scss'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true,
      name: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.login = this.login.bind(this)
    this.toggleRegisterPopup = this.toggleRegisterPopup.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      window.location.href = '/'
    }
  }

  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
      window.location.href = '/'
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }

  login(e) {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }

  toggleRegisterPopup(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      login: !this.state.login
    })
  }

  render() {
    const { errors } = this.state

    const registerPopup = (
      <div className='Register d-flex justify-content-center'>
        <div className='popup-container' onClick={this.toggleRegisterPopup} />
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
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
          </div>

          <div className='input-icon'>
            <img src={iconEmail} alt='Email' />
            <Input
              name='email'
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
          </div>

          <div>
            <img src={iconPassword} alt='Password' />
            <Input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
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
            <h4>
              Study faster and better. Login to create your own flashcards.
            </h4>
            <div>
              <img src={iconEmail} alt='Email' />
              <Input
                name='email'
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
            </div>

            <div>
              <img src={iconPassword} alt='Password' />
              <Input
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
            </div>

            <button type='submit' className='btn-login' onClick={this.login}>
              Login
            </button>

            <button
              className='btn-register ml-3'
              onClick={this.toggleRegisterPopup}
            >
              Register
            </button>
          </form>
        </div>
        {!this.state.login ? registerPopup : null}
      </div>
    )
  }
}

Auth.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Auth)

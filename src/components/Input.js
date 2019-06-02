import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({ name, value, info, type, onChange, error }) => {
  return (
    <span className='Input'>
      <input
        type={type}
        className={classnames('ml-3', {
          'is-invalid': error
        })}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback text-left'>{error}</div>}
    </span>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object
}

Input.defaultProps = {
  type: 'text'
}

export default Input

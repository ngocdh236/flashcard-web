import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({
  name,
  placeholder,
  value,
  info,
  type,
  onChange,
  disabled,
  error
}) => {
  return (
    <div className='form-group'>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback text-left'>{error}</div>}
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  error: PropTypes.object
}

Input.defaultProps = {
  type: 'text'
}

export default Input

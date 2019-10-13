import React from 'react';
import PropTypes from 'prop-types';

import '../styles/AuthInput.scss';

export default function AuthInput({
  icon,
  placeholder,
  name,
  value,
  type,
  onChange,
  error,
}) {
  return (
    <div key={name} className="AuthInput">
      <div className="input">
        <div className="input-icon">
          <img src={icon} alt="User" />
        </div>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="error">{error && error}</div>
    </div>
  );
}

AuthInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AuthInput.defaultProps = {
  placeholder: '',
  type: 'text',
  error: '',
};

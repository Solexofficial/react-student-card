import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, placeholder, name, value, onChange, error, ...rest }) => {
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '');
  };

  return (
    <div className='mb-4'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation'>
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          className={getInputClasses()}
          {...rest}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;

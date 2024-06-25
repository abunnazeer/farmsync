// components/Input.js
import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

const Input = ({
  label,
  type,
  id,
  name,
  placeholder,
  required,
  className,
  status,
  size,
  noMargin,
  value,
  disabled,
}) => {
  const formGroupClasses = clsx(styles.formGroup, {
    [styles.noMarginBottom]: noMargin,
  });

  const inputClasses = clsx(
    styles.input,
    {
      [styles.error]: status === 'error',
      [styles.success]: status === 'success',
      [styles.large]: size === 'large',
    },
    className
  );

  return (
    <div className={formGroupClasses}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, name }, fieldState: { invalid, error } }) => (
        <TextField
          fullWidth
          onChange={onChange}
          name={name}
          label={label}
          disabled={disabled}
          error={invalid}
          helperText={error?.message}
        />
      )}
    ></Controller>
  );
}

export default InputField;

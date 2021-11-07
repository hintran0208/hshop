import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const { control, setValue } = form;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <FormControl error={invalid} fullWidth margin="normal" variant="outlined" size="small">
            <Typography>{label}</Typography>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                maxWidth: '200px',
              }}
            >
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) - 1 ? Number.parseInt(value) - 1 : 1)
                }
              >
                <RemoveCircleOutline />
              </IconButton>

              <OutlinedInput
                id={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type="number"
              />

              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) + 1) ? Number.parseInt(value) + 1 : 1
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>

            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        )}
      ></Controller>
    </div>
  );
}

export default QuantityField;

import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label } = props;
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

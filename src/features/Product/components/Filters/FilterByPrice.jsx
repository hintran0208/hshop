import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box sx={{ p: 2, borderTop: '0.5px solid #e0e0e0' }}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

      <Box sx={{ display: 'flex', flexFlow: 'row Nowrap', alignItems: 'center', mt: 1, mb: 1 }}>
        <TextField
          variant="standard"
          name="salePrice_gte"
          value={values.salePrice_gte}
          size="small"
          onChange={handleChange}
        />
        <span style={{ marginLeft: 8, marginRight: 8 }}>-</span>
        <TextField
          variant="standard"
          name="salePrice_lte"
          value={values.salePrice_lte}
          size="small"
          onChange={handleChange}
        />
      </Box>

      <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Minimum value is 1')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form}></QuantityField>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: '250px' }}
        sx={{ mt: 1, mb: 2 }}
        size="large"
      >
        Add to cart
      </Button>
    </form>
  );
}

export default AddToCartForm;

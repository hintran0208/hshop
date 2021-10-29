// import InputField from '../../../../components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const theme = createTheme();

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object({});

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: 2 }}>
        <Avatar sx={{ mx: 'auto', bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h3" variant="h5" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
          Create An Account
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="fullName" label="Full Name" form={form} />
          <InputField name="email" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />
          <PasswordField name="retypePassword" label="Retype Password" form={form} />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            Create An Account
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default RegisterForm;

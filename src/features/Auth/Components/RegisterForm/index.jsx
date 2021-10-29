// import InputField from '../../../../components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { palette } from '@mui/system';
const theme = createTheme();

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object({
    title: yup.string().required('Please enter title').min(4, 'Title is too short'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
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
          <InputField name="password" label="Password" form={form} />
          <InputField name="retypePassword" label="Retype Password" form={form} />
        </form>

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Create An Account
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default RegisterForm;

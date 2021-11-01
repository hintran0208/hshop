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
import LinearProgress from '@mui/material/LinearProgress';

const theme = createTheme();

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('should have at least two words', 'Please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(6, 'Please enter at least six characters.'),
    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Password does not match.'),
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

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: 2 }}>
        {isSubmitting && (
          <LinearProgress sx={{ position: 'absolute', top: '0', right: '0', left: '0' }} />
        )}

        <Avatar sx={{ mx: 'auto', bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h3" variant="h5" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
          Create An Account
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="fullName" label="Full Name" form={form}></InputField>
          <InputField name="email" label="Email" form={form}></InputField>
          <PasswordField name="password" label="Password" form={form}></PasswordField>
          <PasswordField name="retypePassword" label="Retype Password" form={form}></PasswordField>

          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
          >
            Create An Account
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default RegisterForm;

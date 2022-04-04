import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import PasswordField from 'components/form-controls/PasswordField';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import LinearProgress from '@mui/material/LinearProgress';

const theme = createTheme();

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object({
    identifier: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
          Sign In
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="identifier" label="Email" form={form}></InputField>
          <PasswordField name="password" label="Password" form={form}></PasswordField>

          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1, mb: 2 }}
            size="large"
          >
            Sign In
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default LoginForm;

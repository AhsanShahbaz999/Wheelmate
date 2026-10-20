import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/router';

// MUI components
import { LoadingButton } from '@mui/lab';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { Iconify } from '../../components';

const AUTH_API_URL = `${process.env.BACKEND_API}/user`;

// Validation Schema
const FormSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required').min(2, 'Min 2 characters'),
  username: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required').min(6, 'Min 6 characters'),
  // confirmpassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], "Passwords don't match"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: { first_name: '', username: '', password: ''},
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${AUTH_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),  // Make sure 'data' contains correct fields
      });
  
      if (response.ok) {
        console.log('Signup successful');
        await router.push('/auth/logincover');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Unable to create the account.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Unable to connect to the backend. Please try again later.');
    }
  };
  

  return (
    <Stack spacing={2.5} alignItems="flex-end">
      <Controller
        name="first_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            error={Boolean(errors.first_name)}
            helperText={errors.first_name?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        )}
      />
      {/* <Controller
        name="confirmpassword"
        control={control}
        render={({ field }) => <TextField {...field} label="Confirm Password" type="password" fullWidth />}
      /> */}
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        onClick={handleSubmit(onSubmit)}
      >
        Sign Up
      </LoadingButton>
    </Stack>
  );
}

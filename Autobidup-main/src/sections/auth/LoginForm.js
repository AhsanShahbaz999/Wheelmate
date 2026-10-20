import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { Iconify } from '../../components';

const AUTH_API_URL = `${process.env.BACKEND_API}/user`;

// Validation schema for form
const FormSchema = Yup.object().shape({
  username: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // React Hook Form setup
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: { username: '', password: '' },
  });

  // Show or hide the password
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Form submission handler
  const onSubmit = async (data) => {
    console.log('Form Data:', data);  // Log form data for debugging
  
    try {
      const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',  // Corrected the method to 'POST'
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Check if the response is successful
      if (response.ok) {
        const responseData = await response.json();
        console.log('Login successful', responseData);
        
        // Save token and username to localStorage
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('username', responseData.user.username);
        
        // Dispatch a storage event to notify other components
        window.dispatchEvent(new Event('storage'));
        
        // Redirect to the homepage after successful login
        await router.push('/');
      } else {
        // Handle error if login fails
        const errorData = await response.json();
        alert(errorData.message || 'Unable to log in.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Unable to connect to the backend. Please try again later.');
    }
  };

  return (
    <Stack spacing={2.5} alignItems="flex-end">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Email" fullWidth />
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
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </LoadingButton>
    </Stack>
  );
}

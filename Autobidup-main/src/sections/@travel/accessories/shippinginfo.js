import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import {
  Button,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
} from '@mui/material';
// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  phone: Yup.array()
    .required()
    .min(11, 'Phone number should of 11 digits')
    .max(11, 'Phone number should of 11 digits'),
  name: Yup.string().required('Name is required'),
});
// Shippinginfo.propTypes = {
//   post: PropTypes.array,
// };
export default function Shippinginfo({ post}) {

  const router = useRouter();
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
    },
  });

  // const [show, setShow] = useState(false);
  const currentDate = new Date();
  const currentDay = currentDate.getDate(); // Get the current day (1-31)
  const currentMonth = currentDate.getMonth() + 1; // Get the current month (0-11) and add 1 to match human-readable month (1-12)
  const currentYear = currentDate.getFullYear();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const formattedDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay
    .toString()
    .padStart(2, '0')}`;
  console.log(formattedDate)
  // setDate(formattedDate);

  console.log('post form', post);
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', padding: { xs: '2%', md: '4%' } }}>
      <Container
        sx={{
          width: '100%',
          textAlign: 'left',
          p: { xs: 1, md: 4 },
          pl: { sm: 4 },
          pr: { sm: 4 },
          borderRadius: '20px',
          background: 'rgba(254,254,254,0.93)',
        }}
      >
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '5%' },
            mb: '10px',
          }}
        >
          <Stack spacing={3} mt={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography variant="h4" fontWeight="bold">
                First Name *
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter first name"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <Typography variant="h4" fontWeight="bold">
                Last Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter last name"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </Stack>

          <Stack spacing={3} mt={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography variant="h4" fontWeight="bold">
                Address *
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter address"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <Typography variant="h4" fontWeight="bold">
                City
              </Typography>
              <TextField
                fullWidth
                disabled
                value="Lahore"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
              />
            </div>
          </Stack>

          <Stack spacing={3} mt={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
            <div>
              <Typography variant="h4" fontWeight="bold">
                ZipCode
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter zip code"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div>
              <Typography variant="h4" fontWeight="bold">
              Phone Number *
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter phone number"
                sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </Stack>

          <Typography variant="h4" fontWeight="bold">
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter email"
            sx={{ width: { xs: '100%', sm: '50vh', md: '43vh', lg: '30vw' } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <Button
              sx={{
                size: '15px',
                mt: 3,
                backgroundColor: '#212B36',
                color: 'white',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={() => {
                const updatedPost = {
                  ...post,
                  fname: firstName,
                  lname: lastName,
                  address: address,
                  city: 'Lahore',
                  zipcode: zipCode,
                  phone: phoneNumber,
                  email: email,
                  date: formattedDate,
                };
                console.log('shipping data added', updatedPost);

                router.push({
                  pathname: '/travel/carRentals/payment',
                  query: { data: JSON.stringify(updatedPost) },
                });
              }}
            >
              Proceed to Payment
            </Button>
          </Box>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

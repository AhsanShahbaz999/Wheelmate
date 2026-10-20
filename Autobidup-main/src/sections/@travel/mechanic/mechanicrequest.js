import PropTypes from 'prop-types';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import { Image } from '../../../components';

import { Button, Modal, Typography, Stack, Box, TextField, Container } from '@mui/material';

import mechanic from '../../../assets/images/mechanicform.jpg';
import mechanicPhoto from '../../../assets/images/mechanic.jpg';

const styling = {
  backgroundImage: `url(${mechanic.src})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
// ----------------------------------------------------------------------
const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(11, 'Phone number is at least 11 numbers minumum'),
  description: Yup.string().required('Description is required'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  height: '600px',
};
const style2 = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
  height: '640px',
};
const style3 = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
  height: '150px',
};

let map = '';
export default function Mechanicrequest() {
  var mechanicId = '';
  // var mechanicName = '';
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  let [mechanicName, setMechanicName] = useState('');
  let [mechanicPhone, setMechanicPhone] = useState('');
  let [updatedData, setUpdatedData] = useState('');
  map = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.9537239478!2d74.00473096991998!3d31.482517977862887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1689331760317!5m2!1sen!2sus`;
  useState(() => {}, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openError, setOpenError] = useState(false);
  const handleOpenError = () => setOpenError(true);
  const handleCloseError = () => setOpenError(false);

  const handleConfirmLocation = async () => {
    // Handle confirm location logic
    console.log('Location right now', location);

    try {
      console.log('checking location');
      const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/location', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: location }),
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        setLatitude(responseData.latitude);
        setLongitude(responseData.longitude);
        console.log(responseData.latitude);
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
      // Handle the error
    }
  };

  if (longitude && latitude) {
    map = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es&z%3D14&amp&output=embed`;
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

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
      phone: '',
      description: '',
    },
  });
  const onSubmit = async (data) => {
    console.log('data', data);
    data.location = location;
    console.log('location', data.location);
    console.log('working');
    setUpdatedData({
      ...data,
      location: String([location, latitude, longitude]),
    });
    console.log(updatedData);
    
    try {
      console.log('Mechanic api calling');
      const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/allot_mechanic', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        mechanicId = responseData['Mechanic id'];
        console.log(responseData.mechanic);
        handleOpen()
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
      // Handle the error
    }
  };
  useState(() => {
    console.log(mechanicId);

    async function fetchData() {
      try {
        console.log('details fetching');
        const response = await fetch('https://autobidup.pythonanywhere.com/user/customer-details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          // API call successful
          let responseData = await response.json();
          mechanicId = responseData['alloted_mechanic'];
          console.log(mechanicId);
          // fetchData1(mechanicId);
          console.log('response data', responseData);
          console.log('customer details arrived succesfully');
        } else {
          // API call failed
          const errorData = await response.json();
          // Handle the error data as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleMechanic = async () => {
    console.log(mechanicId);
    if (mechanicId) {
      async function fetchData1(mechanicId) {
        try {
          console.log('details fetching');
          const response = await fetch(
            `https://autobidup.pythonanywhere.com/mechanic/search_mechanic?search=${mechanicId}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            }
          );

          if (response.ok) {
            // API call successful
            let responseData = await response.json();
            setMechanicName(responseData[0].name);
            setMechanicPhone(responseData[0].phone_no);
            console.log('mechanic', responseData);
            console.log('mechanic details arrived succesfully');
            // if (mechanicName && mechanicPhone) {
            handleOpen();
            // }
          } else {
            // API call failed
            const errorData = await response.json();
            // Handle the error data as needed
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData1(mechanicId);
    } else {
      console.log('hellllll');      
      handleOpenError()
    }
  };
  const handleRemove = async () => {
    async function fetchData() {
      try {
        console.log('details fetching');
        const response = await fetch(
          `https://autobidup.pythonanywhere.com/mechanic/remove_mechanic`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          }
        );

        if (response.ok) {
          // API call successful
          let responseData = await response.json();

          console.log('mechanic', responseData);
          console.log('mechanic removed succesfully');
          mechanicId = ''
        } else {
          // API call failed
          const errorData = await response.json();
          // Handle the error data as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }} style={styling}>
      <Container
        sx={{
          width: '100%',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <Box
          sx={{
            p: { xs: '5%', sm: '7%' },
            pb: { xs: '20%', sm: '7%' },
            borderRadius: '20px',
            background: 'rgba(254,254,254,0.93)',
          }}
        >
          <Typography variant="h3" textAlign="center" pb="5px">
            Request A Mechanic Form
          </Typography>
          <Typography variant="h6" textAlign="left" mb={6}>
            Fill out the form to request a mechanic
          </Typography>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Name
          </Typography>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Name *"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ width: { xs: '100%' } }}
              />
            )}
          />
          <Typography variant="h5" mb="6" fontWeight="bold">
            Phone Number
          </Typography>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Phone *"
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ width: { xs: '100%' }, mb: 2 }}
              />
            )}
          />
          <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                sx={{ textAlign: 'center' }}
                id="modal-modal-title"
                variant="h3"
                component="h2"
              >
                Select Your Location
              </Typography>
              <Box style={{ width: '760px', height: '450px', border: 0 }}>
                <iframe
                  style={{ width: '100%', height: '100%', border: 0 }}
                  src={map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
              <Stack direction="row" spacing={3} mt={3}>
                <TextField
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={handleLocationChange}
                />
                <Button variant="contained" onClick={handleConfirmLocation}>
                  Confirm
                </Button>
                <Button variant="contained" onClick={handleModalClose}>
                  Close
                </Button>
              </Stack>
            </Box>
          </Modal>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Location
          </Typography>
          <Stack spacing={2} mt={1} direction={{ xs: 'column', sm: 'row' }}>
            <Button variant="outlined" onClick={handleModalOpen}>
              Select Location
            </Button>

            <TextField
              disabled
              fullWidth
              placeholder={location}
              name="location"
              value={location}
              sx={{ width: { xs: '100%' }, mb: 3 }}
            />
          </Stack>

          <Typography variant="h5" mb="6" fontWeight="bold">
            Description
          </Typography>
          <Controller
            name="description"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                id="filled-multiline-static"
                sx={{ width: '100%', mt: 2 }}
                multiline
                rows={4}
                placeholder="Describe your problem..."
                variant="filled"
                error={Boolean(error)}
                helperText={error?.description}
              />
            )}
          />
          <LoadingButton
            sx={{
              mt: 1,
              float: 'right',
              width: '20%',
              backgroundColor: 'black',
              color: 'white',
              '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            }}
            size="large"
            variant="contained"
            loading={isSubmitting}
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </LoadingButton>
          <LoadingButton
            sx={{
              mt: 1,
              float: 'left',
              width: '30%',
              backgroundColor: 'black',
              color: 'white',
              '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            }}
            size="large"
            variant="contained"
            onClick={handleMechanic}
          >
            Check Status Of Mechanic
          </LoadingButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              position: 'unset !important',
            }}
          >
            <Box sx={style2}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Alloted Mechanic
              </Typography>

              <Image src={mechanicPhoto.src} sx={{ width: '100%', height: '200px' }} />

              <Stack mt={2}>
                <Typography variant="h6">Mechanic Name: </Typography>
                <Typography variant="body1">{mechanicName}</Typography>
              </Stack>
              <Stack mt={2}>
                <Typography variant="h6">Mechanic Phone Number: </Typography>
                <Typography variant="body1">{mechanicPhone}</Typography>
              </Stack>
              <Stack sx={{ textAlign: 'center' }} mt={3}>
                <Typography variant="h5">Your Mechanic will be there in 20 minutes</Typography>
                <Typography variant="h5">
                  You can contact {mechanicName} on given phone number
                </Typography>
                <Typography variant="h5">THANK YOU</Typography>
              </Stack>
              <Button
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  width: '100%',
                  mt: 1,
                }}
                onClick={handleRemove}
              >
                Remove Mechanic
              </Button>
              <Button
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  width: '100%',
                  mt: 3,
                }}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Modal>
          <Modal
            open={openError}
            onClose={handleCloseError}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              position: 'unset !important',
            }}
          >
            <Box sx={style3}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Submit form First Thank You!
              </Typography>

              <Button
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  width: '100%',
                  mt: 3,
                }}
                onClick={handleCloseError}
              >
                Close
              </Button>
            </Box>
          </Modal>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

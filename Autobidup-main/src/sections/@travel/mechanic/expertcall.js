import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Image } from '../../../components';
import man from 'src/Assets/Images/expertMan.png';
import { Grid, Button, Stack, Box, Typography, Modal } from '@mui/material';

//--------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: '10px',
  p: 6,
};
let calls = '';
export default function Expertcall({ item, updateLeftCalls }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('data reached', item);

  const handleCall = async (id) => {
    try {
      console.log('form is submiting', id);
      const response = await fetch('https://autobidup.pythonanywhere.com/mechanic/request_call', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expert_id: id }),
      });

      if (response.ok) {
        // API call successful
        const responseData = await response.json();

        calls = responseData['left calls'];
        updateLeftCalls(calls);
        console.log('response data', responseData);
        console.log('call done succesfully');
        setOpen(true);
      } else {
        // API call failed
        const errorData = await response.json();
        // Handle the error data as needed
      }
    } catch (error) {
      // Error occurred during the API call
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 8, md: 3 },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
        },
        pl: { sm: 2 },
        pr: { sm: 2 },
      }}
    >
      {item.map((value) => (
        <Box
          sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', m: 2 }}
          key={value.e_id}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} display="flex" alignItems="center">
              <Image
                alt={value.title}
                src={man.src}
                sx={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10%' }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h3">{value.name}</Typography>
              <Typography variant="h4" mt={1}>
                Lahore
              </Typography>
              <Stack spacing={2} mt={1} direction="row">
                <Typography variant="h5">Experience: </Typography>
                <Typography variant="h6" color="#CE9A00">
                  {' '}
                  + 2 years
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="end">
                <Button
                  sx={{
                    border: '1px solid #FFBE00',
                    color: '#FFBE00',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                    width: '20%',
                  }}
                  onClick={() => {
                    router.push({
                      pathname: '/travel/mechanic/profile',
                      query: { data: JSON.stringify(value) },
                    });
                  }}
                >
                  View Profile
                </Button>
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                    width: '20%',
                  }}
                  onClick={() => handleCall(value.e_id)}
                >
                  Call
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h3" component="h2">
                Your Call Request has been sent.
              </Typography>
              <Typography id="modal-modal-title" variant="h3" component="h2">
                Expert will vontact you shortly
              </Typography>
              <Typography id="modal-modal-title" variant="h3" component="h2">
                Thank You!
              </Typography>
              <Button
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  width: '100%',
                  mt: 1,
                }}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Modal>
        </Box>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

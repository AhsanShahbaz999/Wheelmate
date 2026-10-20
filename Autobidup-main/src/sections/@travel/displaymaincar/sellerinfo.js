import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import { Overview } from '../tours';

//--------------------------------------------------------------
Contactinfo.propTypes = {
  post: PropTypes.array.isRequired,
  name: PropTypes.array,
  phone: PropTypes.array,
};
export default function Contactinfo({ post, name, phone, car }) {
  // console.log('name',name);
  
  if (post) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      if (post) {
        let dict = {
          title: 'Seller Information',
          name: name,
          icon: userIcon,
          text: phone,
        };
        setComments([dict]);
      }
    }, []);
    return (
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666b', borderRadius: '8px', mt: 2 }}>
        <Overview overview={comments} />
        <Stack
          direction="row"
          spacing={5}
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#CE9A00"
        >
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="material-symbols:add-call" width="30" />
          </Box>
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="mdi:envelope" width="30" />
          </Box>
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="ri:facebook-fill" width="30" />
          </Box>
        </Stack>
      </Box>
    );
  }
  if (car) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      if (car) {
        let dict = {
          title: 'Seller Information',
          name: car.bidding_car.name,
          icon: userIcon,
          text: car.bidding_car.phone_no,
        };
        setComments([dict]);
      }
    }, []);
    return (
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666b', borderRadius: '8px', mt: 2 }}>
        <Overview overview={comments} />
        <Stack
          direction="row"
          spacing={5}
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#CE9A00"
        >
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="material-symbols:add-call" width="30" />
          </Box>
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="mdi:envelope" width="30" />
          </Box>
          <Box
            sx={{
              p: 1,
              boxShadow: '0 1px 10px #64666b',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon icon="ri:facebook-fill" width="30" />
          </Box>
        </Stack>
      </Box>
    );
  }
}
// ----------------------------------------------------------------------

import PropTypes from 'prop-types';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { Button, Grid, Box, Typography, ButtonGroup, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Use Next.js Image component

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

Itemcarasol.propTypes = {
  post: PropTypes.object.isRequired, // Changed from array to object
  name: PropTypes.string,
  price: PropTypes.string,
  images: PropTypes.string,
};

export default function Itemcarasol({ post, name, price, images }) {
  const carouselRef = useRef(null);
  const theme = useTheme();
  const router = useRouter();
  const [counter, setCounter] = useState(1);
  const [condition, setCondition] = useState(false);

  // Check if the user is logged in (using localStorage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('username') || '';
      if (value) {
        setCondition(true);
      } else {
        setCondition(false);
      }
    }
  }, []);

  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);

  const handleSubmit = (post) => {
    if (!condition) {
      router.push('/auth/logincover'); // Redirect to login page
      return;
    }

    if (counter) {
      post.quantity = counter;
    }
    setGlobalVariable([post]);
    router.push(`/travel/carRentals/cart/`);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={7}>
        <Box
          position="relative"
          justifyContent="center"
          sx={{ boxShadow: '0 12px 28px #64666b', borderRadius: '8px', width: '100%' }}
        >
          <Box p={5} mt={2}>
            <img
              src={`http://localhost:4000${images}`} // Corrected image path to be dynamically generated
              alt={name}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h4" color="#CE9A00">
            PKR {price}
          </Typography>

          <Stack direction="row" spacing={1} mt={3} display="flex" alignItems="center">
            <Typography fontWeight="bold">Quantity </Typography>

            <ButtonGroup
              size="small"
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #FFBE00',
                  color: '#FFBE00',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                }}
                disabled={counter <= 0}
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                -
              </Button>
              <Button disabled className="buttonCounter">
                {counter}
              </Button>
              <Button
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #FFBE00',
                  color: '#FFBE00',
                  '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                }}
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </Stack>
          <Button
            fullWidth
            sx={{
              float: 'right',
              backgroundColor: '#212B36',
              color: 'white',
              mt: 3,
              '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            }}
            disabled={!condition} // Disable if not logged in
            onClick={() => handleSubmit(post)}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

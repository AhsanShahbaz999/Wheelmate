import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { Item } from '../accessories';
import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import {
  FormControlLabel,
  FormControl,
  Typography,
  Box,
  Radio,
  Container,
  Grid,
  Stack,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
// ----------------------------------------------------------------------

let items = [];

export default function Shippinginfo({ post, price }) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  console.log(post);

  useState(() => {
    if (typeof window !== 'undefined') {
      if (JSON.parse(localStorage.getItem('cartItems')).length != 0) {
        items = JSON.parse(localStorage.getItem('cartItems'));
        // totalPrice = items.reduce((total, item) => {
        //   return total + (parseFloat(item?.price) || 0);
        // }, 0);
        console.log(items);
      }
    }
  }, []);
  var finalPrice = price + 100;
  // (post.price = String(finalPrice)),
  // (post.pid = toString(post.pid)),
  // (post.quantity = toString(post.quantity));
  // console.log('updated', post);

  const handleClickOpen = async () => {
    try {
      // Get username from localStorage
      const username = localStorage.getItem('username');
      if (!username) {
        alert('Please login to place an order');
        router.push('/auth/logincover');
        return;
      }

      const updatedPost = {
        price: String(finalPrice),
        product_ids: JSON.stringify(post.product_ids),
        quantity: JSON.stringify(post.quantity),
        username: username
      };

      // Send order to our backend
      const response = await fetch('http://localhost:4000/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Order placed successfully:', responseData);
        
        // Clear cart after successful order
        localStorage.removeItem('cartItems');
        
        // Show success dialog
        setOpen(true);
      } else {
        const errorData = await response.json();
        alert('Failed to place order: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const handleClose = () => {
    setOpen(false);
    router.push('/travel/carRentals/storelanding/');
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', textAlign: 'left' }}>
        <Typography variant="h3" mb={3} mt={6}>
          Payment
        </Typography>
        <Grid spacing={2} container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Select Payment Method</Typography>
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <FormControlLabel value="cash" control={<Radio checked />} label="Cash on Delivery" />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Cart</Typography>

            <Item item={items} />

            <Typography variant="h4">Order Summary</Typography>
            <Stack direction="row" style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h4" color="#CE9A00">
                PKR {price}
              </Typography>
            </Stack>
            <Stack direction="row" style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">Shipping</Typography>
              <Typography variant="h4" color="#CE9A00">
                PKR 100
              </Typography>
            </Stack>
            <Divider />
            <Stack mb={4} direction="row" style={{ justifyContent: 'space-between' }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h4" color="#CE9A00">
                PKR {finalPrice}
              </Typography>
            </Stack>
            <Button
              sx={{
                width: '100%',
                float: 'right',
                backgroundColor: '#212B36',
                color: 'white',
                mb: 4,
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={handleClickOpen}
            >
              Place Order
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              sx={{ textalign: 'center' }}
            >
              <DialogTitle id="alert-dialog-title" variant="h2" color="#CE9A00">
                {' '}
                <Icon icon="il:heart" />
              </DialogTitle>
              <DialogContent>
                <DialogContentText variant="h3" id="alert-dialog-description" color="black">
                  Thank You!
                </DialogContentText>
                <DialogContentText variant="h5" id="alert-dialog-description" color="black" mt={2}>
                  Your Order has been placed.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  textAlign="center"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: '#212B36',
                    color: 'white',
                    '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

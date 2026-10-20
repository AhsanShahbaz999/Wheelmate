import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { TextIconLabel, Iconify, Image } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  Divider,
  Stack,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../tours';

//--------------------------------------------------------------
Order.propTypes = {
  totalPrice: PropTypes.array,
  post: PropTypes.array,
  data: PropTypes.array,
};
export default function Order({post, data, totalPrice}) {
  const router = useRouter();
  const convertedTotalPrice = parseFloat(totalPrice);
  // const finalPrice = convertedTotalPrice + 100;
  console.log("entered order", data)


  return (
    <Box
      sx={{
        p: 3,
        // height: '100%',
        // border: '1px solid black',
        // boxShadow: '0 1px 10px #64666B',
        // borderRadius: '8px',
        mb: 1,
        mt: 2,
        background: 'white',
      }}
    >
      <Typography variant="h4">Total Amount</Typography>
      {/* <Stack direction="row" style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Subtotal</Typography>
        <Typography variant="h4" color="#CE9A00">
         PKR  {totalPrice}
        </Typography>
      </Stack>
      <Stack direction="row" style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Shipping</Typography>
        <Typography variant="h4" color="#CE9A00">
          PKR 100
        </Typography>
      </Stack> */}
      <Divider />
      <Stack direction="row" style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h4" color="#CE9A00">
          PKR {totalPrice}
        </Typography>
      </Stack>
      <Button
        sx={{
          width: "100%",
          mt:3,
          backgroundColor: '#212B36',
          color: 'white',
          '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
        }}
        onClick={() => {
          const updatedPost = {
            ...data,
            price: totalPrice,
          };
          console.log("price added",updatedPost)
          router.push({
            pathname: '/travel/carRentals/shipping',
            query: { data: JSON.stringify(updatedPost), post: JSON.stringify(post) },
          });
        }}
      >
        Checkout
      </Button>
    </Box>
  );
}

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';
import * as React from 'react';
import location from '@iconify/icons-carbon/location';
import { Icon } from '@iconify/react';

import {
  Stack,
  Box,
  Typography,
} from '@mui/material';
import { Sellerinfo } from '.';

//--------------------------------------------------------------
Contactinfo.propTypes = {
  post: PropTypes.array.isRequired,
  make: PropTypes.array,
  variant: PropTypes.array,
  price: PropTypes.array,
  year: PropTypes.array,
};
export default function Contactinfo({ post, make, variant, price, year }) {
  // console.log('make', post);
  if (post) {
    return (
      <Box>
        <Typography variant="h3">{`${make} ${variant} ${year}`}</Typography>
        <Typography variant="h4" color="#CE9A00">
          PKR {price}
        </Typography>

        <Stack direction="row" spacing={1} display="flex" alignItems="center">
          <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" />
          <Typography fontWeight="bold">Lahore</Typography>
        </Stack>
        <Sellerinfo post={post} name={post?.seller_name || ''} phone={post?.seller_phone || ''} />
      </Box>
    );
  }
}

// ----------------------------------------------------------------------

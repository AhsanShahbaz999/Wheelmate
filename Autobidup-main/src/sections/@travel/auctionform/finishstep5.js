import PropTypes from 'prop-types';
import * as React from 'react';

import { useRouter } from 'next/router';

import {
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';

// ----------------------------------------------------------------------

export default function Finishstep5({ formValues, handleInputChange, errors }) {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '5%' },
          }}
        >
          <div>
            <Typography fontSize="14px" fontWeight="bold">
              AD Title *
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter AD Title"
              name="ad_titlex"
              value={formValues.ad_titlex}
              onChange={handleInputChange}
              error={!!errors.ad_titlex}
              helperText={errors.ad_titlex}
              sx={{ width: { xs: '100%' } }}
            />
          </div>
          <div>
            <Typography fontSize="14px" fontWeight="bold">
              Starting Bid *
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter Starting Bid"
              name="staring_bid"
              value={formValues.staring_bid}
              onChange={handleInputChange}
              error={!!errors.staring_bid}
              helperText={errors.staring_bid}
              sx={{ width: { xs: '100%' } }}
            />
          </div>

          <div>
            <Typography fontSize="14px" fontWeight="bold">
              Bidding Date *
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter Bidding Date"
              name="bid_datx"
              value={formValues.seller_name}
              onChange={handleInputChange}
              error={!!errors.bid_datx}
              helperText={errors.bid_datx}
              sx={{ width: { xs: '100%' } }}
            />
          </div>
          <div>
            <Typography fontSize="14px" fontWeight="bold">
              Bidding Time *
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter Bidding Time"
              name="bid_timex"
              value={formValues.bid_timex}
              onChange={handleInputChange}
              error={!!errors.bid_timex}
              helperText={errors.bid_timex}
              sx={{ width: { xs: '100%' } }}
            />
          </div>

          <Box>
            <Typography fontSize="14px" fontWeight="bold">
              Description
            </Typography>
            <TextField
              id="filled-multiline-static"
              sx={{ width: '100%' }}
              multiline
              rows={4}
              placeholder="Describe your car..."
              variant="filled"
              name="ad_descriptionx"
              value={formValues.ad_descriptionx}
              onChange={handleInputChange}
              error={!!errors.ad_descriptionx}
              helperText={errors.ad_descriptionx}
            />
            <Typography variant="body3" textAlign="right" fontWeight="bold">
              Word limit is 1000
            </Typography>
          </Box>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

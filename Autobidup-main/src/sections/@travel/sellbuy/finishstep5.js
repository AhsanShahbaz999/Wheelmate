import PropTypes from 'prop-types';
import * as React from 'react';

import { Typography, Stack, Box, TextField, Container } from '@mui/material';
//------------------------------------------------------------------------------------
export default function Finishstep5({ formValues, handleInputChange, errors }) {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '5%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Vehicle Description
          </Typography>

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
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              error={!!errors.description}
              helperText={errors.description}
            />
            <Typography variant="body3" textAlign="right" fontWeight="bold">
              Word limit is 1000
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 6,
              mr: { md: '25%' },
            }}
          >
            <Typography variant="h5" mb="6" fontWeight="bold">
              Contact Information
            </Typography>
            <Stack spacing={2} mt="4" direction={{ xs: 'column' }}>
              <div>
                <Typography fontSize="14px" fontWeight="bold">
                  Seller Name *
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Enter Seller Name"
                  name="seller_name"
                  value={formValues.seller_name}
                  onChange={handleInputChange}
                  error={!!errors.seller_name}
                  helperText={errors.seller_name}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
              </div>
              <div>
                <Typography fontSize="14px" fontWeight="bold">
                  Phone Number *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Phone Number"
                  name="seller_phone"
                  value={formValues.seller_phone}
                  onChange={handleInputChange}
                  error={!!errors.seller_phone}
                  helperText={errors.seller_phone}
                  sx={{ width: { xs: '100%', sm: '50%' } }}
                />
                <Typography variant="body3" fontWeight="bold">
                  Enter genuine number of 11 digits
                </Typography>
              </div>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

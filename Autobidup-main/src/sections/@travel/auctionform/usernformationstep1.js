import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';

import { useRouter } from 'next/router';

import {
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
//------------------------------------------------------------------------------------

export default function Userinformationstep1({ formValues, handleInputChange, errors }) {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '35%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="5px">
            Enter Your Information
          </Typography>

          <Typography variant="h5" textAlign="left" mt={3}>
            Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ width: { xs: '100%' } }}
          />

          <Typography variant="h5" textAlign="left" mt={3}>
            Phone Number
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Phone Number *"
            name="phone_no"
            value={formValues.phone_no}
            onChange={handleInputChange}
            error={!!errors.phone_no}
            helperText={errors.phone_no}
            sx={{ width: { xs: '100%' }, mb: 3 }}
          />
          {/* <FormControl sx={{mt:4}}>
            <Typography fontSize="16px" fontWeight="bold">
              Consignor 
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="dealer"
              name="radio-buttons-group"
            >
              <FormControlLabel value="dealer" control={<Radio />} label="Dealer " />
              <FormControlLabel value="private party" control={<Radio />} label="Private Party" />
            </RadioGroup>
          </FormControl> */}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

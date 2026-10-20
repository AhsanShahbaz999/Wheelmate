import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import {
  Radio,
  RadioGroup,
  Typography,
  Button,
  Box,
  FormControl,
  Container,
  FormLabel,
  TextField,
} from '@mui/material';

// ----------------------------------------------------------------------
export default function Enterpricestep2({ formValues, handleInputChange, errors }) {
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
          <Typography variant="h3" textAlign="left" pb="15px">
            Expected Selling Price
          </Typography>
          <Typography variant="h5" textAlign="left">
            Price
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Price"
            name="price"
            value={formValues.price}
            onChange={handleInputChange}
            error={!!errors.price}
            helperText={errors.price}
            sx={{ width: { xs: '100%', sm: '50%' } }}
          />
          <Typography fontSize="13px" color="#181a1f;" fontWeight="bold">
            Please enter realistic price to get more genuine responses.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

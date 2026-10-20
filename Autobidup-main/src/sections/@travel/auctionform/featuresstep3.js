import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
// icons
// import Image from 'next/image';
// @mui

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

const check = [
  {
    value: '1',
    label: 'Airbagsx',
  },
  {
    value: '2',
    label: 'Acx',
  },
  {
    value: '3',
    label: 'Alloy_wheelsx',
  },
  {
    value: '4',
    label: 'Antibrakingsystemx',
  },
  {
    value: '5',
    label: 'Cool_boxx',
  },
  {
    value: '6',
    label: 'Folding_seatsx',
  },
  {
    value: '7',
    label: 'Immoblizerx',
  },
  {
    value: '8',
    label: 'Power_door_locksx',
  },
];

const enginetype = [
  {
    value: '1',
    label: 'Petrol',
  },
  {
    value: '2',
    label: 'Diesal',
  },
  {
    value: '3',
    label: 'CNG',
  },
];
const engineCapacity = [
  {
    value: '1',
    label: '1000',
  },
  {
    value: '2',
    label: '1200',
  },
  {
    value: '3',
    label: '1500',
  },
  {
    value: '4',
    label: '2000',
  },
];
const transmission = [
  {
    value: '1',
    label: 'Automatic',
  },
  {
    value: '2',
    label: 'Manual',
  },
];
const assembly = [
  {
    value: '1',
    label: 'Local',
  },
  {
    value: '2',
    label: 'Imported',
  },
];
export default function Featuresstep3({ formValues, handleInputChange,formValues1p1, handleInputChange1p1, errors }) {

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
            Features and Specifications
          </Typography>
          <Box
            sx={{
              mr: { md: '25%' },
            }}
          >
            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
              <TextField
                id="outlined-select-currency"
                select
                name="engine_typex"
                label="Engine Type *"
                value={formValues.engine_typex}
                onChange={handleInputChange}
                error={!!errors.engine_typex}
                helperText={errors.engine_typex}
                sx={{ width: '100%' }}
              >
                {enginetype.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency"
                select
                label="Engine Capacity *"
                name="engine_capacityx"
                value={formValues.engine_capacityx}
                onChange={handleInputChange}
                error={!!errors.engine_capacityx}
                helperText={errors.engine_capacityx}
                sx={{ width: '100%' }}
              >
                {engineCapacity.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
            <TextField
                id="outlined-select-currency"
                select
                label="Transmission *"
                name="transmissionx"
                value={formValues.transmissionx}
                onChange={handleInputChange}
                error={!!errors.transmissionx}
                helperText={errors.transmissionx}
                sx={{ width: '100%' }}
              >
                {transmission.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency"
                select
                label="Assembly *"
                name="assemblyx"
                value={formValues.assemblyx}
                onChange={handleInputChange}
                error={!!errors.assemblyx}
                helperText={errors.assemblyx}
                sx={{ width: '100%' }}
              >
                {assembly.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Box>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Features
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 1, md: 1 },
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(5, 1fr)',
              },
              justifyContent: 'space-evenly',
            }}
          >
            {check.map((option) => (
              <span key={option.value}>
                <Checkbox
                  name={option.label.toLowerCase()}
                  checked={formValues1p1[option.label.toLowerCase()] === 'True'}
                  onChange={handleInputChange1p1}
                />
                {option.label}
              </span>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

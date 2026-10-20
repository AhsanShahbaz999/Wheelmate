import PropTypes from 'prop-types';
import * as React from 'react';

import { useRouter } from 'next/router';

import { Typography, Stack, Box, TextField, Container, MenuItem } from '@mui/material';

// ----------------------------------------------------------------------
const Regcity = [
  {
    value: '1',
    label: 'Lahore',
  },
  {
    value: '2',
    label: 'Islamabad',
  },
  {
    value: '3',
    label: 'Karachi',
  },
];
const city = [
  {
    value: '1',
    label: 'Lahore',
  },
];
const color = [
  {
    value: '1',
    label: 'Black',
  },
  {
    value: '2',
    label: 'White',
  },
  {
    value: '3',
    label: 'Blue',
  },
];
const mileage = [
  {
    value: '1',
    label: '10000',
  },
  {
    value: '2',
    label: '30000',
  },
  {
    value: '3',
    label: '50000',
  },
  {
    value: '4',
    label: '70000',
  },
  {
    value: '5',
    label: '90000',
  },
];
const year = [
  {
    value: '1',
    label: '1990',
  },
  {
    value: '2',
    label: '2000',
  },
  {
    value: '3',
    label: '2010',
  },
  {
    value: '4',
    label: '2020',
  },
  {
    value: '5',
    label: '2023',
  },
];
const make = [
  {
    value: '1',
    label: 'Toyota',
  },
  {
    value: '2',
    label: 'Suzuki',
  },
  {
    value: '3',
    label: 'Honda',
  },
];
const model = [
  {
    value: '1',
    label: 'Corolla',
  },
  {
    value: '2',
    label: 'Mehran',
  },
  {
    value: '3',
    label: 'City',
  },
];
const variant = [
  {
    value: '1',
    label: 'Basic',
  },
  {
    value: '2',
    label: 'Full Option',
  },
  {
    value: '3',
    label: 'Top of the line',
  },
];
const bodytype = [
  {
    value: '1',
    label: 'HatchBack',
  },
  {
    value: '2',
    label: 'Sedan',
  },
  {
    value: '3',
    label: 'SUV',
  },
  {
    value: '4',
    label: 'Crossover',
  },
  {
    value: '5',
    label: 'Minivan',
  },
];
export default function Carinformationstep1({ formValues, handleInputChange, errors }) {
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
            Enter Car Information
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Registration City *"
              name="reg_city"
              value={formValues.reg_city}
              onChange={handleInputChange}
              error={!!errors.reg_city}
              helperText={errors.reg_city}
              sx={{ width: '100%' }}
            >
              {Regcity.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="City *"
              name="city"
              sx={{ width: '100%' }}
              value={formValues.city}
              onChange={handleInputChange}
              error={!!errors.city}
              helperText={errors.city}
            >
              {city.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack mt="12px">
            <TextField
              id="outlined-select-currency"
              select
              label="Mileage *"
              name="mileage"
              value={formValues.mileage}
              onChange={handleInputChange}
              error={!!errors.mileage}
              helperText={errors.mileage}
              sx={{ width: '100%' }}
            >
              {mileage.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Typography variant="h5" mb="6" fontWeight="bold">
            Car Info *
          </Typography>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Year *"
              name="year"
              value={formValues.year}
              onChange={handleInputChange}
              error={!!errors.year}
              helperText={errors.year}
              sx={{ width: '100%' }}
            >
              {year.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Make *"
              name="make"
              value={formValues.make}
              onChange={handleInputChange}
              error={!!errors.make}
              helperText={errors.make}
              sx={{ width: '100%' }}
            >
              {make.map((option) => (
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
              label="Model *"
              name="model"
              value={formValues.model}
              onChange={handleInputChange}
              error={!!errors.model}
              helperText={errors.model}
              sx={{ width: '100%' }}
            >
              {model.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Variant *"
              name="variant"
              value={formValues.variant}
              onChange={handleInputChange}
              error={!!errors.variant}
              helperText={errors.variant}
              sx={{ width: '100%' }}
            >
              {variant.map((option) => (
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
              label="Color *"
              name="color"
              value={formValues.color}
              onChange={handleInputChange}
              error={!!errors.color}
              helperText={errors.color}
              sx={{ width: '100%' }}
            >
              {color.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Body Type *"
              name="bodytype"
              value={formValues.bodytype}
              onChange={handleInputChange}
              error={!!errors.bodytype}
              helperText={errors.bodytype}
              sx={{ width: '100%', mt: '12px' }}
            >
              {bodytype.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

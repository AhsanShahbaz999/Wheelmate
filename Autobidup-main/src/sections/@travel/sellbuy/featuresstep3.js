import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Checkbox,
  Typography,
  Stack,
  Box,
  TextField,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
// ----------------------------------------------------------------------
const check = [
  {
    value: '1',
    label: 'Airbags',
  },
  {
    value: '2',
    label: 'Airconditioner',
  },
  {
    value: '3',
    label: 'Alloywheels',
  },
  {
    value: '4',
    label: 'Antilockbreakingsystem',
  },
  {
    value: '5',
    label: 'Coolbox',
  },
  {
    value: '6',
    label: 'Cupholders',
  },
  {
    value: '7',
    label: 'Foldingrearseat',
  },
  {
    value: '8',
    label: 'Immobilizer',
  },
  {
    value: '9',
    label: 'Powerdoorlocks',
  },
  {
    value: '10',
    label: 'Powersteering',
  },
  {
    value: '11',
    label: 'Powerwindows',
  },
  {
    value: '12',
    label: 'Powermirrors',
  },
  {
    value: '13',
    label: 'Rearwiper',
  },
  {
    value: '14',
    label: 'Tractioncontrol',
  },
  {
    value: '15',
    label: 'Rearseatent',
  },
  {
    value: '16',
    label: 'Climatecontrol',
  },
  {
    value: '17',
    label: 'Rearacvents',
  },
  {
    value: '18',
    label: 'Frontspeaker',
  },
  {
    value: '19',
    label: 'Rearspeaker',
  },
  {
    value: '20',
    label: 'Armrests',
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
export default function Featuresstep3({
  formValues,
  formValues3p1,
  handleInputChange,
  handleInputChange3p1,
  errors,
}) {
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
                name="engine_type"
                label="Engine Type *"
                value={formValues.engine_type}
                onChange={handleInputChange}
                error={!!errors.engine_type}
                helperText={errors.engine_type}
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
                name="engine_capacity"
                value={formValues.engine_capacity}
                onChange={handleInputChange}
                error={!!errors.engine_capacity}
                helperText={errors.engine_capacity}
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
                name="transmission"
                value={formValues.transmission}
                onChange={handleInputChange}
                error={!!errors.transmission}
                helperText={errors.transmission}
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
                name="assembly"
                value={formValues.assembly}
                onChange={handleInputChange}
                error={!!errors.assembly}
                helperText={errors.assembly}
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
                  checked={formValues3p1[option.label.toLowerCase()]}
                  onChange={handleInputChange3p1}
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

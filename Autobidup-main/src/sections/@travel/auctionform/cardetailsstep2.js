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
  Stack,
  MenuItem,
  Typography,
  FormControlLabel,
  Box,
  FormControl,
  Container,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
// ----------------------------------------------------------------------
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
const tans_type = [
  {
    value: '1',
    label: 'Automatic',
  },
  {
    value: '2',
    label: 'Manual',
  },
];
const car_location = [
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

export default function Enterpricestep2({ formValues, handleInputChange, errors }) {
  const router = useRouter();
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container sx={{ width: '100%', padding: '20px', textAlign: 'left' }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          sx={{
            ml: { md: '5%' },
            mr: { md: '35%' },
          }}
        >
          <Typography variant="h3" textAlign="left" pb="15px">
            Car Details
          </Typography>

          <Typography variant="h5" textAlign="left" mt={3}>
            Chassis Number
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Chassis Number *"
            name="chassis_no"
            value={formValues.chassis_no}
            onChange={handleInputChange}
            error={!!errors.chassis_no}
            helperText={errors.chassis_no}
            sx={{ width: { xs: '100%' } }}
          />

          <Typography variant="h5" textAlign="left" mt={3}>
            Engine Number
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Engine Number *"
            name="engine_no"
            value={formValues.engine_no}
            onChange={handleInputChange}
            error={!!errors.engine_no}
            helperText={errors.engine_no}
            sx={{ width: { xs: '100%' }, mb: 3 }}
          />

          <Typography variant="h5" textAlign="left" mt={2}>
            Specifications
          </Typography>
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
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
          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
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
          </Stack>

          <Stack spacing={2} mt="12px" direction={{ xs: 'column', sm: 'row' }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Transmission *"
              name="tans_type"
              value={formValues.tans_type}
              onChange={handleInputChange}
              error={!!errors.tans_type}
              helperText={errors.tans_type}
              sx={{ width: '100%' }}
            >
              {tans_type.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Car Location *"
              name='car_location'
              value={formValues.car_location}
              onChange={handleInputChange}
              error={!!errors.car_location}
              helperText={errors.car_location}
              sx={{ width: '100%' }}
            >
              {car_location.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <FormControl sx={{ mt: 4 }}>
            <Typography fontSize="16px" fontWeight="bold">
              Has the car been modified?
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              value={formValues.modified}
              onChange={handleInputChange}
              name="modified"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <Typography fontSize="16px" fontWeight="bold">
              Does your car fall under vintage or modified?
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Modified"
              value={formValues.car_type}
              onChange={handleInputChange}
              name="car_type"
            >
              <FormControlLabel value="Modified" control={<Radio />} label="Modified " />
              <FormControlLabel value="Vintage" control={<Radio />} label="Vintage" />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* </form> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

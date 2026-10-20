import PropTypes from 'prop-types';
import * as React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
// @utils
import mechanic from '../../../assets/images/mechanicform.jpg';
import { Icon } from '@iconify/react';
const styling = {
  backgroundImage: `url(${mechanic.src})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
// ----------------------------------------------------------------------
const currencie = [
  {
    icon: 'mdi:tyre',
    label: 'Accelerated Diagnosis',
    description:
      'Mechanics can quickly identify the root cause of the problem, allowing them to make repairs in a more timely and efficient manner.',
  },
  {
    icon: 'mdi:account-service',
    label: 'Certified Technicians',
    description:
      'Certified technician ensures that your vehicle is in capable hands, and the repair work is done to the highest standard.',
  },
  {
    icon: 'bi:tools',
    label: 'High Quality Service',
    description:
      'A reliable and experienced mechanic will not only diagnose and fix the issue at hand, but also perform preventative maintenance to avoid future problems',
  },
];

export default function Trustmechanic({ tours, icons, services }) {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden',
        backgroundImage: 'linear-gradient(89.9deg, #E19A3C 0.09%, #FFD60E 101.61%)',
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          mt={4}
          mb={4}
          color="black"
          textAlign="center"
        >
          {currencie.map((value) => (
            <Grid key={value.icon} item xs={12} sm={4}>
              <Icon icon={value.icon} width="40%" />
              <Typography variant="h3">{value.label}</Typography>
              <Typography variant="h6">{value.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

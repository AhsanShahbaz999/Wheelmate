import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router';
//images
import landing from '../../../Assets/Images/mechanicbg.jpg';
//sections
import Pageimage from '../../../sections/@travel/landing/pageimage';
//mui
import { Grid, Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Apply from '../../../Assets/Images/space.jpg';
import Applying from '../../../Assets/Images/wood_.jpg';

//--------------------------------------------------------------
const usedimage = [
  {
    image: landing,
    text: 'Best Mechanics and Experts ',
  },
];
export default function Landing() {
  const router = useRouter();
  return (
    <>
      <Pageimage images={usedimage} />
      <Grid container spacing={2} justifyContent="center" mt={3} mb={6}>
        <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'right',
              width: '100%',
              height: '100%',
               backgroundImage: `url(${Apply?.src})`,
              backgroundSize: '40%',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography variant="h4" pb={2}>
              Mechanic
            </Typography>
            <Typography variant="body1" pb={1} >
              ARIF SAB: 0312-3456789
            </Typography>
            <Typography variant="body1" pb={1} >
              ARIF SAB: 0312-3456789
            </Typography>
            <Typography variant="body1" pb={1} >
              ARIF SAB: 0312-3456789
            </Typography>

              
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'left',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Applying.src})`,
              backgroundSize: '40%',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',

            }}
          >
            <Typography variant="h4" pb={2}>
              Expert
            </Typography>
            <Typography variant="body1" pb={1} >
              ARIF SAB: 0312-3456789
            </Typography>
            <Typography variant="body1" pb={1} >
              ARIF SAB: 0312-3456789
            </Typography>
            <Typography variant="body1" pb={1} >
              ARIF SAB: 0312-3456789
            </Typography>
            
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

// ----------------------------------------------------------------------

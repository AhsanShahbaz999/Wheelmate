import PropTypes from 'prop-types';
import * as React from 'react';
import { Image } from '../../../components';

import { Box, Typography } from '@mui/material';

//--------------------------------------------------------------

Pageimage.propTypes = {
  images: PropTypes.array.isRequired,
};
export default function Pageimage({ images }) {
  return (
    <>
      {images.map((value) => (
        <Box sx={{ position: 'relative', textAlign: 'center' }} key={value.image}>
          <Image
            alt="hero"
            src={value.image.src}
            marginTop={{ xs: '10%', sm: '0' }}
            sx={{ height: '600px', width: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              // background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)',
              textShadow: '0 2px 3px rgba(0, 0, 0, 0.6)',
            }}
          >
            <Typography variant="h2">{value.text}</Typography>
          </Box>
        </Box>
      ))}
    </>
  );
}

// ----------------------------------------------------------------------

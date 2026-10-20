import PropTypes from 'prop-types';

import * as React from 'react';

import { useRouter } from 'next/router';

import { Typography,Stack, Box, Container } from '@mui/material';
// components
import { Image } from '../../../components';
import { Icon } from '@iconify/react';
import cssStyles from '../../../utils/cssStyles';
import { styled, alpha } from '@mui/material/styles';


// ----------------------------------------------------------------------
// const RootStyle = styled(Stack)(({ theme }) => ({
//   padding: theme.spacing(8, 0),
//   ...cssStyles(theme).bgGradient({
//     direction: 'top',
//     startColor: alpha(theme.palette.grey[500], 0),
//     endColor: alpha(theme.palette.grey[500], 0.13),
//   }),
//   [theme.breakpoints.up('md')]: {
//     padding: theme.spacing(10, 0),
//   },
// }));

BusinessStrategies.propTypes = {
  icons: PropTypes.array.isRequired,
  tours: PropTypes.array.isRequired,
};
export default function BusinessStrategies({ tours, icons }) {
  const router = useRouter();

  return (
    // <RootStyle>
      <Container sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box
          sx={{
            textAlign: 'center',
            m: 6,
            display: 'grid',
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(3, 1fr)',
            },
            // py: 5,
            pl: { md: 2 },
            pr: { md: 2 },
          }}
        >
          {icons?.map((value) => (
            <div key={value.title}>
              <Box sx={{ mb: 5, color: 'black' }}>
                <Icon icon={value.icon} color="#FFBE00" width="30%" height="100" mx="auto" />
                {/* <Image src={value.icon.src} color="yellow !important" sx={{ width: '30%', height: '100', mx: 'auto' }} /> */}
                <Typography fontSize="22px" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  {value.title}
                </Typography>
                <Typography fontSize="16px">{value.description}</Typography>
              </Box>
            </div>
          ))}
        </Box>
      </Container>
    // </RootStyle>
  );
}

// ----------------------------------------------------------------------

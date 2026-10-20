import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
// components
import {
  Image,
  TextMaxLine,
} from '../../../components';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
TravelLandingIntroduceOurServices.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function TravelLandingIntroduceOurServices({data}) {
  const router = useRouter();
  return (
    <>
      <RootStyle>
        <Typography variant="h3" textAlign="center" alignItems="center" pb="25px">
          Our Services
        </Typography>

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {data?.map((value) => (
              <div key={value.title}>
                <Image
                  src={value.image.src}
                  sx={{
                    width: '100%',
                    height: 250,
                    mx: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
                <Stack >
                  <TextMaxLine variant="h6" asLink persistent>
                    {' '}
                    {value.title}
                  </TextMaxLine>
                  <Typography sx={{ fontSize: '0.875rem' }} asLink persistent>
                    {' '}
                    {value.description}{' '}
                  </Typography>
                  <TextMaxLine variant="h6" asLink persistent onClick={() => router.push(value.path)}>
                    {value.link}{' '}
                  </TextMaxLine>
                </Stack>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
    </>
  );
}

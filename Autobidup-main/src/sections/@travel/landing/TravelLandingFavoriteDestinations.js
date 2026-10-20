import PropTypes from 'prop-types';
// icons
import cssStyles from '../../../utils/cssStyles';

// @mui
import { alpha, styled } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Box } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import { Image, BgOverlay, Iconify, TextMaxLine, TextIconLabel } from '../../../components';

// ----------------------------------------------------------------------

const LINES = [
  'First Class',
  '5 Star',
  'COD all over Lahore',
  'Latest Products for Cars',
  'Trendy items ',
];

// ----------------------------------------------------------------------
const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  ...cssStyles(theme).bgGradient({
    direction: 'top',
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

TravelLandingFavoriteDestinations.propTypes = {
  tours: PropTypes.array,
};

export default function TravelLandingFavoriteDestinations({ tours }) {
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h2">Our Store Products</Typography>
            <Typography sx={{ my: 3, color: 'text.secondary' }}>
              Best accessories of cars available provided through our reliable services
            </Typography>

            <Stack spacing={2}>
              {LINES.map((line) => (
                <TextIconLabel
                  key={line}
                  icon={
                    <Box
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                  }
                  value={line}
                  sx={{ typography: 'body1' }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 4, md: 3 }}>
              {tours?.map((tour, index) => (
                <Grid
                  key={tour.id}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    ...(index === 1 && {
                      display: { md: 'inline-flex' },
                      alignItems: { md: 'flex-end' },
                    }),
                  }}
                >
                  <DestinationItem tour={tour} order={index % 3} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

DestinationItem.propTypes = {
  order: PropTypes.number,
  tour: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    path: PropTypes.string,
    button: PropTypes.string,
  }),
};

function DestinationItem({ tour, order }) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 6), transparent)',
      }}
    >
      {/* <BgOverlay /> */}
      <Image
        // alt={location}
        src={tour.img.src}
        ratio={(!isDesktop && '1/1') || (order && '1/1') || '4/6'}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          left: 0,
          bottom: 0,
          zIndex: 9,
          color: 'common.white',
          position: 'absolute',
        }}
      >
        <TextMaxLine variant="h4" line={1}>
          {tour.name}
        </TextMaxLine>
      </Stack>
    </Box>
  );
}

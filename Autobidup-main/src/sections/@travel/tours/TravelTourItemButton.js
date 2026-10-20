import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import arrow from '@iconify/icons-carbon/arrow-right';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

// next
import NextLink from 'next/link';
// @mui
import {
  Divider,
  Stack,
  Card,
  Typography,
  Box,
  Button,
  Grid,
  Container,
  CardActionArea,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// routes
import Routes from '../../../routes';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import {
  Image,
  Iconify,
  RatingLabel,
  TextMaxLine,
  TextIconLabel,
  FavoriteButton,
  SvgIconStyle,
  RootStyle,
  ContainerStyle,
  Slider,
} from '../../../components';
// next
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
import { width } from '@mui/system';

// ----------------------------------------------------------------------

// TravelTourItem.propTypes = {
//   tour: PropTypes.shape({
//     coverImg: PropTypes.string,
//     duration: PropTypes.string,
//     favorited: PropTypes.bool,
//     id: PropTypes.string,
//     location: PropTypes.string,
//     price: PropTypes.number,
//     priceSale: PropTypes.number,
//     ratings: PropTypes.number,
//     slug: PropTypes.string,
//   }),
// };

TravelTourItemButton.propTypes = {
  travelButtons: PropTypes.array.isRequired,
};
export default function TravelTourItemButton({ travelButtons }) {
  const router = useRouter();
  const [favorite, setFavorite] = useState('');

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {travelButtons?.map((tour) => (
        <Card
          sx={{
            display: 'flex',
            width: '100%',
            mt: 3,
            py: 3,
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width: 1 }}>
            <CardContent
              sx={{ flex: '1 0 auto', py: '0 !important', textAlign: { xs: 'center', md: 'left' } }}
            >
              <Typography component="div" fontSize="14px" fontWeight="bold">
                {tour.question}
              </Typography>
              <Typography color="black" fontSize="13px" component="div">
                <p>{tour.paragraph}</p>
              </Typography>
            </CardContent>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              textAlign: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
            }}
          >
            {/* <CardContent> */}
            <LoadingButton
              // fullWidth
              
              size="large"
              type="submit"
              variant="contained"
              sx={{ mr: {md:6} }}
              onClick={() => router.push(tour.path)}
            >
              {tour.button}
            </LoadingButton>
            {/* </CardContent> */}
          </Box>
        </Card>
      ))}
    </Box>
  );
}

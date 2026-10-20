import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import arrow from '@iconify/icons-carbon/arrow-right';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Box } from '@mui/material';
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
} from '../../../components';

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

export default function TravelTourItemRoutes({ tour }) {
  const [favorite, setFavorite] = useState('');

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card padding-top="-500px !important">
      <Stack spacing={0.5} sx={{height: '110px', width: '100%' }}>
        <TextMaxLine variant="h6" sx={{display: 'flex', p: 2, alignItems: 'center', gap: '5px'}}>
          {tour.name1} <Iconify icon={arrow} sx={{ fontSize: '16px', color: 'gray' }} />{' '}
          {tour.name2}
        </TextMaxLine>
        <TextMaxLine sx={{px: 2}}>{tour.dis}</TextMaxLine>
      </Stack>
    </Card>
  );
}
function MaxLine({ icon }) {
  return (
    <TextMaxLine
      InputProps={{
        startAdornment: icon,
      }}
      l
    />
  );
}

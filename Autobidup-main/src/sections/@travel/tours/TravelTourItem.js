import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import timeIcon from '@iconify/icons-carbon/time';
// next
import NextLink from 'next/link';
// @mui
import { Container, Stack, Card, Typography, Box } from '@mui/material';
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
TravelTourItem.propTypes = {
  tourr: PropTypes.array.isRequired,
};
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

export default function TravelTourItem({ tourr }) {
  return (
    <Box sx={{m:"30px"}}>
    <Card
      sx={{ outline: '0.01px solid black', borderRadius: '5px'}}
    >
      <Image
        src={tourr.image}
        sx={{
          width: '100%',
          height: '40vh !important',
          '&:hover img': { transform: 'scale(0.92)' },
          transition: 'transform 0.1s ease-out',
        }}
      />
      <Stack spacing={0.5} sx={{ p: 2.5, height: '100px' }}>
        <TextMaxLine variant="h6" asLink persistent>
          {tourr.name}
        </TextMaxLine>
        <TextMaxLine sx={{ fontSize: '0.875rem' }} asLink persistent>
          {tourr.dis}
        </TextMaxLine>
      </Stack>
    </Card>
    </Box>
  );
}

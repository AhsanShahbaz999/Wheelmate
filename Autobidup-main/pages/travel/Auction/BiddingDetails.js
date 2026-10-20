import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
// @mui
import { Container, Grid, Box } from '@mui/material';
// utils
import { useState, useEffect } from 'react';

import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// layouts
import Layout from '../../../src/layouts';
import Loader from '../UsedCars/Loader.js';
// components
import { Page, ErrorScreen, Breadcrumbs } from '../../../src/components';
// sections
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import {
  CarouselAuction,
  Contactinfo,
  TravelTourDetailsAuction,
} from '../../../src/sections/@travel/displaymaincar';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Displaycardetails({ post }) {
  // if (error) {
  //   return <ErrorScreen />;
  // }
  const router = useRouter();
  const { data } = router.query;
  const item = data ? JSON.parse(data) : null;
  // console.log('bidding item', item);
  const [info, setData] = useState([]);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://autobidup.pythonanywhere.com/bidding/search_bidding_room?search=${item}`
        );

        const jsonData = await response.json();
        console.log(jsonData, jsonData.length);
        setData(jsonData);
        // console.log("room",room);
        console.log('created');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [0]);

  console.log(info);

  return (
    <Page title="Auction">
      <Loader />
      <Container sx={{ marginTop: { xs: '33%', sm: '15%' } }}>
        <Grid justifyContent="center">
          <Grid item xs={10}>
            <CarouselAuction post={item} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              mt: 1 /* Default margin-top value */,
              '@media (minWidth: 600px)': {
                mt: -50 /* For small screens */,
              },
              '@media (minWidth: 960px)': {
                mt: -35 /* For medium and large screens */,
              },
            }}
          >
            <TravelTourDetailsAuction post={item} />
          </Grid>
          <Grid item xs={12} sm={5}></Grid>
        </Grid>
      </Container>
    </Page>
  );
}
//-------------------------------------------------------------------------------
// ----------------------------------------------------------------------
Displaycardetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
// ----------------------------------------------------------------------
export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}

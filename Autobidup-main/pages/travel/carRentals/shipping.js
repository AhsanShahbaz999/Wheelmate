import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';

import { useRouter } from 'next/router';

import { Container, Grid, Box, Stack, Button, Typography } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
// import { Cartt } from '../../../src/sections/@travel/accessories/cartitem';
import Shippinginfo from '../../../src/sections/@travel/accessories/shippinginfo';
import { TravelTourDetails } from '../../../src/sections/@travel';
import sell from '../../../src/Assets/Images/shipping.jpg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));
const styling={
  backgroundImage: `url(${sell.src})`,
  width: '100%',
  height: {xs:"150vh",sm:'100vh'},
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}
// ----------------------------------------------------------------------

export default function Shipping() {
  const router = useRouter();
  const { data, post } = router.query;
  const item = data ? JSON.parse(data) : null;
  const postData = post ? JSON.parse(post) : null;
  console.log("data reached in shipping",item)
  return (
    <Page title="Shipping Address | Accessories" style={styling}>
      <Loader/>
      <ChatButton/>
      <Container sx={{ marginTop: { xs: '18%', sm: '13%',md:"10%" }, overflowX: 'hidden' }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}
        <Typography variant='h2' color="black" pt="3%">Shipping Information</Typography>
        <Shippinginfo post={item} data={postData}/>
      </Container>
    </Page>
  );
}

//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------

Shipping.getLayout = function getLayout(page) {
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

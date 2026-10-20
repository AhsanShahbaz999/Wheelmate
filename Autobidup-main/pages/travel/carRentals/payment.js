import PropTypes from 'prop-types';
// import Loader from './UsedCars/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';
import { useRouter } from 'next/router';

// @mui
import { Container, Grid, Box, Stack, Button } from '@mui/material';
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
import Amount from '../../../src/sections/@travel/accessories/amount';
import sell from '../../../src/Assets/Images/payment.jpg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));
const styling = {
  backgroundImage: `url(${sell.src})`,
  width: '100%',
  height: { xs: '200vh' },
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
// ----------------------------------------------------------------------

export default function Payment() {
  const router = useRouter();
  const { data } = router.query;
  const item = data ? JSON.parse(data) : null;
  console.log("data reached in payment",item)
  return (
    <Page title="Payment | Accessories" style={styling}>
      <Loader />
      <ChatButton />
      <Container sx={{ marginTop: { xs: '18%', sm: '10%', md: '8%' }, overflowX: 'hidden' }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}
        <Amount post={item} price={item?.price || ''}/>
      </Container>
    </Page>
  );
}

//-------------------------------------------------------------------------------

Payment.getLayout = function getLayout(page) {
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

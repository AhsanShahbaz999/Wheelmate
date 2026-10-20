import PropTypes from 'prop-types';
// icons
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
import { useRequest } from '../../../src/hooks';
import Serviceclassdata from '../../../_data/mock/servicesmechanic';
// @mui
import {Box } from '@mui/material';
// utils
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Landing from '../../../src/sections/@travel/mechanic/landing';
import Trustmechanic from '../../../src/sections/@travel/mechanic/trustmechanic';
import TravelLandingIntroduceOurServices from '../../../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import Loader from '../UsedCars/Loader.js';
import ChatButton from '../ChatButton';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Mechaniclanding({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }
  return (
    <Page title="Mechanic Module | AutoBidUp">
      <Loader/>
      <ChatButton />
      <Box sx={{position: ' relative', mb:6, overflowX:"hidden" }}>
       <Landing/>
       <Trustmechanic/>
       <TravelLandingIntroduceOurServices data={Serviceclassdata}/>
      </Box>
    </Page>
  );
}
// ----------------------------------------------------------------------

Mechaniclanding.getLayout = function getLayout(page) {
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

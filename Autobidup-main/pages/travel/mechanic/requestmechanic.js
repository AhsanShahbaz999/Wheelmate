
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
import Loader from '../UsedCars/Loader.js';
import ChatButton from '../ChatButton';
// @mui
import { Box } from '@mui/material';
// utils
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs,Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Mechanicrequest from '../../../src/sections/@travel/mechanic/mechanicrequest';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Requestmechanic({ posts }) {
  return (
    <Page title="Request Mechanic | AutoBidUp">
      <Loader/>
      <ChatButton/>
      <Box sx={{ mt:{xs:"20%", sm:"10%",lg:"6%"}, overflowX:"hidden" }}>
       <Mechanicrequest/>
      </Box>
    </Page>
  );
}
// ----------------------------------------------------------------------

Requestmechanic.getLayout = function getLayout(page) {
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

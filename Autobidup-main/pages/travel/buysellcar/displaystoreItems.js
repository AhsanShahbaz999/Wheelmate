import PropTypes from 'prop-types';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';

// @mui
import { Container, Grid, Box } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Itemcarasol from '../../../src/sections/@travel/displaymaincar/Itemcarasol';
// import { TravelTourDetails } from '../../../src/sections/@travel';
import Itemdetail from '../../../src/sections/@travel/tours/Itemdetail';
import { useRouter } from 'next/router';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Displaystoredetails({ posts }) {
  const router = useRouter();
  const { data } = router.query;
  const item = data ? JSON.parse(data) : null;
  console.log("hiiiii", item);

  return (
    <Page title="Buy Store Accessories">
      <Loader />
      <ChatButton />
      <Container sx={{ marginTop: { xs: '33%', sm: '15%' } }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}
        <Grid justifyContent="center">
          <Grid item xs={10}>
            <Itemcarasol
              post={item}
              name={item?.pname || ''}
              price={item?.price || ''}
              images={item?.images || ''}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={7} mb={2}>
            <Itemdetail posts={item} description={item?.description || ''} />
          </Grid>
          <Grid item xs={12} sm={5}></Grid>
        </Grid>
      </Container>
    </Page>
  );
}
// ----------------------------------------------------------------------

Displaystoredetails.getLayout = function getLayout(page) {
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

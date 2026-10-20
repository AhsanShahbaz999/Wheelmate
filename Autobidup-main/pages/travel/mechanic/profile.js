import PropTypes from 'prop-types';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
// icons
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// @mui
import { Container } from '@mui/material';
// utils
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Expertprofile from '../../../src/sections/@travel/mechanic/expertprofile';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
export default function Profile({ posts }) {
  return (
    <Page title="Expert Profile | AutoBidUp">
      <Loader />
      <ChatButton />
      <Container sx={{ mt: '10%', overflowX: 'hidden' }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}

        <Expertprofile />
      </Container>
    </Page>
  );
}
// ----------------------------------------------------------------------

Profile.getLayout = function getLayout(page) {
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

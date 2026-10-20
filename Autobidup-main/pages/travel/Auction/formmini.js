import PropTypes from 'prop-types';
// import Loader from './Premium/Loader';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';

// @mui
import { Box } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import Miniform from '../../../src/sections/@travel/auctionform/miniform';
import sell from '../../../src/Assets/Images/auctionBg.jpeg';
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
const styling = {
  backgroundImage: `url(${sell.src})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
export default function Formmini({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Consignor Mini Form">
      <Loader />
      <ChatButton />
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '18%', sm: '10%', md: '8%' },
          overflowX: 'hidden',
        }}
        style={styling}
      >
        <Miniform />
        {/* tours={services} icons={summary} services={service}  */}
      </Box>
    </Page>
  );
}
// ----------------------------------------------------------------------

Formmini.getLayout = function getLayout(page) {
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

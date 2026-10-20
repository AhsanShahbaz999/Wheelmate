import PropTypes from 'prop-types';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
// import { services, summary, service } from '../../_data/mock/forChauffeursData';
import { useState, useEffect } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
// @mui
import { Container, Grid, Box, Stack, Button } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../../src/hooks';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Caritemlist, Contactinfo } from '../../../src/sections/@travel/displaymaincar';

import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Displaycarlist({ posts }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: courses = [], error, isLoading } = useRequest('/api/e-learning/courses');

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  if (error) {
    return <ErrorScreen />;
  }
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/cars');
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        console.log(data);
        console.log('created');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <Page title="Buy/Sell Used Cars List">
      <Loader />
      <ChatButton />
      <Container sx={{ marginTop: { xs: '33%', sm: '15%' }, mb: 6, overflowX: 'hidden' }}>
        {/* <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Components', href: '/components' },
            { name: 'Breadcrumbs' },
          ]}
          sx={{ mb: 4 }}
        /> */}

        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
          onClick={handleMobileOpen}
          sx={{
            display: { md: 'none' },
          }}
        >
          Filters
        </Button>
        <Stack spacing={6} direction={{ xs: 'column', sm: 'row' }}>
          <Carfilterbar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

          <Box
            sx={{
              flexGrow: 1,
              // pl: { md: 8 },
              // width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
            }}
          >
            <Caritemlist item={data} />
          </Box>
        </Stack>
      </Container>
    </Page>
  );
}
// ----------------------------------------------------------------------

Displaycarlist.getLayout = function getLayout(page) {
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

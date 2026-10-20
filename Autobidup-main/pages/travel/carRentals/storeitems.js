import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { Page,ErrorScreen } from '../../../src/components';
import { Icon } from '@iconify/react';

import {
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  Divider,
  Stack,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../tours';
import { Caritem, Caritemlist } from '../../../src/sections/@travel/displaymaincar';
import img1 from '../../../src/Assets/Images/FordMinivan.jpg';
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
import Layout from '../../../src/layouts';

//--------------------------------------------------------------

export default function Storeitem() {
  const router = useRouter();

  return (
    <Page title="Acessories Store Items">
      {/* <Loader/> */}
      <Container sx={{ marginTop: { xs: '33%', sm: '15%' }, mb: 6, overflowX: 'hidden' }}>
        {/* <Breadcrumbs
        links={[
          { name: 'Home', href: '/' },
          { name: 'Components', href: '/components' },
          { name: 'Breadcrumbs' },
        ]}
        sx={{ mb: 4 }}
      /> */}
        {/* <Grid container justifyContent="center">
        <Grid item xs={12} sm={3}>
          
        </Grid>
        <Grid item xs={12} sm={9}>
          <Caritemlist item={items} />
        </Grid>
      </Grid> */}
        {/* <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
            onClick={handleMobileOpen}
            sx={{
              display: { md: 'none' },
            }}
          >
            Filters
      </Button> */}
        <Stack direction={{ xs: 'column', sm: 'row' }}>
          {/* <Carfilterbar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} /> */}

          <Box
            sx={{
              flexGrow: 1,
              // pl: { md: 8 },
              // width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
            }}
          >
            <Caritem item={items} />
          </Box>
        </Stack>
        {/* tours={services} icons={summary} services={service}  */}
      </Container>
    </Page>
  );
}
Storeitem.getLayout = function getLayout(page) {
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

// ----------------------------------------------------------------------

import { useState } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';

// @mui
import { Container, Grid, Box, Stack, Button, Typography } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Breadcrumbs, Iconify } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { Caritemlist } from '../../../src/sections/@travel/displaymaincar';
import Loader from './Loader';
import ChatButton from '../ChatButton';
import Carfilterbar from '../../../src/sections/@travel/filters/carfilterbar';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

import Pagination from '@mui/material/Pagination';

export default function Displaycarlist({ posts }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [searchValues, setSearchValues] = useState('');
  const [filterprice, setFilterPrice] = useState([{ label: '50000 to 100000' }]);  // Ensure this is an array
  const [filteryear, setFilterYear] = useState([{ label: '2010 to 2020' }]);  // Ensure this is an array

  const handleFilterClick = (searchValues, filterprice, filteryear) => {
    console.log('Filter Search:', searchValues);
    console.log('Filter Price:', filterprice);
    console.log('Filter Year:', filteryear);

    if (searchValues !== '' || filterprice !== '' || filteryear !== '') {
      if (searchValues !== '') {
        setSearchValues(searchValues);
      }
      if (filterprice !== '') {
        setFilterPrice(filterprice);
      }
      if (filteryear !== '') {
        setFilterYear(filteryear);
      }
    }
  };

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <Page title="SUV">
      <RootStyle>
        <Loader />
        <ChatButton />
        <Container sx={{ marginTop: { xs: '33%', sm: '6%' }, mb: 6, overflowX: 'hidden' }}>
          <Typography variant="h2" mb="20px" textAlign={'center'}>
            SUV{' '}
          </Typography>
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
          <Stack direction={{ xs: 'column', sm: 'row' }}>
            <Carfilterbar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} onFilterClick={handleFilterClick} />

            <Box sx={{ flexGrow: 1 }}>
              <Caritemlist
                search={searchValues}  // Search as a string
                value={'SUV'}  // Value passed as string
                filterprice={filterprice}  // Ensure filterprice is an array
                filteryear={filteryear}  // Ensure filteryear is an array
              />
            </Box>
          </Stack>
        </Container>
        <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
          <Pagination
            sx={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              '& .MuiPaginationItem-root': {
                padding: '12px',
              },
              '& .MuiButtonBase-root': {
                minWidth: '50px',
                minHeight: '50px',
              },
            }}
            count={10}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </RootStyle>
    </Page>
  );
}

Displaycarlist.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}

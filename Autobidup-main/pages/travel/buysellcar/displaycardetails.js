import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Grid, Box } from '@mui/material';

import Layout from '../../../src/layouts'; // Ensure Layout component is correctly imported
import { Page, Breadcrumbs } from '../../../src/components';
import { Carousel, Contactinfo } from '../../../src/sections/@travel/displaymaincar';
import { TravelTourDetails } from '../../../src/sections/@travel';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';

export default function Displaycardetails() {
  const router = useRouter();
  const { data } = router.query; // Get query parameter 'data'
  const [item, setItem] = useState(null); // State to store parsed data

  useEffect(() => {
    if (data) {
      try {
        const parsed = JSON.parse(data); // Try parsing the incoming data
        setItem(parsed); // Set parsed data to state
      } catch (error) {
        console.error('Failed to parse car data:', error); // Log error if parsing fails
      }
    }
  }, [data]); // Re-run effect when 'data' changes

  // Show loading state while waiting for data
  if (!item) {
    return (
      <Page title="Buy/Sell Used Cars">
        <Loader />
        <ChatButton />
        <Box textAlign="center" mt={10}>
          <h2>Loading car details...</h2>
        </Box>
      </Page>
    );
  }

  // Render the car details once data is available
  return (
    <Page title="Buy/Sell Used Cars">
      <ChatButton />
      <Container sx={{ marginTop: { xs: '33%', sm: '15%' } }}>
        <Grid justifyContent="center">
          <Grid item xs={10}>
            <Carousel post={item} /> {/* Render carousel component with car data */}
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={7} mb={2}>
            <TravelTourDetails post={item} description={item?.description || ''} /> {/* Render travel details */}
          </Grid>
          
        </Grid>
      </Container>
    </Page>
  );
}

// Define the custom layout for the page
Displaycardetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>; // Use Layout component to wrap the page
};


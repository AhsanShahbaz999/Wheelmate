import PropTypes from 'prop-types';
import * as React from 'react';
import location from '@iconify/icons-carbon/location';
import { Icon } from '@iconify/react';
import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { SellerinfoAuction, Sellerinfo } from './';
import { useRouter } from 'next/router';

//--------------------------------------------------------------

export default function Contactinfo({post}) {  
  const router = useRouter();

  const handleExitRoom = async () => {
    try {
      const response = await fetch(
        'https://autobidup.pythonanywhere.com/bidding/exit_bidding_room',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ bids: bid_Id }),
        }
      );

      if (response.ok) {
        // API call successful
        console.log('Bidding room Exit successfully');
        router.push('/travel/Auction/Auction/')
      } else {
        // API call failed
        console.error('Failed to Enter bidding room');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };
  return (
    <Box>
      <Box>
        <Typography variant="h3">{`${post?.bidding_car.make} ${post?.bidding_car.model} ${post?.bidding_car.year}`}</Typography>
        <Typography variant="h4" color="#CE9A00">
          {post?.bidding_car.starting_bid}
        </Typography>

        <Stack direction="row" spacing={1} display="flex" alignItems="center">
          <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" />
          <Typography fontWeight="bold">Lahore</Typography>
        </Stack>
        <Button
          variant="contained"
          size="large" 
          onClick={handleExitRoom} 
          target="_blank"
          rel="noopener"
        >
          Exit
        </Button>
      </Box>
      <Sellerinfo car={post}/>

      <SellerinfoAuction post={post}/>
    </Box>
  );
}

// ----------------------------------------------------------------------

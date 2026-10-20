import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import {  Scrollbar } from '../../../components';
import { styled } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import {
  Divider,
  Box,
  ButtonGroup,
  Button,
  Typography,
} from '@mui/material';
import { OverviewAuction } from '../../../../src/sections/@travel/tours';

//--------------------------------------------------------------
const ScrollStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(1.5),
  },
}));

export default function Contactinfo({ post }) {
  const [counter, setCounter] = useState('');
  const [comments, setComments] = useState([]);

  let startingBid = parseInt(post?.bidding_car?.starting_bid || 0);
  useEffect(() => {
    setCounter(startingBid)
  }, []);
  
  const handleBidClick = () => {
    console.log('Bid button clicked');
    
    async function fetchData() {
      try {
        console.log('details fetching');
        const response = await fetch(
          'https://autobidup.pythonanywhere.com/bidding/increase_bid',
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          // API call successful
          let responseData = await response.json();
          let dict = {
            name: responseData.username,
            icon: userIcon,
            text: responseData['current bid'].toString(),
          };
          setComments((prevComments) => [...prevComments, dict]);
        
          console.log('response data', responseData);
        } else {
          // API call failed
          const errorData = await response.json();
          // Handle the error data as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  };

  return (
    <Box>
      <Box
        sx={{
          p: 1,
          boxShadow: '0 1px 10px #64666b',
          borderRadius: '8px',
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <ButtonGroup
            size="large"
            alingItem="center"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              sx={{
                backgroundColor: 'white',
                border: '1px solid #FFBE00',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              disabled={counter <= 0}
              onClick={() => {
                setCounter((prevCounter) => prevCounter - 5000);
              }}
            >
              -
            </Button>
            <Button disabled className="buttonCounter">
              {counter}
            </Button>
            <Button
              sx={{
                backgroundColor: 'white',
                border: '1px solid #FFBE00',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
              onClick={() => {setCounter((prevCounter) => prevCounter + 5000);}}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Button variant="contained" onClick={handleBidClick} target="_blank" rel="noopener">
            Bid
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 3,
          boxShadow: '0 1px 10px #64666b',
          borderRadius: '8px',
          mt: 2,
          height: '350px',
        }}
      >
        <Scrollbar>
          <ScrollStyle>
            <Typography variant="h4">Bidders List</Typography>
            <OverviewAuction
              overviewAuction={comments}
            />
            <Divider />
          </ScrollStyle>
        </Scrollbar>
      </Box>
    </Box>
  );
}
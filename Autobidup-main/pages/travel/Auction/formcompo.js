import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router';
import { Grid, Box, Typography , Button} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Apply from '../../../src/assets/Images/apply.jpg';
import Applying from '../../../src/assets/Images/applying.jpg';

export default function Landing({ bidId, bid_Id, updateLeftCalls }) {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false); // State for controlling the modal visibility
  const [roomAllotted, setRoomAllotted] = React.useState(false); // State for tracking if the room was allotted
  const [alreadyAllotted, setAlreadyAllotted] = React.useState(false); // State for tracking if the room is already allotted

  console.log(bid_Id);
  const handleBiddingRoom = async () => {
    try {
      const response = await fetch(
        'http://autobidup.pythonanywhere.com/bidding/allot_bidding_room',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bids: bid_Id }),
        }
      );

      if (response.ok) {
        // API call successful
        let responseData = await response.json();
        console.log(responseData)
        // updateLeftCalls(responseData.room_id_alloted)
        console.log('Bidding room allotted successfully');
        setRoomAllotted(true); // Set the state to indicate that the room was allotted
      } else if (response.status === 409) {
        // Room already allotted
        console.log('Room already allotted');
        setAlreadyAllotted(true); // Set the state to indicate that the room is already allotted
      } else {
        // API call failed
        console.error('Failed to allot bidding room');
        setRoomAllotted(false); // Set the state to indicate that the room was not allotted
      }
    } catch (error) {
      console.error('Error during API call:', error);
      setRoomAllotted(false); // Set the state to indicate that the room was not allotted
    } finally {
      setShowModal(true); // Show the modal after API call completion
    }
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setAlreadyAllotted(false);
  };
  return (
    <>
      <Grid container spacing={2} justifyContent="center" mt={3}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Box textAlign="center">
            <Typography variant="h2">Auction</Typography>
            <Typography variant="h4">Join the Excitement: Bid on Cars</Typography>
            <Box pl="10%" pr="10%">
              <Typography pb={4}>
                Enter your details below to join the excitement and bid on classic/vintage cars.
                Don't miss out on the chance to bid on cars – fill out the form below to get
                started. Ready to participate in the bidding action? Simply complete the form below
                and start bidding on cars. Take part in our auction and bid on some of the finest
                vehicals in country. Complete the entry form below to join the excitement.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Applying.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left',
            }}
          >
            <Typography variant="h3" pb={2}>
              Verification Form
            </Typography>
            <Typography variant="h4" pb={6}>
              Verification form for vehicle verification.
            </Typography>
            <LoadingButton
               onClick={() => router.push({
                pathname: '/travel/Auction/formmini',
              })}
              sx={{
                border: '1px solid #FFBE00 ',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
            >
              Apply
            </LoadingButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              backgroundColor: 'white',
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Apply.src})`,
              backgroundSize: '70%',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography variant="h3" pb={2}>
              Post for Auction
            </Typography>
            <Typography variant="h4" pb={6}>
              Posting form a vehicle for auction.
            </Typography>
            <LoadingButton
              onClick={() => {
                router.push({
                  pathname: '/travel/Auction/formmain/',
                  query: { id: bidId }
                });
              }}
             
              sx={{
                border: '1px solid #FFBE00 ',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
            >
              Apply
            </LoadingButton>
          </Box>
        </Grid>
      
        <Grid item xs={12} sm={4} md={4} display="flex" alignItems="center">
          <Box
            ml={{ xs: 2, sm: 4 }}
            mr={{ xs: 2, sm: 4 }}
            sx={{
              p: 3,
              boxShadow: '0 1px 10px #64666B',
              borderRadius: '8px',
              m: 1,
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Applying.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left',
            }}
          >
            <Typography variant="h3" pb={2}>
              Room for Auction
            </Typography>
            <Typography variant="h4" pb={6}>
              Apply for alot room for auction.
            </Typography>
            <LoadingButton
              onClick={handleBiddingRoom}
              sx={{
                border: '1px solid #FFBE00 ',
                color: '#FFBE00',
                '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
              }}
            >
              Apply
            </LoadingButton>
          </Box>
        </Grid>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {roomAllotted && <h2>Room Allotted Successfully</h2>}
              {alreadyAllotted && <h2>Room Already Allotted</h2>}
              {!roomAllotted && !alreadyAllotted && <h2>Room Not Allotted</h2>}
              <Button
              onClick={handleCloseModal}
                        sx={{
                          backgroundColor: 'white',
                          border: '1px solid #FFBE00',
                          color: '#FFBE00',
                          '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                        }}
                      >
                        Close
                      </Button>
            </div>
          </div>
        )}
        <style jsx>{`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
          }
        `}</style>
      </Grid>
    </>
  );
}

// ----------------------------------------------------------------------

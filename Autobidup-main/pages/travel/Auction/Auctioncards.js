import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// next
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Container, Typography } from '@mui/material';

import { Image, CarouselArrows, CarouselDots } from '../../../src/components';
import ReverseCounter from './timer';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(1, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 0),
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  borderRadius: '10px',
  p: 6,
};

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------
export default function BlogMarketingLatestPosts({ bid_Id }) {
  const theme = useTheme();
  const router = useRouter();

  const [data, setData] = useState([]);
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://autobidup.pythonanywhere.com/bidding/cars_with_room_id'
        );
        const jsonData = await response.json();
        console.log(jsonData, jsonData.length);
        setData(jsonData);
        console.log('created');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  console.log('data', data, data.length);

  const carouselRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [alloted, setAlloted] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const handleOpenRoom = async (roomId) => {
    try {
      const response = await fetch(
        'https://autobidup.pythonanywhere.com/bidding/enter_bidding_room',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bids: roomId }),
        }
      );

      if (response.ok) {
        // API call successful
        const responseData = await response.json();
        console.log(responseData);
        console.log('Bidding room entered successfully');
        router.push({
          pathname: '/travel/Auction/BiddingDetails',
          query: { data: JSON.stringify(responseData) },
        });
      } else {
        // API call failed
        console.error('Failed to enter bidding room');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h3"
          paddingTop={'100px'}
          sx={{
            textAlign: 'center',
          }}
        >
          Cars Available for Auction{' '}
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                '&.left': { left: -20 },
                '&.right': { right: -20 },
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {data?.map((value) => (
                <Box
                  sx={{
                    px: 2,
                    py: { xs: 3, md: 4 },
                  }}
                >
                  <Box>
                    <Box
                      // onClick={handleOpen}
                      onClick={() => handleOpenRoom(value.room_id)}
                      sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', mb: 1 }}
                    >
                      <ReverseCounter bid={value.bid_time} />

                      <Image
                        src={value.images[0]?.image_url}
                        sx={{ width: '100%', height: '200px' }}
                      />
                      <Typography variant="h4">{`${value.make} ${value.model}`}</Typography>
                      <Typography variant="h6">{value.year}</Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.car_location}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.mileage}
                        </Typography>
                        <Typography variant="body3" sx={{ display: { xs: 'none', sm: 'block' } }}>
                          {value.engine_type}
                        </Typography>
                      </Stack>
                      <Typography variant="h4" color="#CE9A00">
                        {' '}
                        PKR {value.starting_bid}
                      </Typography>
                    </Box>
                    {/* <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      sx={{
                        position: 'unset !important',
                      }}
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                          Auction room Entry Fee
                        </Typography>
                        <FormControl>
                          <TextField
                            id="cardholder-name"
                            label="Cardholder Name"
                            variant="outlined"
                          />
                          <br />
                          <TextField
                            id="card-number"
                            label="Card Number"
                            variant="outlined"
                            inputProps={{
                              maxLength: 19,
                              pattern: '^[0-9]{4}\\s?[0-9]{4}\\s?[0-9]{4}\\s?[0-9]{4}$',
                              placeholder: '#### #### #### ####',
                              autoComplete: 'cc-number',
                            }}
                          />
                          <br />
                          <TextField
                            id="phone-number"
                            label="Mobile Number"
                            variant="outlined"
                            inputProps={{
                              maxLength: 11,
                              pattern: '^[0-9]{4}\\" "\\s?[0-9]{7}$',
                              placeholder: '#### #######',
                              autoComplete: 'cc-number',
                            }}
                          />
                        </FormControl>
                        <Button
                          sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                            width: '100%',
                            mt: 2,
                          }}
                          onClick={() => {
                            router.push({
                              pathname: '/travel/Auction/BiddingDetails/',
                              query: { data: JSON.stringify(value) },
                            });
                          }}
                        >
                          {' '}
                          Buy{' '}
                        </Button>
                        <Button
                          sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                            width: '100%',
                            mt: 1,
                          }}
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                      </Box>
                    </Modal> */}
                  </Box>
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}
BlogMarketingLatestPosts.getLayout = function getLayout(page) {
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

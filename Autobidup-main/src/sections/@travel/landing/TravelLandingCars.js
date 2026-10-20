import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

export default function TravelLandingCars() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/store/accessories'); // Fetch all accessories without filters
        const jsonData = await response.json();
        setData(jsonData); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Fetch data only on initial load

  return (
    <RootStyle>
      <Typography variant="h3" textAlign="center">
        Wheelmate Accessories Store
      </Typography>

      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2, md: 0 },
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {data.map((item) => (
            <div key={item.pid}>
              <Box
                sx={{
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  mt: 8,
                  '&:hover': {
                    transform: 'scale(0.92)',
                    color: '#FFBE00',
                  },
                }}
                onClick={() =>
                  router.push({
                    pathname: '/travel/buysellcar/displaystoreItems',
                    query: { data: JSON.stringify(item) },
                  })
                }
              >
                <img
                  src={`http://localhost:4000${item.images}`} // Corrected image path to be dynamically generated
                  alt={item.pname}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box>
                  <Typography sx={{ mb: -1 }}>{item.pname}</Typography>
                  <Typography>{item.price}</Typography>
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

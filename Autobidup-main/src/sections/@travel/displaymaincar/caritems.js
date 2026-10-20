import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 0),
  },
}));

Caritems.propTypes = {
  value: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,  // Changed to string instead of array
  filterprice: PropTypes.string.isRequired,
};

export default function Caritems(props) {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:4000/store/accessories?';

        // Add search filter if provided
        if (props.search) {
          url += `search=${props.search}&`;
        }

        // Add price filter if available
        if (props.filterprice) {
          const [minPrice, maxPrice] = props.filterprice.split(' to ');
          url += `minPrice=${minPrice}&maxPrice=${maxPrice}&`;
        }

        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);  // Set state with the filtered accessories data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.search, props.filterprice]);

  return (
    <RootStyle>
      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2, md: 4 },
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {data.map((item) => (
            <div key={item.pid}>
              <Box
                onClick={() =>
                  router.push({
                    pathname: '/travel/buysellcar/displaystoreItems',
                    query: { data: JSON.stringify(item) },
                  })
                }
                sx={{
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  mt: 8,
                  '&:hover': {
                    transform: 'scale(0.92)',
                    color: '#FFBE00',
                  },
                }}
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

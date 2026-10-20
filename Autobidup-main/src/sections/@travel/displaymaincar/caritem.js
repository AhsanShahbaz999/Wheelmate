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

Caritem.propTypes = {
  value: PropTypes.number.isRequired,
  search: PropTypes.string,
  filterprice: PropTypes.array,
};

export default function Caritem(props) {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:4000/store/accessories?';
        
        // Add category filter based on value prop
        const categories = {
          1: 'Lighting',
          2: 'Car Care',
          3: 'Interior',
          4: 'Performance',
          5: 'Gadgets'
        };
        
        if (props.value && categories[props.value]) {
          url += `category=${categories[props.value]}&`;
        }

        // Add search filter if provided
        if (props.search) {
          url += `search=${encodeURIComponent(props.search)}&`;
        }

        // Add price filter if available
        if (props.filterprice && props.filterprice.length > 0) {
          const priceRange = props.filterprice[0].label;
          const [minPrice, maxPrice] = priceRange.split(" to ");
          url += `minPrice=${minPrice}&maxPrice=${maxPrice}&`;
        }

        console.log("🔍 Fetching URL:", url);
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log("📦 Received data:", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.value, props.search, props.filterprice]);

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
                  src={`http://localhost:4000${item.images}`}
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
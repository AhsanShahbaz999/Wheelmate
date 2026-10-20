import PropTypes from 'prop-types';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import userIcon from '@iconify/icons-carbon/user';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { TextIconLabel, Iconify, Image, Scrollbar } from '../../../components';
import { Icon } from '@iconify/react';

import {
  Grid,
  Button,
  ButtonGroup,
  TableContainer,
  TextField,
  Divider,
  Stack,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../tours';

//--------------------------------------------------------------
Item.propTypes = {
  item: PropTypes.array,
  onRemoveItem: PropTypes.array,
};
const ScrollStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(1.5),
  },
}));

export default function Item(props) {
  const router = useRouter();
  const [counter, setCounter] = useState(1);
  console.log('data reached', props.item);

  return (
    <Box mt={2} mb={2} sx={{ background: 'white', boxShadow: '0 1px 10px #64666B' }} height="400px">
      <Scrollbar>
        <ScrollStyle>
          {props.item?.map((value) => (
            <Box sx={{ p: 3 }}>
              {value ? (
                <Grid container spacing={4} mb={2} justifyContent="center" key={value.pid}>
                  <Grid item xs={12} sm={4} display="flex" alignItems="center">
                    <img
                      src={`http://localhost:4000${value.images}`} // Corrected image path to be dynamically generated
                      alt={value.pname}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="h4">{value.pname}</Typography>
                      <Typography variant="h4" color="#CE9A00">
                        {' '}
                        PKR {value.price}
                      </Typography>
                    </Stack>
                    <Typography variant="h6" mt={2}>
                      Shipping: PKR 100
                    </Typography>
                    <Stack direction="row" mt={2}>
                      <Typography variant="h6">Quantity:</Typography>
                      <Typography variant="h6" color="#CE9A00">
                        {' '}
                        {value.quantity}
                      </Typography>
                    </Stack>
                    {/* <Stack spacing={2} mt={2} direction="row">

                    <ButtonGroup
                      size="small"
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      {
                        <Button
                          sx={{
                            backgroundColor: 'white',
                            border: '1px solid #FFBE00',
                            color: '#FFBE00',
                            '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                          }}
                          disabled={counter <= 0}
                          onClick={() => {
                            setCounter(counter - 1);
                          }}
                        >
                          -
                        </Button>
                      }
                      {<Button disabled>{counter}</Button>}
                      <Button
                        sx={{
                          backgroundColor: 'white',
                          border: '1px solid #FFBE00',
                          color: '#FFBE00',
                          '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                        }}
                        onClick={() => {
                          setCounter(counter + 1);
                        }}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Stack> */}
                    {/* <Button
                      sx={{
                        float: 'right',
                        backgroundColor: '#212B36',
                        color: 'white',
                        mt: 3,
                        '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
                      }}
                      onClick={() => props.onRemoveItem(item.pid)}
                    >
                      Remove
                    </Button> */}
                  </Grid>
                </Grid>
              ) : null}
              <Divider sx={{ backgroundColor: 'darkgrey' }} />
            </Box>
          ))}
        </ScrollStyle>
      </Scrollbar>
    </Box>
  );
}

// ----------------------------------------------------------------------

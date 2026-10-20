import PropTypes from 'prop-types';
import * as React from 'react';
import location from '@iconify/icons-carbon/location';
import { ButtonGroup, Button } from '../../../components';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Stack,
  Box,
  Typography,
} from '@mui/material';

export default function Iteminfo() {
  const router = useRouter();
  const [counter, setCounter] = useState(1);
  return (
    <Box>
      <Typography variant="h3">Honda N Wgn G 2013</Typography>
      <Typography variant="h4" color="#CE9A00">
        PKR 2.10 Crores
      </Typography>

      <Stack direction="row" spacing={1} display="flex" alignItems="center">
        <Icon icon={location} width="1.5vw" vAlign="middle" color="#CE9A00" />
        <Typography fontWeight="bold">Lahore</Typography>

        <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
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
      </Stack>
    </Box>
  );
}

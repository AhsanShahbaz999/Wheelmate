import PropTypes from 'prop-types';
import * as React from 'react';
import userIcon from '@iconify/icons-carbon/user';
import { Icon } from '@iconify/react';
import {
  TextField,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import { Overview } from '../tours';

//--------------------------------------------------------------
const comments = [
  {
    name: 'Ali Khan',
    text: 'Does AC works?',
    icon: userIcon,
  },
  {
    name: 'Saim Asim',
    text: 'Nice',
    icon: userIcon,
  },
];

export default function Comments() {
  return (
    <Box mt="5%">
      <Typography variant="h4">Comments</Typography>
      <Box sx={{ p: 3, boxShadow: '0 1px 10px #64666b', borderRadius: '8px', mt: 2 }}>
        <Overview overview={comments} />
      </Box>

      <Stack direction="row" spacing={2} display="flex" alignItems="center" mt={2}>
        <Icon icon="mdi:user-circle" sx={{ color: '#CE9A00' }} width="35" height="35" vAlign="middle" />
        <TextField
          id="filled-multiline-static"
          sx={{ width: '100%' }}
          multiline
          rows={2}
          placeholder="Describe your car..."
          variant="filled"
        />
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

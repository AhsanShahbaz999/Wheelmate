import PropTypes from 'prop-types';
// icons
// import PropTypes from 'prop-types';
// import { Typography, Stack, Box, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
// import TextIconLabel from '../../../components/TextIconLabel';
// import Iconify from '../../../components/Iconify';
// import { Scrollbar } from '../../../components';
// import { fDate } from '../../../utils/formatTime';
// import { Icon } from '@iconify/react';

// @mui
import { Typography, Stack, Box, Divider, Block } from '@mui/material';
// import { Scrollbar } from '../../../components';

// utils
import { fDate } from '../../../utils/formatTime';
// utils
import { TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

OverviewAuction.propTypes = {
  overviewAuction: PropTypes.array.isRequired,
};

export default function OverviewAuction({ overviewAuction }) {
  return (
    <section>
      {overviewAuction?.map((value) => (
        <Box
          sx={{
            padding: '20px',
          }}
          key={value.name}
        >
          <Typography variant="h4">{value.title}</Typography>
          <Stack display="flex" alignItems="left">
            <OverviewItem
              icon={<Iconify icon={value.icon} />}
              label={value.name}
              text={value.text}
            />
            <Divider />
          </Stack>
        </Box>
      ))}
    </section>
  );
}

// ----------------------------------------------------------------------

OverviewItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  text: PropTypes.string,
};

function OverviewItem({ icon, label,phone, text = '-' }) {
  return (
    <TextIconLabel
      spacing={2}
      alignItems="center"
      icon={icon}
      color="#CE9A00"
      vAlign="middle"
      value={
        <Stack>
          <Typography variant="h6">{label}</Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {text}
          </Typography>
         
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}

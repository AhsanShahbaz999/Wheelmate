import PropTypes from 'prop-types';
// icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import calendarIcon from '@iconify/icons-carbon/calendar';
import translateIcon from '@iconify/icons-carbon/translate';
import userIcon from '@iconify/icons-carbon/user';
import timeIcon from '@iconify/icons-carbon/time';
import Comments from '../../../sections/@travel/displaymaincar/comments';
// @mui
import { Typography, Stack, Box, Divider } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// utils
import { TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

// TravelTourDetails.propTypes = {
//   tour: PropTypes.shape({
//     availableEnd: PropTypes.string,
//     availableStart: PropTypes.string,
//     description: PropTypes.string,
//     duration: PropTypes.string,
//     highlights: PropTypes.array,
//     includes: PropTypes.array,
//     languages: PropTypes.array,
//     location: PropTypes.string,
//     program: PropTypes.array,
//     tourGuide: PropTypes.shape({
//       name: PropTypes.string,
//       phoneNumber: PropTypes.string,
//     }),
//   }),
// };
Overview.propTypes = {
  overview: PropTypes.array.isRequired,
};
export default function Overview({ overview }) {
  
  return (
    <section>
      {overview?.map((value) => (
        <Box >
          <Typography variant="h4">{value.title}</Typography>
            <Stack display="flex" alignItems="left">
              <OverviewItem
                key={value.name}
                icon={<Iconify icon={value.icon} />}
                label={value.name}
                text={value.text}
              />
              <Divider/>
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

function OverviewItem({ icon, label, text = '-' }) {
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
          <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}

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

const images1 = [
  {
    val: 'Petrol',
    title: 'Engine Type',
    icon: locationIcon,
  },
  {
    val: 'Imported',
    title: 'Assembly',
    icon: userIcon,
  },
  {
    val: '2017',
    title: 'Year',
    icon: userIcon,
  },
  {
    val: 'Automatic',
    title: 'Transmission',
    icon: userIcon,
  },
  {
    val: 'White',
    title: 'Color',
    icon: locationIcon,
  },
  {
    val: 'Islamabad',
    title: 'RegCity',
    icon: locationIcon,
  },
  {
    val: '2007cc',
    title: 'Engine Capacity',
    icon: locationIcon,
  },
  {
    val: '20923',
    title: 'Ad Ref# 20923',
    icon: locationIcon,
  },
];
const data = [
  {
    description:
      'Lightweight allow rims . Complete original file is availble . Driven on petrol throughout . All token taxes are paid for life . Paint touchups in a few places. Brand new tires installed. Non accidental. Original Book is available. Will be sold to nearest offer.. Alloy Rims. Complete original file is availble . Driven on petrol throughout . Lifetime token tax paid. Few paint touchups on the body . Fitted with new tires. Price is slightly negotiable. Original Book is available. Token tax is up to date.',
  },
];
const includes = [
  {
    label: 'AM/FM radio',
  },
  {
    label: 'Air Conditioning',
  },
  {
    label: 'Alloy rims',
  },
];

Itemdetail.propTypes = {
  posts: PropTypes.array.isRequired,
  description: PropTypes.array,
};

export default function Itemdetail({ posts, description }) {

  return (
    <Stack spacing={2} mb={6} mt={6}>
      {/* <Typography variant="h4">
        Overview
      </Typography> */}
      <Box sx={{}}>
        <section>
          <Typography variant="h4" paragraph mt={6}>
            Description
          </Typography>
          {/* {posts.map((description, pid) => ( */}
            <Typography  mt={1}>
              {/* {posts.description} */}
              {description}
            </Typography>
          {/* ))} */}
        </section>
      </Box>
    </Stack>
  );
}

// ----------------------------------------------------------------------

// OverviewItem.propTypes = {
//   icon: PropTypes.any,
//   label: PropTypes.string,
//   text: PropTypes.string,
// };

// function OverviewItem({ icon, label, text = '-' }) {
//   return (
//     <TextIconLabel
//       spacing={1.5}
//       alignItems="flex-start"
//       icon={icon}
//       value={
//         <Stack>
//           <Typography variant="h6">{label}</Typography>
//           <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
//         </Stack>
//       }
//       sx={{ '& svg': { width: 24, height: 24 } }}
//     />
//   );
// }

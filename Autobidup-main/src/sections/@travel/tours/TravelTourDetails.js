import PropTypes from 'prop-types';
import { Typography, Stack, Box } from '@mui/material';
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
import { TextIconLabel, Iconify } from '../../../components';
import Comments from '../../../sections/@travel/displaymaincar/comments';

const knownKeys = [
  'color',
  'model',
  'assembly',
  'transmission',
  'bodytype',
  'mileage',
  'engine_capacity',
  'engine_type',
];

const knownFeatures = [
  'airbags',
  'airconditioner',
  'alloywheels',
  'antilockbreakingsystem',
  'coolbox',
  'cupholders',
  'foldingrearseat',
  'immobilizer',
  'powerdoorlocks',
  'powersteering',
  'powerwindows',
  'powermirrors',
  'rearwiper',
  'tractioncontrol',
  'rearseatent',
  'climatecontrol',
  'rearacvents',
  'frontspeaker',
  'rearspeaker',
  'armrests',
];

TravelTourDetails.propTypes = {
  post: PropTypes.object.isRequired,
  description: PropTypes.string,
};

export default function TravelTourDetails({ post, description }) {
  if (!post) return <Typography>Car details not available</Typography>;

  // Extract known overview fields
  const overviewItems = knownKeys.map((key) =>
    post[key] ? { label: key, value: post[key] } : null
  ).filter(Boolean);

  // Extract features that are true
  const featureItems = knownFeatures.map((key) =>
    post[key] === true ? key : null
  ).filter(Boolean);

  return (
    <Stack spacing={2} mb={6} mt={6}>
      <Typography variant="h4">Overview</Typography>

      <Box>
        <Box
          sx={{
            boxShadow: '0 1px 10px #64666b',
            borderRadius: '8px',
            p: 3,
            pl: 6,
            display: 'grid',
            rowGap: 2,
            columnGap: 1,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {overviewItems.map((item, index) => (
            <OverviewItem
              key={index}
              icon={<Iconify icon="ic:round-star" />}
              label={item.label}
              text={item.value}
            />
          ))}
        </Box>

        <Typography variant="h4" paragraph mt={6}>
          Description
        </Typography>
        <Typography mt={1}>
          {description || post.description || 'No description available.'}
        </Typography>

        <Typography variant="h4" mt={6}>
          Car Features
        </Typography>
        <Box
          sx={{
            boxShadow: '0 1px 10px #64666b',
            borderRadius: '8px',
            mt: 2,
            p: 3,
            pl: 6,
            display: 'grid',
            rowGap: 2,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {featureItems.length > 0 ? (
            featureItems.map((feature, idx) => (
              <TextIconLabel
                key={idx}
                icon={
                  <Iconify
                    icon={checkmarkIcon}
                    sx={{ mr: 2, width: 20, height: 20, color: '#CE9A00' }}
                  />
                }
                value={feature}
              />
            ))
          ) : (
            <Typography>No additional features listed.</Typography>
          )}
        </Box>

        <Comments />
      </Box>
    </Stack>
  );
}

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={icon}
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

OverviewItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  text: PropTypes.string,
};
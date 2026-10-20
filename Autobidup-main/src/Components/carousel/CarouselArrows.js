import PropTypes from 'prop-types';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';

// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
//
import Iconify from '../Iconify';
import { IconButtonAnimate } from '../animate';

// ----------------------------------------------------------------------

const BUTTON_SIZE = 40;

const ArrowStyle = styled(IconButtonAnimate)(({ theme }) => ({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

CarouselArrows.propTypes = {
  children: PropTypes.node,
  customIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export default function CarouselArrows({
  customIcon, // Set icon right
  onNext,
  onPrevious,
  children,
  ...other
}) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';

  const style = {
    position: 'absolute',
    top: '50%',
    zIndex: 9,
  };

  if (children) {
    return (
      <Box {...other}>
        <Box className="arrow left" sx={{ ...style, left: 0 }}>
          <ArrowStyle onClick={onPrevious}>{leftIcon(customIcon, isRTL)}</ArrowStyle>
        </Box>

        {children}

        <Box className="arrow right" sx={{ ...style, right: 0 }}>
          <ArrowStyle onClick={onNext}>{rightIcon(customIcon, isRTL)}</ArrowStyle>
        </Box>
      </Box>
    );
  }

  return (
    <Stack direction="row" spacing={2} {...other}>
      <ArrowStyle onClick={onPrevious}>{leftIcon(customIcon, isRTL)}</ArrowStyle>
      <ArrowStyle onClick={onNext}>{rightIcon(customIcon, isRTL)}</ArrowStyle>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const leftIcon = (customIcon, isRTL) => (
  <Iconify
    // icon={customIcon ? customIcon : directionStraightRight}
    icon="material-symbols:arrow-circle-left-rounded"
    sx={{
      width: 34,
      height: 34,
      color:"black",

      // transform: ' scaleX(-1)',
      // ...(isRTL && { transform: ' scaleX(1)' }),
    }}
  />
);

const rightIcon = (customIcon, isRTL) => (
  <Iconify
    // icon={customIcon ? customIcon : directionStraightRight}
    icon="material-symbols:arrow-circle-right-rounded"
    sx={{
      width: 40,
      height: 40,
      // ...(isRTL && { transform: ' scaleX(-1)' }),
      color:"black",

    }}
  />
);

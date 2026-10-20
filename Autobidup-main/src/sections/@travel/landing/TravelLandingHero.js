import PropTypes from 'prop-types';
import Slider from 'react-slick';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import { Image, CarouselDots } from '../../../components';

import wallpaper1 from '../../../assets/images/landing.jpg';
import wallpaper2 from '../../../Assets/Images/wallpaper2.jpg';
import wallpaper3 from '../../../Assets/Images/Wallpaper3.jpg';
import wallpaper4 from '../../../Assets/Images/Wallpaper4.jpg';
import wallpaper5 from '../../../Assets/Images/Wallpaper.jpg';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    flexGrow: 1,
    display: 'block',
    position: 'relative',
  },
}));

// ----------------------------------------------------------------------

AuthCarousel.propTypes = {
  title: PropTypes.string,
};

export default function AuthCarousel({ title }) {
  const theme = useTheme();

  const carouselSettings = {
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      rounded: true,
      sx: {
        left: -2000,
        right: 0,
        zIndex: 9,
        bottom: 80,
        mx: 'auto',
        position: 'absolute',
      },
    }),
  };

  return (
    <RootStyle>
      <Slider {...carouselSettings}>
        {[wallpaper1, wallpaper2, wallpaper3, wallpaper4,wallpaper5].map((img) => (
          <Box key={img} sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}>
            <Image alt={img} src={img.src} size="firt" sx={{ height: '550px', width: '100%' }} />
          </Box>
        ))}
      </Slider>
    </RootStyle>
  );
}
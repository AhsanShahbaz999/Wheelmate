import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, List, Link, Stack, ListItem, ListSubheader } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
//
import { Image, CarouselDots, CarouselArrows } from '../../components';
import { DialogAnimate, MotionContainer, varFade } from '../../components/animate';
import navImage from '../../assets/images/airport1.jpg';

// ----------------------------------------------------------------------

const SubLinkStyle = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...theme.typography.body3,
  padding: 0,
  width: 'auto',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
  ...(active && {
    ...theme.typography.subtitle3,
    color: theme.palette.text.primary,
  }),
}));

const IconBulletStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  width: 12,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  '&:before': {
    content: '""',
    display: 'block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: theme.palette.text.disabled,
  },
  ...(active && {
    '&:before': {
      content: '""',
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }),
}));

const ListSubheaderStyled = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(2.5),
  color: theme.palette.text.primary,
}));

// ----------------------------------------------------------------------

NavDesktopMenu.propTypes = {
  isOpen: PropTypes.bool,
  isScrolling: PropTypes.bool,
  lists: PropTypes.array,
  onClose: PropTypes.func,
};

export default function NavDesktopMenu({ lists, isOpen, onClose, isScrolling }) {
  const router = useRouter();

  // const [navImage, setNavImage] = useState();

  const theme = useTheme();

  const carouselRef = useRef(null);

  const carouselList = lists.filter((list) => list.subheader !== 'Common');

  const commonList =
    lists.filter((list) => list.subheader === 'Common').length !== 0
      ? lists.filter((list) => list.subheader === 'Common')[0]
      : null;

  console.log(commonList);

  const minList = lists.length > 5;

  const carouselSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <DialogAnimate
      hideBackdrop
      maxWidth={false}
      open={isOpen}
      onClose={onClose}
      variants={
        varFade({
          distance: 80,
          durationIn: 0.16,
          durationOut: 0.24,
          easeIn: 'easeIn',
          easeOut: 'easeOut',
        }).inRight
      }
      PaperProps={{
        sx: {
          m: 0,
          maxWidth: 1,
          position: 'absolute',
          borderRadius: '0 !important',
          top: isScrolling ? HEADER_DESKTOP_HEIGHT - 20 : HEADER_DESKTOP_HEIGHT,
          // Fix scroll on window
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }}
    >
      <Grid container columns={13} spacing={4} sx={{ width: '100%', px: 2, pt: 7, pb: 3 }}>
        <Grid item xs={12} md={6} sx={{ pt: '0 !important' }}>
          <Box sx={{ position: 'relative' }}>
            <Slider ref={carouselRef} {...carouselSettings}>
              {carouselList.map((list) => {
                const { subheader, items, cover } = list;
                // setNavImage(cover);

                const path = items.length > 0 ? items[0].path : '';

                return (
                  <List key={subheader} disablePadding sx={{ px: 2 }} component={MotionContainer}>
                    <Stack
                      // spacing={1.5}
                      alignItems="center"
                      justifyContent="space-between"
                      direction="row"
                      flexWrap="nowrap"
                      sx={{ width: '200%' }}
                      // flex-wrap: nowrap
                    >
                      {/* <Stack>
                        {items?.map((item) => {
                          const { title, path } = item;

                          const active = router.pathname === path || router.asPath === path;

                          return <LinkItem key={title} title={title} href={path} active={active} />;
                        })}
                      </Stack> */}
                    </Stack>
                  </List>
                );
              })}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </DialogAnimate>
  );
}

// ----------------------------------------------------------------------

LinkItem.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
};

function LinkItem({ title, href, active }) {
  return (
    <NextLink key={title} href={href} passHref>
      <Link
        color="inherit"
        underline="hover"
        component={m.a}
        variants={
          varFade({
            distance: 12,
            durationIn: 0.16,
            durationOut: 0.12,
            easeIn: 'easeIn',
          }).inRight
        }
      >
        <SubLinkStyle active={active}>
          {/* <IconBulletStyle active={active} /> */}
          {title}
        </SubLinkStyle>
      </Link>
    </NextLink>
  );
}

import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Divider, Container, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive } from '../../hooks';
// routes
import Routes from '../../routes';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
// components
import { Logo, Label } from '../../components';
//
import { NavMobile, NavDesktop, navConfig } from '../nav';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

Header.propTypes = {
  transparent: PropTypes.bool,
};

export default function Header({ transparent }) {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');
  const isLight = theme.palette.mode === 'light';
  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially, assume the user is not logged in
  const [openDialog, setOpenDialog] = useState(false); // State for dialog

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    console.log('Checking login status. Token:', token);
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    // Initial check
    checkLoginStatus();

    // Add event listener for storage changes
    window.addEventListener('storage', checkLoginStatus);

    // Cleanup
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Add another useEffect to check login status when the component updates
  useEffect(() => {
    checkLoginStatus();
  }, [router.asPath]); // Check when route changes

  const handleLogin = () => {
    router.push('/auth/logincover'); // Navigate to the login page
  };

  const handleProfileClick = () => {
    setOpenDialog(true); // Open dialog when profile is clicked
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close dialog
  };

  const handleLogout = () => {
    try {
      // Remove token from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('username'); // Also remove username
      // Update isLoggedIn state
      setIsLoggedIn(false);
      // Close dialog
      setOpenDialog(false);
      // Redirect to login page
      router.push('/auth/logincover');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Something went wrong during logout. Please try again.');
    }
  };

  const renderUserSection = () => {
    console.log('Rendering user section. isLoggedIn:', isLoggedIn); // Debug log
    if (isLoggedIn) {
      return (
        <>
          <Avatar
            onClick={handleProfileClick}
            sx={{ 
              bgcolor: 'primary.main', 
              marginRight: '8px',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out'
              }
            }}
          />
          <Dialog 
            open={openDialog} 
            onClose={handleCloseDialog}
            PaperProps={{
              sx: {
                borderRadius: 2,
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                minWidth: '300px'
              }
            }}
          >
            <DialogTitle sx={{ 
              borderBottom: '1px solid #eee',
              pb: 2
            }}>
              Profile
            </DialogTitle>
            <DialogContent sx={{ pt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Welcome, {localStorage.getItem('username')}
              </Typography>
            </DialogContent>
            <DialogActions sx={{ 
              borderTop: '1px solid #eee',
              pt: 2,
              px: 3
            }}>
              <Button 
                onClick={handleLogout}
                variant="contained"
                color="primary"
                fullWidth
              >
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </>
      );
    } else {
      return (
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      );
    }
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', color: 'Black' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container sx={{ px: 0 }}>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack spacing={4} direction="row">
              <Box sx={{ lineHeight: 0 }}>
                <Logo onDark={transparent && !isScrolling} />
              </Box>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
              {isDesktop && (
                <>
                  <NavDesktop
                    isScrolling={isScrolling}
                    isTransparent={transparent}
                    navConfig={navConfig}
                  />
                </>
              )}
              <Button
                variant="contained"
                onClick={() => {
                  if (!isLoggedIn) {
                    router.push('/auth/logincover');
                  } else {
                    router.push('/travel/buysellcar/form');
                  }
                }}
              >
                Post an Ad
              </Button>

              {renderUserSection()} {/* Display Login or Logout based on isLoggedIn */}
            </Stack>
            {!isDesktop && (
              <NavMobile
                navConfig={navConfig}
                sx={{
                  ml: 1,
                  ...(isScrolling && { color: 'text.primary' }),
                }}
              />
            )}
          </Container>
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}

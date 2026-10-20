// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, Typography } from '@mui/material';
// routes
import Routes from '../../src/routes';
// components
import { Page, Logo } from '../../src/components';
// sections
import { Authwithsocial, Authcarousel } from '../../src/sections/auth'; // Keep this line

import { Loginform } from '../../src/sections/auth'; // No need to import Authwithsocial and Authcarousel again

import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4, 2.5),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '50%',
    padding: theme.spacing(2, 4),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '50%',
    padding: theme.spacing(6, 15),
  },
}));

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  const router = useRouter();

  return (
    <Page title="Login Cover">
      <RootStyle>
        <ContentStyle>
          <Stack
            sx={{
              pt: { xs: 2, md: 5 },
              textAlign: { xs: 'center' },
            }}
          >
            <Typography variant="h3" paragraph>
              Login
            </Typography>
          </Stack>

          <Loginform />

          <Typography variant="body2" pt={2} sx={{ color: 'text.secondary' }}>
            Don’t have an account?
            <NextLink href="/auth/registercover" passHref>
              <Link variant="subtitle2" color="#CE9A00">
                SignUp
              </Link>
            </NextLink>
          </Typography>

          <Divider sx={{ py: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider>

          <Authwithsocial />
        </ContentStyle>

        <Authcarousel title="Hi, Welcome Back" />
      </RootStyle>
    </Page>
  );
}

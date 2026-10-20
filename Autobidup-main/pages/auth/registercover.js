// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, Typography, Container } from '@mui/material';
// routes
import Routes from '../../src/routes';
// components
import { Page } from '../../src/components';
import { Logo } from '../../src/components';
import { Authwithsocial, Authcarousel, Registerform } from '../../src/sections/auth';
import { Scrollbar } from '../../src/components';

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
    padding: theme.spacing(1, 10),
  },
}));
const ScrollStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(1.5),
  },
}));

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  return (
    <Page title="Register Cover">
      <RootStyle>
        <ContentStyle>
          <Scrollbar>
            <ScrollStyle>
              <Stack
                sx={{
                  textAlign: { xs: 'center' },
                }}
              >
                <Typography variant="h3" paragraph >
                  Sign Up
                </Typography>
              </Stack>
              <Registerform />
              <Typography variant="body2" mt={0.5} sx={{ color: 'text.secondary' }}>
                Already have an account?
                <NextLink href="/auth/logincover" passHref>
                  <Link variant="subtitle2" color="#CE9A00">
                    {''} Login
                  </Link>
                </NextLink>
              </Typography>

              <Divider sx={{ py: 1 }}>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  OR
                </Typography>
              </Divider>
              <Authwithsocial />
            </ScrollStyle>
          </Scrollbar>
        </ContentStyle>

        <Authcarousel title={``} />
      </RootStyle>
    </Page>
  );
}

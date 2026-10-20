// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography } from '@mui/material';
// utils
import cssStyles from '../../../../src/utils/cssStyles';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    url: 'https://images.ctfassets.net/ov8o7v78mnye/1x09e4YgjuR6cSOTGG5Dj6/e2cf23e701a23b0f3218c2a85f821e5a/06__1_.jpg',
    // startColor: `${alpha(theme.palette.grey[1.88], 0.88)}`,
    // endColor: `${alpha(theme.palette.grey[0.88], 0.88)}`,
  }),
}));

// ----------------------------------------------------------------------

export default function TravelLandingfull() {
  return (
    <RootStyle>
      <Container>
      <Stack spacing={3} alignItems="center" sx={{ color: 'white', textAlign: 'center' }}>
          <Typography variant="h2">Wheelmate</Typography>
          <Typography variant="h3">The Smarter Way To Sell And Buy Cars.</Typography>
        </Stack>
      </Container>
    </RootStyle>
  );
}

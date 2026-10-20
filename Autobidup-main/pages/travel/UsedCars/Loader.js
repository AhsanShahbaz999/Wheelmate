import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Logo from '../../../src/assets/images/main-logo.png';

const keyframes = `
  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(true);

    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <style>{keyframes}</style>
      <Backdrop
        style={{
          color: '#fff',
          zIndex: '10',
          display: open ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={open}
        onClick={handleClose}
      >
        <img
          style={{
            maxWidth: '200px',
            height: 'auto',
            animationName: 'spin',
            animationDuration: '3s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            '@media (minWidth: 600px)': {
              maxWidth: '100px',
            },
          }}
          src={Logo.src}
          alt="AutoBidUp Logo"
        />
      </Backdrop>
    </div>
  );
}

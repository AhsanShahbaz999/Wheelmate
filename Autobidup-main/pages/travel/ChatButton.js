import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

export default function CombinedComponents() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Box
        sx={{
          height: '430px', // Set the desired height here
          transform: 'translateZ(0px)',
          flexGrow: 1,
          position: 'fixed',
          zIndex: '2147483003',
          padding: '0 !important',
          margin: '0 !important',
          border: 'none',
          bottom: '10px',
          right: '20px',
          maxWidth: '48px',
          width: '48px',
          maxHeight: '48px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        <div>
          <style>
            {`
          df-messenger {
            --df-messenger-user-message: #000;
            --df-messenger-bot-message: #E5A037; 
            --df-messenger-font-color: #fff;
            --df-messenger-chat-background-color: #fafafa;
            --df-messenger-button-titlebar-color:  #E5A037;
          }
        `}
          </style>
          <df-messenger
            intent="WELCOME"
            chat-title="AutoBidup-ChatBot"
            agent-id="40322495-7af4-4b60-bedb-5f82aa520369"
            language-code="en"
          ></df-messenger>
        </div>
      </Box>
    </div>
  );
}

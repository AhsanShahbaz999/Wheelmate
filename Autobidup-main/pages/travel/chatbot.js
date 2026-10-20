import React, { useEffect } from 'react';
// import carImage from './carr.jpg';
const Chatbot = () => {
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
            // chat-icon="chatbot/public/car-13-yellow.html"
          ></df-messenger>
        </div>
      );
    };
    
  
  export default Chatbot;
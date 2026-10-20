import { useState, useEffect } from 'react';

const ReverseCounter = ({ bid }) => {
  const [strippedHours, setStrippedHours] = useState(0);
  const [strippedMinutes, setStrippedMinutes] = useState(0);
  const [strippedSeconds, setStrippedSeconds] = useState(0);

  useEffect(() => {
    const convertBidTime = () => {
      const [hours, minutes, seconds] = bid.split(':');
      const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

      setStrippedHours(Math.floor(totalSeconds / 3600));
      setStrippedMinutes(Math.floor((totalSeconds % 3600) / 60));
      setStrippedSeconds(totalSeconds % 60);
    };

    convertBidTime();
  }, [bid]);

  useEffect(() => {
    let countdown;
    if (strippedHours > 0 || strippedMinutes > 0 || strippedSeconds > 0) {
      countdown = setInterval(() => {
        if (strippedSeconds > 0) {
          setStrippedSeconds(strippedSeconds - 1);
        } else if (strippedMinutes > 0) {
          setStrippedMinutes(strippedMinutes - 1);
          setStrippedSeconds(59);
        } else if (strippedHours > 0) {
          setStrippedHours(strippedHours - 1);
          setStrippedMinutes(59);
          setStrippedSeconds(59);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [strippedHours, strippedMinutes, strippedSeconds]);

  return (
    <div>
      <div>
        {strippedHours === 0 && strippedMinutes === 0 && strippedSeconds === 0 ? (
          <h3 style={{ color: 'red' }}>Live Auction is Started</h3>
        ) : (
          <h3
            style={{ color: 'red' }}
          >{`${strippedHours}:${strippedMinutes}:${strippedSeconds}`}</h3>
        )}
      </div>
    </div>
  );
};

export default ReverseCounter;

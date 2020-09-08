import React, { useState } from 'react';

const REFRESH_INTERVAL_MS = 1000;

const getCurrentTime = () => new Date(Date.now()).toLocaleTimeString()

const CurrentTime = () => {
  const [now, setNow] = useState(getCurrentTime());

  setInterval(() => setNow(getCurrentTime(), REFRESH_INTERVAL_MS));

  return (
    <div data-elm-id="current-time-box">{ now }</div>
  );
}

export default CurrentTime;

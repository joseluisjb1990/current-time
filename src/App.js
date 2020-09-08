import React, { useState } from 'react';

function App() {
  const [now, setNow] = useState(new Date(Date.now()).toLocaleTimeString());

  setInterval(() => setNow(new Date(Date.now()).toLocaleTimeString(), 1000));

  return (
    <div>{ now }</div>
  );
}

export default App;

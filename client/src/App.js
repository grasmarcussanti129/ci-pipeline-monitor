import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    socket.on('pipelineStatus', (data) => {
      setStatus(data);
    });
  }, []);

  return (
    <div>
      <h1>CI Pipeline Monitor</h1>
      <p>Pipeline Status: {status}</p>
    </div>
  );
}

export default App;
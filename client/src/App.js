import react, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react'

function App() {
  const [ip, setIp] = useState('');
  async function requestServer() {
    const response = await axios.get('https://api.ipify.org/?format=json');
    setIp(response.data.ip)
  }

  useEffect(() => {
    requestServer()
  })

  return (
    <div className="App">
      <h1>{ip}</h1>
      <p>{ip}</p>
    </div>
  );
}

export default App;

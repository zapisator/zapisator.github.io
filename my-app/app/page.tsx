'use client'

import { Button } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Кнопка нажата!');
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <Button variant="contained" onClick={handleClick}>Кнопка</Button>
      <p>{message}</p>
    </div>
  );
}
import React, { useState, useEffect } from 'react';

const LoadingAnimation: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => prevDots.length < 3 ? prevDots + '.' : '');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className='loading-text'>Loading{dots}</h2>;
};

export default LoadingAnimation;

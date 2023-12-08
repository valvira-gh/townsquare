import React, { useState, useEffect } from 'react';

const LoadingAnimation: React.FC = () => {
  const [dots, setDots] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => prevDots.length < 3 ? prevDots + '.' : '');
      setCount(count => count += 1)
    }, 1000);

    return () => clearInterval(interval);

    
  }, []);

  console.log("Count:", count)

  return <h2 className='loading-text'>Loading{dots}</h2>;
};

export default LoadingAnimation;

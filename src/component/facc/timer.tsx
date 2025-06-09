import React,{useState} from 'react';
const Timer = ({ children }) => {
  const [seconds, setSeconds] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return children(seconds);
};
export default Timer;

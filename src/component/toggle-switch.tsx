import React,{useState} from 'react';
const ToggleSwitch = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setOn(o => !o);
    e.stopPropagation();
  };
  return children({ on, toggle });
};
export default ToggleSwitch;
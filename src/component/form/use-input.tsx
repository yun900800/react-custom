import React,{useState} from 'react';
function useInput(initial = '') {
  const [value, setValue] = useState(initial)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  return { value, onChange, setValue }
}
export default useInput;
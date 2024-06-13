import React, { useMemo, useState } from 'react';
import './HookUseMemo.css';

// A dummy function to represent a slow/expensive calculation
const slowCalculation = (number) => {
  console.log('Performing slow/expensive calculation...');
  for (let i = 0; i <= 1000000000; i++) {
    return number * 2;
  }
};

export default function HookUseMemo() {
  const [inputValue, setInputValue] = useState(0);
  const [dark, setDark] = useState(false);

  // Memoize the result of the expensive calculation
  const calculatedValue = useMemo(() => slowCalculation(inputValue), [inputValue]);
  
  const themeStyles = {
    backgroundColor: dark ?  'black' : '#b1d8e4',
    color: dark ?  'white' : 'black',
    padding: '10px 20px',
    width: '77%',
    textAlign: 'center',
    marginBottom: '10px'
  }

  return (
    <div className='hook'>
      <div className='memo-title'>Example: <span>Expensive Calculation</span></div>
        <div className='note'>Note: Calculated Value = Input value * 2</div>
        <div className='input-title'>Input value</div>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(parseInt(e.target.value))}
        className='memo-input' 
      />
      <div style={themeStyles}>Calculated Value: {calculatedValue}</div>
      <button onClick={() => setDark(prevDark => !prevDark)} className='memo-button'>
        Change Theme
      </button>
    </div>
  );
};


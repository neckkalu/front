import React, { useState } from 'react';
import './App.css';
import InputBox from 'components/inputBox';

function App() {

  const [value, setValue] = useState<string>('');
  
  return (
    <>
    <InputBox />
    </>
  );
}

export default App;

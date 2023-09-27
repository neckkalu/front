import React, { useState } from 'react';
import './App.css';
import Header from 'layouts/Header';
import InputBox from 'components/InputBox';
import Footer from 'layouts/Footer';


function App() {

  const [value, setValue] = useState<string>('');
  
  return (
    <>
      <InputBox label={''} type={'text'} placeholder={''} value={''} setValue={function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.');
      } } error={false} />
    </>
  );
}

export default App;

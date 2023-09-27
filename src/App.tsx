import React, { useState } from 'react';
import './App.css';
import InputBox from 'components/inputBox';
import FaceToFaceBoardListItem from 'components/FaceToFaceBoardListItem';

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

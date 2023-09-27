import React, { useState } from 'react';
import './App.css';
import InputBox from 'components/inputBox';
import FaceToFaceBoardListItem from 'components/FaceToFaceBoardListItem';

function App() {

  const [value, setValue] = useState<string>('');
  
  return (
    <>
      <FaceToFaceBoardListItem />
    </>
  );
}

export default App;

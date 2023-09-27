import React, { useState } from 'react';
import './App.css';

import Header from 'layouts/Header';
import InputBox from 'components/InputBox';
import Footer from 'layouts/Footer';



function App() {

  const [value, setValue] = useState<string>('');
  
  return (
    <>
    <Header />
    <Footer />
    </>
  );
}

export default App;

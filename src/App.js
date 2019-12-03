import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Content from './components/Content';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');
  return (
    <Fragment>
      <Header />
      <Buttons setContent={setContent} />
      <Content content={content} />
    </Fragment>
  );
};

export default App;

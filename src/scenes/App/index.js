import React from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Resume from '../../components/Resume';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import './App.scss';

function App() {
  return (
    <>
      <Menu/>
      <Header/>
      <Introduction/>
      <hr/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;

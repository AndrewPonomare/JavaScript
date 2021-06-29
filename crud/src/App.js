import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'



const App = (props) => {

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
  );
}


export default App;

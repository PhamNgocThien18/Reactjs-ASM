import './App.css';
import React from 'react';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </div>
  );
}

export default App;

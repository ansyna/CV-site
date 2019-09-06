import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComp from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
			My first react app
        </p>
      </header>
      <NewComp />
    </div>
  );
}

export default App;

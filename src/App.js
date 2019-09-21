import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
        <div className='nav'>
          <h1>Portfolio</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';

import logo from './reactlogo.png';

import './App.css';

function App() {
  return (
    <main className="container">
      <div className="item">
        <img src={logo} alt="React Logo" />
      </div>
      <div className="item">
        <h1>Hello world !</h1>
      </div>
      <div className="item">
        <p>Welcome to your fresh React App &#127752;</p>
      </div>
    </main>
  );
}

export default App;

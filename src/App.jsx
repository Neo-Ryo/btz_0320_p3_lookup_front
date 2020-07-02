import React, { useState, useEffect } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Router from './components/Router';
import LandingPage from './components/landingPage/LandingPage';

function App() {
  const [count, setCount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCount(true);
    }, 1200);
  }, []);
  if (!count) {
    return (
      <Fade>
        <LandingPage />
      </Fade>
    );
  }

  return (
    <div className="App">
      <Fade>
        <Router />
      </Fade>
    </div>
  );
}

export default App;

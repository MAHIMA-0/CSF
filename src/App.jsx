import React, { useState } from 'react';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Results from './pages/Results';
import './App.css';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Simple page state: 'home', 'feedback', 'results'
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <nav className="nav-bar">
        <button onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>
          Home
        </button>
        <button onClick={() => setPage('feedback')} className={page === 'feedback' ? 'active' : ''}>
          Feedback
        </button>
        <button onClick={() => setPage('results')} className={page === 'results' ? 'active' : ''}>
          Results
        </button>
      </nav>

      {page === 'home' && <Home />}
      {page === 'feedback' && (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
        />
      )}
      {page === 'results' && <Results good={good} neutral={neutral} bad={bad} />}
    </div>
  );
}

export default App;

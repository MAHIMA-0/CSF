import React from 'react';
import Statistics from '../components/Statistics';

function Results({ good, neutral, bad }) {
  return (
    <div className="page results-page">
      <h2>Feedback Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default Results;

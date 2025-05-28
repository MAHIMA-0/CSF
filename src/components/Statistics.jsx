import React from 'react';

function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : ((good - bad) / total).toFixed(2);
  const positivePercent = total === 0 ? 0 : ((good / total) * 100).toFixed(1);

  if (total === 0) {
    return <p>No feedback given yet.</p>;
  }

  return (
    <ul className="stats-list">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Average Score: {average}</li>
      <li>Positive Feedback: {positivePercent}%</li>
    </ul>
  );
}

export default Statistics;

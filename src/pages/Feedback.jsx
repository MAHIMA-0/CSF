import React from 'react';
import FeedbackButtons from '../components/FeedbackButtons';

function Feedback({ good, neutral, bad, setGood, setNeutral, setBad }) {
  return (
    <div className="page feedback-page">
      <h2>Give Your Feedback</h2>
      <FeedbackButtons
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      />
    </div>
  );
}

export default Feedback;

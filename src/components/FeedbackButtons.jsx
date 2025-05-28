import React from 'react';

function FeedbackButtons({ good, neutral, bad, setGood, setNeutral, setBad }) {
  return (
    <div className="buttons-group">
      <button onClick={() => setGood(good + 1)} className="btn good-btn">
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)} className="btn neutral-btn">
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)} className="btn bad-btn">
        Bad
      </button>
    </div>
  );
}

export default FeedbackButtons;

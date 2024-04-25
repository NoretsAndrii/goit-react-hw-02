import { useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = feedbackType => {
    console.log(feedbackType);
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback values={values} />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;

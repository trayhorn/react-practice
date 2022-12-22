import { useState } from "react";
import s from "./App.module.css";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = (e) => {
    switch (e.target.name) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  const options = ['Good', 'Neutral', 'Bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedback = () => {
    const total = good + neutral + bad;
    return Math.round(good / total * 100);
  }

  return (
    <div className={s.container}>
      <h2>Please leave a feedback</h2>
      <FeedbackOptions
        options={options}
        onLeaveFeedback={onButtonClick}
      />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positive={countPositiveFeedback}
      />
    </div>
  )
}

export default App;
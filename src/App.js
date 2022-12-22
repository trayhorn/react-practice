import { Component } from "react";
import s from "./App.module.css";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onButtonClick = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round(good / total * 100);
  }


  render() {
    const options = Object.keys(this.state);

    return (
      <div className={s.container}>
        <h2>Please leave a feedback</h2>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onButtonClick}
        />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positive={this.countPositiveFeedback}
        />
      </div>
    )
  }
}

export default App;
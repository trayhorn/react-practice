const Statistics = ({good, neutral, bad, total, positive}) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total()}</li>
    <li>
      Positive feedback: {good > 0 && positive()}
    </li>
  </ul>
)

export default Statistics;
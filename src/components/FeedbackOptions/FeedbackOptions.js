const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        name={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
  ))}
  </div>
)

export default FeedbackOptions;
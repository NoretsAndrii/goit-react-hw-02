export default function Feedback({ values: { good, neutral, bad } }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {good + neutral + bad}</li>
      <li>Positive</li>
    </ul>
  );
}

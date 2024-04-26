import clsx from 'clsx';

import css from './Feedback.module.css';

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul>
      <li className={css.good}>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li className={css.bad}>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li
        className={clsx(
          positiveFeedback >= 60 && css.good,
          positiveFeedback >= 30 && positiveFeedback < 60 && css.neutral,
          positiveFeedback < 30 && css.bad
        )}
      >
        Positive: {positiveFeedback}%
      </li>
    </ul>
  );
}

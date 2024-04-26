import css from './Options.module.css';

export default function Options({ onUpdate, totalFeedback, onReset }) {
  return (
    <div>
      <button className={css.button} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {totalFeedback !== 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

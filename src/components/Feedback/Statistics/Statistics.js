import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>
        Good: <span className={css.stat}>{good}</span>
      </p>
      <p>
        Neutral: <span className={css.stat}>{neutral}</span>
      </p>
      <p>
        Bad: <span className={css.stat}>{bad}</span>
      </p>
      <p>
        Total: <span className={css.stat}>{total}</span>
      </p>
      <p>
        Positive feedback: <span className={css.stat}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }

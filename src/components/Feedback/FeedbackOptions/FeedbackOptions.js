import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback } ) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        type="button"
        name={good}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        {good}
      </button>
      <button
        type="button"
        name={neutral}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        {neutral}
      </button>
      <button
        type="button"
        name={bad}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        {bad}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

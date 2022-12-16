import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from './Feedback/Notification/Notification';
import { Section } from './Feedback/Section/Section';
import { Statistics } from './Feedback/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = e => {
    const { name } = e.currentTarget;
    
    switch (name) {
      case 'good':
        setGood((state => state + 1))
        break;
    
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={setGood(good)}
          neutral={setNeutral(neutral)}
          bad={setBad(bad)}
          onLeaveFeedback={handleFeedback}
        />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }

// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleFeedback = e => {
//     const { name } = e.currentTarget;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const total = good + neutral + bad;
//     const positivePercentage = Math.round((good / total) * 100);

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleFeedback}
//         />
//         {total > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </Section>
//     );
//   }
// }

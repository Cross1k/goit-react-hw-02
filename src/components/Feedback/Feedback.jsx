import css from "./Feedback.module.css";

const Feedback = ({ feedbackOptions, totalFeedback }) => {
  const keys = Object.keys(feedbackOptions);
  if (totalFeedback() > 0) {
    return (
      <>
        {keys.map((item) => {
          return (
            <p className={css.text} key={item}>
              {item}: {feedbackOptions[item]}
            </p>
          );
        })}
        <p className={css.text}> Total: {totalFeedback()}</p>
        <p className={css.text}>
          Possitive:
          {Math.round((feedbackOptions.good / totalFeedback()) * 100)}%
        </p>
      </>
    );
  } else {
    return <p className={css.text}>Not feedback yet</p>;
  }
};

export default Feedback;

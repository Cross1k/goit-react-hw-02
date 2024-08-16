import css from "./Feedback.module.css";

const Feedback = ({ feedbackOptions, totalFeedback, positiveFeedback }) => {
  const keys = Object.keys(feedbackOptions);

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
        {positiveFeedback}%
      </p>
    </>
  );
};

export default Feedback;

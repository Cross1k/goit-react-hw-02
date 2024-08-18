import css from "./Feedback.module.css";

const Feedback = ({ feedbackOptions, total, positiveFeedback }) => {
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
      <p className={css.text}> Total: {total}</p>
      <p className={css.text}>
        Possitive:
        {positiveFeedback}%
      </p>
    </>
  );
};

export default Feedback;

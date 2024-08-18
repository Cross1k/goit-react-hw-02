import css from "./Options.module.css";

export default function Options({
  feedbackOptions,
  updateFeedback,
  resetValues,
  total,
}) {
  const keys = Object.keys(feedbackOptions);
  return (
    <div className={css.buttonsList}>
      {keys.map((item) => {
        return (
          <button
            key={item}
            className={css.button}
            onClick={() => updateFeedback(item)}
          >
            {item}
          </button>
        );
      })}
      {total > 0 && (
        <button className={css.button} onClick={resetValues}>
          Reset
        </button>
      )}
    </div>
  );
}

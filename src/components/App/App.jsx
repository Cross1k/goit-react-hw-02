import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const feedbackInput = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const getInitialFeedback = () => {
    const savedFeedbacks = window.localStorage.getItem("feedback-values");
    return savedFeedbacks != null ? JSON.parse(savedFeedbacks) : feedbackInput;
  };
  const [feedbackOptions, setFeedbackOptions] = useState(getInitialFeedback);

  useEffect(() => {
    window.localStorage.setItem(
      "feedback-values",
      JSON.stringify(feedbackOptions)
    );
  }, [feedbackOptions]);

  const totalFeedback = () => {
    let sum = 0;
    for (let count in feedbackOptions) {
      sum += feedbackOptions[count];
    }
    return sum;
  };

  const total = totalFeedback();

  const resetValues = () => {
    let resetFeedbackOptions = {};
    setFeedbackOptions((feedbackOptions) => {
      for (let key in feedbackOptions) {
        resetFeedbackOptions[key] = 0;
      }

      return { ...resetFeedbackOptions };
    });
  };

  const updateFeedback = (feedbackType) => {
    setFeedbackOptions((feedbackOptions) => ({
      ...feedbackOptions,
      [feedbackType]: feedbackOptions[feedbackType] + 1,
    }));
  };

  const positiveFeedback = Math.round((feedbackOptions.good / total) * 100);

  return (
    <>
      <Description />
      <Options
        feedbackOptions={feedbackOptions}
        updateFeedback={updateFeedback}
        resetValues={resetValues}
        total={total}
      />
      {totalFeedback() > 0 ? (
        <Feedback
          feedbackOptions={feedbackOptions}
          positiveFeedback={positiveFeedback}
          total={total}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;

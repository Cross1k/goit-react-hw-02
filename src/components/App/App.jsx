import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

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
  });

  const totalFeedback = () => {
    let sum = 0;
    for (let count in feedbackOptions) {
      sum += feedbackOptions[count];
    }
    return sum;
  };

  const resetValues = () => {
    setFeedbackOptions((feedbackOptions) => {
      for (let key in feedbackOptions) {
        feedbackOptions[key] = 0;
      }
      return { ...feedbackOptions };
    });
  };

  const updateFeedback = (feedbackType) => {
    setFeedbackOptions((feedbackOptions) => ({
      ...feedbackOptions,
      [feedbackType]: feedbackOptions[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options
        feedbackOptions={feedbackOptions}
        updateFeedback={updateFeedback}
        resetValues={resetValues}
        totalFeedback={totalFeedback}
      />
      <Feedback
        feedbackOptions={feedbackOptions}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
    </>
  );
};

export default App;

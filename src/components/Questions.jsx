import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Question from "./Question";
import { appActionTypes, useAppContext } from "../context";

function Questions() {
  const { state, dispatch } = useAppContext();
  const { questions } = state;
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const activeQuestion = questions[activeQuestionIdx];

  const handlePrev = () => {
    setActiveQuestionIdx((prev) => prev - 1);
  };

  console.log(
    "hello",
    activeQuestion?.correct_answer,
    state.userSelectedAnswer
  );
  console.log("answer,", state.correctAnswers);
  const handleNext = () => {
    setActiveQuestionIdx((prev) => prev + 1);
    if (activeQuestion.correct_answer === state.userSelectedAnswer) {
      dispatch({
        type: appActionTypes.UPDATE_CORRECT_ANSWERS,
      });
    }
  };

  if (questions.length === 0) {
    return <Typography sx={{ position: "absolute" }}>Loading</Typography>;
  }
  return (
    <Stack sx={{ position: "absolute" }}>
      <AnimatePresence mode="wait">
        <Question
          key={activeQuestionIdx}
          ques={activeQuestion}
          handleNext={handleNext}
          handlePrev={handlePrev}
          activeQuestionIdx={activeQuestionIdx}
        />
      </AnimatePresence>
    </Stack>
  );
}

export default Questions;

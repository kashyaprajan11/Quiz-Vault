import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Question from "./Question";
import { useAppContext } from "../context";

function Questions() {
  const { state } = useAppContext();
  const { questions } = state;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const handlePrev = () => {
    setActiveQuestionIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveQuestionIndex((prev) => prev + 1);
  };

  if (questions.length === 0) {
    return <Typography sx={{ position: "absolute" }}>Loading</Typography>;
  }
  return (
    <Stack sx={{ position: "absolute" }}>
      <AnimatePresence mode="wait">
        <Question
          ques={questions[activeQuestionIndex]}
          handleNext={handleNext}
          handlePrev={handlePrev}
          activeQuestionIndex={activeQuestionIndex}
        />
      </AnimatePresence>
    </Stack>
  );
}

export default Questions;

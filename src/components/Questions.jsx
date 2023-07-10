import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Question from "./Question";
import { useAppContext } from "../context";

function Questions() {
  const { state } = useAppContext();
  const { questions } = state;
  const [activeQuestion, setActiveQuestion] = useState(0);

  const handlePrev = () => {
    setActiveQuestion((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveQuestion((prev) => prev + 1);
  };

  if (questions.length === 0) {
    return <Typography sx={{ position: "absolute" }}>Loading</Typography>;
  }
  return (
    <Stack sx={{ position: "absolute" }}>
      <AnimatePresence mode="wait">
        <Question
          key={activeQuestion}
          ques={questions[activeQuestion]}
          handleNext={handleNext}
          handlePrev={handlePrev}
          activeQuestion={activeQuestion}
        />
      </AnimatePresence>
    </Stack>
  );
}

export default Questions;

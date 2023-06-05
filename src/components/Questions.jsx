import { useState } from "react";
import { Stack, Typography } from "@mui/material";

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
    return <Typography>Loading</Typography>;
  }
  return (
    <Stack>
      <Question
        ques={questions[activeQuestion]}
        handleNext={handleNext}
        handlePrev={handlePrev}
        activeQuestion={activeQuestion}
      />
    </Stack>
  );
}

export default Questions;

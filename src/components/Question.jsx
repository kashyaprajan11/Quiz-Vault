import { Stack, Typography, Button } from "@mui/material";
import { useAppContext } from "../context";

function Question({ ques, activeQuestion, handleNext, handlePrev }) {
  const { state } = useAppContext();
  const { questions } = state;
  const { question, correct_answer: correctAnswer } = ques;
  return (
    <Stack>
      <Typography>{question}</Typography>
      <Typography>{correctAnswer}</Typography>
      <Button onClick={handlePrev} disabled={activeQuestion === 0}>
        Previous
      </Button>
      <Button onClick={handleNext}>
        {activeQuestion === questions.length - 1 ? "Results" : "Next"}
      </Button>
    </Stack>
  );
}

export default Question;

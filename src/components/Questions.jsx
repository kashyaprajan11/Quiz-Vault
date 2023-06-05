import { Stack } from "@mui/material";

import Question from "./Question";
import { useAppContext } from "../context";

function Questions() {
  const { state } = useAppContext();
  const { questions } = state;
  return (
    <Stack>
      {questions.map(({ question, correct_answer }) => (
        <Question question={question} correctAnswer={correct_answer} />
      ))}
    </Stack>
  );
}

export default Questions;

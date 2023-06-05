import { Stack, Typography } from "@mui/material";

function Question({ question, correctAnswer }) {
  return (
    <Stack>
      <Typography>{question}</Typography>
      <Typography>{correctAnswer}</Typography>
    </Stack>
  );
}

export default Question;

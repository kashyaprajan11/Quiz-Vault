import { Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useAppContext } from "../context";

function Question({ ques, activeQuestion, handleNext, handlePrev }) {
  const { state } = useAppContext();
  const { questions } = state;
  const { question, correct_answer: correctAnswer } = ques;
  return (
    <Stack
      p={4}
      sx={{
        maxWidth: "350px",
        background: "#fff",
        color: "#000",
        borderRadius: "1rem",
        opacity: 0.9,
        boxShadow: "4px 4px 10px 10px #fff, 4px 4px 10px 10px #0ff",
      }}
      component={motion.div}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-300%" }}
    >
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

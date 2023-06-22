import { Stack, Typography, Button, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useAppContext } from "../context";

const ChoiceButton = styled(Button)(({ theme }) => ({
  padding: "1em 2em",
  border: "1px solid #000",
  borderRadius: "10px",
  color: "",
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    inset: 0,
    width: 0,
    height: "100%",
    background: "#0f0",
    transition: "all 500ms ease-in",
    zIndex: -1,
  },
  "&:hover::after": {
    width: "100%",
  },
}));

function Question({ ques, activeQuestion, handleNext, handlePrev }) {
  const { state } = useAppContext();
  const { questions } = state;
  const { question, correct_answer: correctAnswer } = ques;
  return (
    <Stack
      p={4}
      spacing={2}
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
      {/* <Typography>{correctAnswer}</Typography> */}
      <Stack spacing={2}>
        <ChoiceButton>True</ChoiceButton>
        <ChoiceButton>False</ChoiceButton>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={handlePrev} disabled={activeQuestion === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>
          {activeQuestion === questions.length - 1 ? "Results" : "Next"}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Question;

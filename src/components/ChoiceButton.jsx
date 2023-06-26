import { Stack, Button, styled } from "@mui/material";
import { useState } from "react";

const CustomizedButton = styled(Button)(({ theme, idx }) => ({
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
    background: idx === 0 ? "#0f0" : "#f00",
    transition: "all 500ms ease-in",
    zIndex: -1,
  },
  "&:hover::after": {
    width: "100%",
  },
}));

function ChoiceButton({ activeQuestionIndex }) {
  const [activeBtnIndex, setActiveBtnIndex] = useState(null);

  const buttonType = ["True", "False"];

  const handleClick = (i) => () => {
    const trueOrFalse = activeBtnIndex === 0 ? true : false;
    setActiveBtnIndex(i !== activeBtnIndex ? i : null);
  };

  return (
    <Stack spacing={2}>
      {buttonType.map((btnText, i) => {
        const isActive = activeBtnIndex === i;
        return (
          <CustomizedButton
            idx={i}
            key={i}
            sx={{
              background: isActive
                ? i === 0
                  ? "#0f0"
                  : "#f00"
                : "transparent",
            }}
            onClick={isActive ? null : handleClick(i)}
          >
            {btnText}
          </CustomizedButton>
        );
      })}
    </Stack>
  );
}

export default ChoiceButton;

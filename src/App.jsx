import { Stack } from "@mui/material";

import Questions from "./components/Questions";
import ParticlesContainer from "./components/ParticlesContainer";

function App() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", height: "100%" }}
    >
      <Questions />
      //Todo: Creating error while rendering
      {/* <ParticlesContainer /> */}
    </Stack>
  );
}

export default App;

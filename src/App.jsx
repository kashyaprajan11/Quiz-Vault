import { Stack } from "@mui/material";

import Questions from "./components/Questions";

function App() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", height: "100%" }}
    >
      <Questions />
    </Stack>
  );
}

export default App;

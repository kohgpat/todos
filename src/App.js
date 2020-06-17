import React from "react";
import { ThemeProvider } from "./contexts/Theme";
import { TodosProvider } from "./contexts/Todos";
import Todos from "./modules/Todos";
// import useDarkMode from "./hooks/useDarkMode";

function App() {
  // const theme = useDarkMode() ? "dark" : "light";
  const theme = "light";

  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;

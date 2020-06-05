import React from "react";
import { TodosProvider } from "./contexts/Todos";
import Todos from "./modules/Todos";

function App() {
  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  );
}

export default App;

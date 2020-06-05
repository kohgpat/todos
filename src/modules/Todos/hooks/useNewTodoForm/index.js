import { useState } from "react";

export const useNewTodoForm = () => {
  const [newTodoFormVisible, setNewTodoFormVisible] = useState(false);

  const toggleNewTodoForm = () => {
    setNewTodoFormVisible(!newTodoFormVisible);
  };

  return {
    newTodoFormVisible,
    toggleNewTodoForm,
  };
};

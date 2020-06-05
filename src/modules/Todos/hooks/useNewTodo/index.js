import { useState } from "react";

export const useNewTodo = () => {
  const [todo, setTodo] = useState({
    text: "",
    favorite: false,
    finished: false,
  });

  const changeTodoText = (text) => {
    setTodo({
      ...todo,
      text,
    });
  };

  return {
    todo,
    changeTodoText,
  };
};

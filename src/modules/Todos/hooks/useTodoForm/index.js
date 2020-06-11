import { useState } from "react";

export const useTodoForm = () => {
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

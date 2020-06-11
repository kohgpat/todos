import { useState } from "react";

export const useTodoForm = ({ todo: todoInput }) => {
  const [todo, setTodo] = useState(
    todoInput || {
      text: "",
      favorite: false,
      finished: false,
    }
  );

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

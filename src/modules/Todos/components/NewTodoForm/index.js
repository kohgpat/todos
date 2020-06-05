import React from "react";
import Button from "../../../../components/Button";
import s from "./index.module.css";
import { useTodos } from "../../hooks/useTodos";
import { useNewTodo } from "../../hooks/useNewTodo";

const NewTodoForm = () => {
  const { addTodo } = useTodos();
  const { todo, changeTodoText } = useNewTodo();

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo(todo);
    changeTodoText("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input
        className={s.input}
        type="text"
        value={todo.text}
        onChange={(e) => changeTodoText(e.target.value)}
        placeholder="Enter todo"
      />
      <Button disabled={!todo.text} type="submit">
        Add
      </Button>
    </form>
  );
};

export default NewTodoForm;

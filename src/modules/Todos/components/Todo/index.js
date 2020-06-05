import React from "react";
import Button from "../../../../components/Button";
import s from "./index.module.css";
import Checkbox from "../../../../components/Checkbox";

const Todo = ({ todo, onCheck, removeTodo }) => {
  return (
    <div className={s.todo}>
      <Checkbox checked={todo.finished} onClick={() => onCheck(todo)} />

      <span className={s.text}>{todo.text}</span>

      <Button className={s.removeButton} onClick={() => removeTodo(todo)}>
        &times;
      </Button>
    </div>
  );
};

export default Todo;

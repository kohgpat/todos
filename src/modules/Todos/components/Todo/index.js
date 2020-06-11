import React from "react";
import Checkbox from "../../../../components/Checkbox";
import ActionsDropdown from "./components/ActionsDropdown";
import s from "./index.module.css";

const Todo = ({ todo, onCheck, removeTodo }) => {
  return (
    <div className={s.todo}>
      <Checkbox checked={todo.finished} onClick={() => onCheck(todo)} />

      <span className={s.text}>{todo.text}</span>

      <ActionsDropdown todo={todo} removeTodo={removeTodo} />
    </div>
  );
};

export default Todo;

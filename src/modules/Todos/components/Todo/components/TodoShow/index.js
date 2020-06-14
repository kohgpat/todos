import React, { useState } from "react";
import cn from "classnames";
import Checkbox from "../../../../../../components/Checkbox";
import ActionsDropdown from "../ActionsDropdown";
import s from "./index.module.css";

const TodoShow = ({ todo, onCheck, toggleEditMode, removeTodo }) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = (todo) => {
    setRemoving(true);

    setTimeout(() => {
      removeTodo(todo);
    }, 240);
  };

  return (
    <div className={cn(s.todo, removing && s.todoRemoving)}>
      <Checkbox checked={todo.finished} onClick={() => onCheck(todo)} />

      <span className={s.text}>{todo.text}</span>

      <ActionsDropdown
        todo={todo}
        toggleEditMode={toggleEditMode}
        removeTodo={handleRemove}
      />
    </div>
  );
};

export default TodoShow;

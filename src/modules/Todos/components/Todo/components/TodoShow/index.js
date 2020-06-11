import React from "react";
import Checkbox from "../../../../../../components/Checkbox";
import ActionsDropdown from "../ActionsDropdown";
import s from "./index.module.css";

const TodoShow = ({ todo, onCheck, toggleEditMode, removeTodo }) => {
  return (
    <div className={s.todo}>
      <Checkbox checked={todo.finished} onClick={() => onCheck(todo)} />

      <span className={s.text}>{todo.text}</span>

      <ActionsDropdown
        todo={todo}
        toggleEditMode={toggleEditMode}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoShow;

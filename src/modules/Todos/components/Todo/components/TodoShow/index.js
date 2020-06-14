import React, { useState } from "react";
import cn from "classnames";
import { TiStar, TiStarOutline } from "react-icons/ti";
import Checkbox from "../../../../../../components/Checkbox";
import ActionsDropdown from "../ActionsDropdown";
import s from "./index.module.css";

const TodoShow = ({
  todo,
  toggleCheck,
  toggleEditMode,
  toggleFavorite,
  removeTodo,
}) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = (todo) => {
    setRemoving(true);

    setTimeout(() => {
      removeTodo(todo);
    }, 240);
  };

  return (
    <div
      className={cn(
        s.todo,
        removing && s.todoRemoving,
        todo.finished && s.todoFinished
      )}
    >
      <Checkbox checked={todo.finished} onClick={() => toggleCheck(todo)} />

      <span className={s.text}>{todo.text}</span>

      <button
        type="button"
        className={s.favoriteToggle}
        onClick={() => toggleFavorite(todo)}
      >
        {todo.favorite ? <TiStar /> : <TiStarOutline />}
      </button>

      <ActionsDropdown
        todo={todo}
        toggleEditMode={toggleEditMode}
        removeTodo={handleRemove}
      />
    </div>
  );
};

export default TodoShow;

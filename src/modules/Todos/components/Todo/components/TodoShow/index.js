import React, { useState } from "react";
import cn from "classnames";
import { TiStar, TiStarOutline } from "react-icons/ti";
import { useTheme } from "../../../../../../contexts/Theme";
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
  const theme = useTheme();

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
        todo.finished && s.todoFinished,
        theme === "dark" && s.todoDark
      )}
    >
      <Checkbox checked={todo.finished} onClick={() => toggleCheck(todo)} />

      <span className={cn(s.text, theme === "dark" && s.textDark)}>
        {todo.text}
      </span>

      <button
        type="button"
        className={cn(
          s.favoriteToggle,
          todo.favorite && s.favoriteToggleActive,
          theme === "dark" && s.favoriteToggleDark
        )}
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

import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
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

  const handleRemove = (todo) => {
    removeTodo(todo);
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      className={cn(
        s.todo,
        todo.finished && s.todoFinished,
        theme === "dark" && s.todoDark
      )}
      variants={variants}
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
    </motion.div>
  );
};

export default TodoShow;

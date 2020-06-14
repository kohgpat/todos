import React from "react";
import TodoShow from "./components/TodoShow";
import TodoEdit from "./components/TodoEdit";

const Todo = ({
  todo,
  toggleCheck,
  toggleEditMode,
  toggleFavorite,
  removeTodo,
}) => {
  if (todo.editMode) {
    return <TodoEdit todo={todo} />;
  }

  return (
    <TodoShow
      todo={todo}
      toggleCheck={toggleCheck}
      toggleEditMode={toggleEditMode}
      toggleFavorite={toggleFavorite}
      removeTodo={removeTodo}
    />
  );
};

export default Todo;

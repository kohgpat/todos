import React from "react";
import TodoShow from "./components/TodoShow";
import TodoEdit from "./components/TodoEdit";

const Todo = ({ todo, onCheck, toggleEditMode, removeTodo }) => {
  if (todo.editMode) {
    return <TodoEdit todo={todo} />;
  }

  return (
    <TodoShow
      todo={todo}
      onCheck={onCheck}
      toggleEditMode={toggleEditMode}
      removeTodo={removeTodo}
    />
  );
};

export default Todo;

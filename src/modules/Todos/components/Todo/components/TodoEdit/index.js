import React from "react";
import TodoForm from "../../../../components/TodoForm";
import { useTodos } from "../../../../hooks/useTodos";

const TodoEdit = ({ todo }) => {
  const { updateTodo, toggleEditMode } = useTodos();

  const handleSubmit = (todo) => {
    updateTodo(todo);
    toggleEditMode(todo);
  };

  return (
    <TodoForm
      todo={todo}
      onSubmit={handleSubmit}
      closeForm={() => toggleEditMode(todo)}
    />
  );
};

export default TodoEdit;

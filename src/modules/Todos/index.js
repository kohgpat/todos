import React from "react";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import s from "./index.module.css";
import { useTodos } from "./hooks/useTodos";
import { useNewTodoForm } from "./hooks/useNewTodoForm";

const Todos = () => {
  const { todos, onCheck, addTodo, toggleEditMode, removeTodo } = useTodos();
  const { newTodoFormVisible, toggleNewTodoForm } = useNewTodoForm();

  return (
    <Screen>
      <div>
        <header className={s.header}>
          <h4 className={s.name}>To Do</h4>
          <Button onClick={toggleNewTodoForm}>
            {newTodoFormVisible ? "Close" : "Add Todo"}
          </Button>
        </header>

        {todos.length > 0 && (
          <ul className={s.list}>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onCheck={onCheck}
                removeTodo={removeTodo}
                toggleEditMode={toggleEditMode}
              />
            ))}
          </ul>
        )}

        {todos.length === 0 && (
          <div className={s.emptyTodosMessage}>No more todos.</div>
        )}

        {newTodoFormVisible && (
          <TodoForm onSubmit={addTodo} closeForm={toggleNewTodoForm} />
        )}
      </div>
    </Screen>
  );
};

export default Todos;

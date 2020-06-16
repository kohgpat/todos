import React from "react";
import cn from "classnames";
import { useTheme } from "../../contexts/Theme";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import s from "./index.module.css";
import { useTodos } from "./hooks/useTodos";
import { useNewTodoForm } from "./hooks/useNewTodoForm";

const Todos = () => {
  const theme = useTheme();
  const {
    todos,
    toggleCheck,
    toggleEditMode,
    toggleFavorite,
    addTodo,
    removeTodo,
  } = useTodos();
  const { newTodoFormVisible, toggleNewTodoForm } = useNewTodoForm();

  return (
    <Screen>
      <div>
        <header className={cn(s.header, theme === "dark" && s.headerDark)}>
          <h4 className={s.name}>To Do</h4>
          <Button onClick={toggleNewTodoForm}>
            {newTodoFormVisible ? "Close" : "Add Todo"}
          </Button>
        </header>

        {todos.length > 0 && (
          <ul className={cn(s.list, theme === "dark" && s.listDark)}>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleCheck={toggleCheck}
                removeTodo={removeTodo}
                toggleEditMode={toggleEditMode}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </ul>
        )}

        {todos.length === 0 && (
          <div
            className={cn(
              s.emptyTodosMessage,
              theme === "dark" && s.emptyTodosMessageDark
            )}
          >
            No more todos.
          </div>
        )}

        {newTodoFormVisible && (
          <TodoForm onSubmit={addTodo} closeForm={toggleNewTodoForm} />
        )}
      </div>
    </Screen>
  );
};

export default Todos;

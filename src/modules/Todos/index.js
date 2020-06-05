import React from "react";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";
import s from "./index.module.css";
import { useTodos } from "./hooks/useTodos";
import { useNewTodoForm } from "./hooks/useNewTodoForm";

const Todos = () => {
  const { todos, onCheck, removeTodo } = useTodos();
  const { newTodoFormVisible, toggleNewTodoForm } = useNewTodoForm();

  return (
    <Screen>
      <div>
        <header className={s.header}>
          <h4 className={s.name}>To Do</h4>
          <Button onClick={() => toggleNewTodoForm()}>+ New</Button>
        </header>

        <ul className={s.list}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheck={onCheck}
              removeTodo={removeTodo}
            />
          ))}

          {newTodoFormVisible && <NewTodoForm />}
        </ul>
      </div>
    </Screen>
  );
};

export default Todos;

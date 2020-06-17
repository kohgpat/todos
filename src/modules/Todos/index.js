import React from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
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

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Screen>
      <div>
        <header className={cn(s.header, theme === "dark" && s.headerDark)}>
          <h4 className={s.name}>To Do</h4>
          <Button onClick={toggleNewTodoForm}>
            {newTodoFormVisible ? "Close" : "Add Todo"}
          </Button>
        </header>

        <AnimatePresence>
          {todos.length > 0 && (
            <motion.ul
              className={cn(s.list, theme === "dark" && s.listDark)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
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
            </motion.ul>
          )}
        </AnimatePresence>

        {todos.length === 0 && (
          <motion.div
            className={cn(
              s.emptyTodosMessage,
              theme === "dark" && s.emptyTodosMessageDark
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          >
            No more todos.
          </motion.div>
        )}

        <AnimatePresence>
          {newTodoFormVisible && (
            <TodoForm onSubmit={addTodo} closeForm={toggleNewTodoForm} />
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
};

export default Todos;

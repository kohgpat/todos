import React, { useRef, useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { useTheme } from "../../../../contexts/Theme";
import Button from "../../../../components/Button";
import s from "./index.module.css";
import { useTodoForm } from "../../hooks/useTodoForm";

const TodoForm = ({ todo: todoInput, onSubmit, closeForm }) => {
  const theme = useTheme();

  const { todo, changeTodoText } = useTodoForm({ todo: todoInput });
  const [validationFailed, setValidationFailed] = useState(false);
  const inputRef = useRef();

  const onChangeText = (e) => {
    changeTodoText(e.target.value);
    setValidationFailed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.text) {
      setValidationFailed(true);
      return;
    }

    onSubmit(todo);
    changeTodoText("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <motion.form
      className={cn(
        s.form,
        validationFailed && s.formValidationFailed,
        todoInput && s.formEditMode,
        theme === "dark" && s.formDark
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        className={cn(s.input, theme === "dark" && s.textareaDark)}
        value={todo.text}
        onChange={onChangeText}
        placeholder="Enter todo"
      />

      <div className={s.controls}>
        <Button type="submit" className={s.control}>
          {todoInput ? "Save" : "Add"}
        </Button>

        <Button type="button" className={s.control} onClick={closeForm}>
          Close
        </Button>
      </div>
    </motion.form>
  );
};

export default TodoForm;

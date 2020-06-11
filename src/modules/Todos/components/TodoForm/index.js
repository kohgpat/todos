import React, { useRef, useState, useEffect } from "react";
import cn from "classnames";
import Button from "../../../../components/Button";
import s from "./index.module.css";
import { useTodos } from "../../hooks/useTodos";
import { useNewTodo } from "../../hooks/useNewTodo";

const TodoForm = ({ closeForm }) => {
  const { addTodo } = useTodos();
  const { todo, changeTodoText } = useNewTodo();
  const [validationFailed, setValidationFailed] = useState(false);
  const inputRef = useRef();

  const onChangeText = (e) => {
    changeTodoText(e.target.value);
    setValidationFailed(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todo.text) {
      setValidationFailed(true);
      return;
    }

    addTodo(todo);
    changeTodoText("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className={cn(s.form, validationFailed && s.formValidationFailed)}
      onSubmit={onSubmit}
    >
      <input
        ref={inputRef}
        className={s.input}
        type="text"
        value={todo.text}
        onChange={onChangeText}
        placeholder="Enter todo"
      />

      <div className={s.controls}>
        <Button disabled={!todo.text} type="submit" className={s.control}>
          Add
        </Button>

        <Button type="button" className={s.control} onClick={closeForm}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;

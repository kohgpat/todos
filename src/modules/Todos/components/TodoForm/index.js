import React, { useRef, useState, useEffect } from "react";
import cn from "classnames";
import Button from "../../../../components/Button";
import s from "./index.module.css";
import { useTodoForm } from "../../hooks/useTodoForm";

const TodoForm = ({ todo: todoInput, onSubmit, closeForm }) => {
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
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className={cn(
        s.form,
        validationFailed && s.formValidationFailed,
        todoInput && s.formEditMode
      )}
      onSubmit={handleSubmit}
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
          {todoInput ? "Save" : "Add"}
        </Button>

        <Button type="button" className={s.control} onClick={closeForm}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
import React from "react";
import cn from "classnames";
import { FiMoreHorizontal } from "react-icons/fi";
import Downshift from "downshift";
import Button from "../../../../components/Button";
import s from "./index.module.css";
import Checkbox from "../../../../components/Checkbox";

const Todo = ({ todo, onCheck, removeTodo }) => {
  return (
    <div className={s.todo}>
      <Checkbox checked={todo.finished} onClick={() => onCheck(todo)} />

      <span className={s.text}>{todo.text}</span>

      <Downshift>
        {({
          getToggleButtonProps,
          getMenuProps,
          getItemProps,
          isOpen,
          highlightedIndex,
        }) => {
          return (
            <div className={s.actions}>
              <Button {...getToggleButtonProps()} className={s.actionsToggle}>
                <FiMoreHorizontal />
              </Button>

              {isOpen ? (
                <ul {...getMenuProps()} className={s.actionsList}>
                  <li
                    {...getItemProps({
                      key: "edit",
                      index: 0,
                      item: "edit",
                    })}
                    className={cn(
                      s.actionsListItem,
                      highlightedIndex === 0 && s.actionsListItemHighlighted
                    )}
                  >
                    <Button type="button" className={s.actionsListItemControl}>
                      Edit
                    </Button>
                  </li>

                  <li
                    {...getItemProps({
                      key: "delete",
                      index: 1,
                      item: "delete",
                    })}
                    className={cn(
                      s.actionsListItem,
                      highlightedIndex === 1 && s.actionsListItemHighlighted
                    )}
                  >
                    <Button
                      type="button"
                      className={s.actionsListItemControl}
                      onClick={() => removeTodo(todo)}
                    >
                      Delete
                    </Button>
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Downshift>
    </div>
  );
};

export default Todo;

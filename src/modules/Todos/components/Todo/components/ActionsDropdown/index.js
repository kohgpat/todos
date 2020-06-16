import React from "react";
import cn from "classnames";
import Downshift from "downshift";
import { FiMoreHorizontal } from "react-icons/fi";
import Button from "../../../../../../components/Button";
import s from "./index.module.css";

const ActionsDropdown = ({ todo, toggleEditMode, removeTodo }) => {
  return (
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
                  <Button
                    type="button"
                    className={cn(
                      s.actionsListItemControl,
                      s.actionsListItemControlTop
                    )}
                    onClick={() => toggleEditMode(todo)}
                  >
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
                    className={cn(
                      s.actionsListItemControl,
                      s.actionsListItemControlBottom
                    )}
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
  );
};

export default ActionsDropdown;

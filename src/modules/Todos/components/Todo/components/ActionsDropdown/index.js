import React from "react";
import cn from "classnames";
import Downshift from "downshift";
import { FiMoreHorizontal } from "react-icons/fi";
import { useTheme } from "../../../../../../contexts/Theme";
import Button from "../../../../../../components/Button";
import s from "./index.module.css";

const ActionsDropdown = ({ todo, toggleEditMode, removeTodo }) => {
  const theme = useTheme();

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
            <Button
              {...getToggleButtonProps()}
              className={cn(
                s.actionsToggle,
                theme === "dark" && s.actionsToggleDark
              )}
            >
              <FiMoreHorizontal />
            </Button>

            {isOpen ? (
              <ul
                {...getMenuProps()}
                className={cn(
                  s.actionsList,
                  theme === "dark" && s.actionsListDark
                )}
              >
                <li
                  {...getItemProps({
                    key: "edit",
                    index: 0,
                    item: "edit",
                  })}
                  className={cn(
                    s.actionsListItem,
                    theme === "dark" && s.actionsListItemDark,
                    highlightedIndex === 0 && s.actionsListItemHighlighted
                  )}
                >
                  <Button
                    type="button"
                    className={cn(
                      s.actionsListItemControl,
                      s.actionsListItemControlTop,
                      theme === "dark" && s.actionsListItemControlDark
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
                    highlightedIndex === 1 && theme === "dark"
                      ? s.actionsListItemHighlightedDark
                      : s.actionsListItemHighlighted
                  )}
                >
                  <Button
                    type="button"
                    className={cn(
                      s.actionsListItemControl,
                      s.actionsListItemControlBottom,
                      theme === "dark" && s.actionsListItemControlDark
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

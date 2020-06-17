import React from "react";
import cn from "classnames";
import { useTheme } from "../../contexts/Theme";
import s from "./index.module.css";

const Button = ({ children, disabled, className, type, onClick }) => {
  const theme = useTheme();

  return (
    <button
      type={type}
      className={cn(
        s.button,
        disabled && s.buttonDisabled,
        theme === "dark" && s.buttonDark,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  disabled: false,
};

export default Button;

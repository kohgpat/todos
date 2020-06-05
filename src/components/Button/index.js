import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const Button = ({ children, disabled, className, type, onClick }) => {
  return (
    <button
      type={type}
      className={cn(s.button, disabled && s.buttonDisabled, className)}
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

import React from "react";
import cn from "classnames";
import { useTheme } from "../../contexts/Theme";
import s from "./index.module.css";

const Checkbox = ({ checked, onClick, className }) => {
  const theme = useTheme();

  return (
    <label
      className={cn(s.checkbox, theme === "dark" && s.checkboxDark, className)}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onClick(e.target.checked)}
      />
      <span />
    </label>
  );
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;

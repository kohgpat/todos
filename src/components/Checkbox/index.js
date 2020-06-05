import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const Checkbox = ({ checked, onClick, className }) => {
  return (
    <label className={cn(s.checkbox, className)}>
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

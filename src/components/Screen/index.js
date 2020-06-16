import React from "react";
import cn from "classnames";
import { useTheme } from "../../contexts/Theme";
import s from "./index.module.css";

const Screen = ({ children }) => {
  const theme = useTheme();

  return (
    <div className={cn(s.screen, theme === "dark" && s.screenDark)}>
      {children}
    </div>
  );
};

export default Screen;

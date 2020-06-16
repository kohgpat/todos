import React, { createContext, useContext } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ theme, children }) => {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(themeContext);
};

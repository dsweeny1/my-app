import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContextLD = {
    theme: Theme; toggleTheme: () => void,
    children: React.ReactNode
};

export const ThemeContext = React.createContext<ThemeContextLD>(
  {} as ThemeContextLD
);

export const ThemeProvider: React.FC<ThemeContextLD> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, children }}>
      {children}
    </ThemeContext.Provider>
  );
};

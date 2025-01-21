import { useState, useEffect } from "react";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light";
};

export function useTheme() {
  const [theme, setTheme] = useState(themeFromLocalStorage());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "corporate" ? "dim" : "corporate"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { toggleTheme, theme };
}

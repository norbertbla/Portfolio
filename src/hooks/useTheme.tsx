import { useState, useEffect } from "react";
type Theme = "light" | "dark" | "system";

const useTheme = (): { theme: Theme; setTheme: (theme: Theme) => void } => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleThemeChange = (newTheme: Theme) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      handleThemeChange(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      handleThemeChange(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  return { theme, setTheme: handleThemeChange };
};

export default useTheme;

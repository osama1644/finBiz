import type React from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
   
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;

import "../styles/globals.css";
import { useState, useEffect } from "react";
import CustomCursor from "../components/CustomCursor";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <CustomCursor />
      <Component
        {...pageProps}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

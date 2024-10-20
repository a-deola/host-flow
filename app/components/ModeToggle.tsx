"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };
  return (
    <div className="flex items-center px-4 py-2">
      <img
        onClick={toggleDarkMode}
        src={isDarkMode ? "/icons/dark-switch.png" : "/icons/switch-light.png"}
        alt="Mode"
      />
      <span className="ml-4 text-sm transition-all duration-300">
        Dark Mode
      </span>
    </div>
  );
}

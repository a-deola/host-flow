"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };
  return (
    <div className="flex items-center space-x-2 py-2 hover:text-primary">
      <Switch onClick={toggleDarkMode} />
      <span className="ml-4 text-sm transition-all duration-300 ">
        Dark Mode
      </span>
    </div>
  );
}

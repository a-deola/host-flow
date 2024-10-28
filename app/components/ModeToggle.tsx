"use client";

import Image from "next/image";
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
    <button className="flex items-center py-2 hover:text-primary">
      <Image
        onClick={toggleDarkMode}
        src={isDarkMode ? "/icons/dark-switch.png" : "/icons/switch-light.png"}
        alt="darkmode"
        width={25}
        height={25}
      />
      <span
        onClick={toggleDarkMode}
        className="ml-4 text-sm transition-all duration-300 "
      >
        Dark Mode
      </span>
    </button>
  );
}

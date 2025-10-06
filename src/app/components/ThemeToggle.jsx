"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Mounted, current theme:", theme); // Initial theme log
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        console.log("Theme changed to:", newTheme); // Log theme on toggle
      }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}

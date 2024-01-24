"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] rounded-full border
      border-gray-200 backdrop-blur-[0.5rem] border-opacity-80 shadow-2xl bg-opacity-80
        flex items-center justify-center
        hover:scale-[1.15] active:scale-105 transition-all
      "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;

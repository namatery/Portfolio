"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";
type Theme = "light" | "dark";
const currentTheme = (): Theme => document.documentElement.classList.contains("dark") ? "dark" : "light";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => setTheme(currentTheme()), []);
  function toggleTheme() { const next = currentTheme() === "dark" ? "light" : "dark"; document.documentElement.classList.toggle("dark", next === "dark"); document.documentElement.style.colorScheme = next; localStorage.setItem("theme", next); setTheme(next) }
  return <button type="button" className="icon-button" onClick={toggleTheme} aria-label={theme === "dark" ? "Use light theme" : "Use dark theme"} title={theme === "dark" ? "Use light theme" : "Use dark theme"}>{theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>;
}

"use client";

import { useTheme } from "@/hook/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200
        bg-slate-100 dark:bg-slate-800 
        hover:bg-slate-200 dark:hover:bg-slate-700
        text-slate-900 dark:text-slate-100
        border border-slate-200 dark:border-slate-700"
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
            title={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5" strokeWidth={2} />
            ) : (
                <Moon className="w-5 h-5" strokeWidth={2} />
            )}
        </button>
    );
}

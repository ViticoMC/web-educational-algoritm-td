"use client";

import React, { createContext, useLayoutEffect, useState } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>("dark");

    // Definir applyTheme
    const applyTheme = React.useCallback((newTheme: Theme) => {
        const html = document.documentElement;
        if (newTheme === "dark") {
            html.classList.add("dark");
            document.documentElement.style.colorScheme = "dark";
        } else {
            html.classList.remove("dark");
            document.documentElement.style.colorScheme = "light";
        }
        localStorage.setItem("theme", newTheme);
    }, []);

    // Inicializar tema del localStorage después del montar
    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme: Theme = savedTheme || (prefersDark ? "dark" : "light");

        setThemeState(initialTheme);
        applyTheme(initialTheme);
    }, [applyTheme]);

    const toggleTheme = () => {
        setThemeState((prevTheme) => {
            const newTheme: Theme = prevTheme === "dark" ? "light" : "dark";
            applyTheme(newTheme);
            return newTheme;
        });
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        applyTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


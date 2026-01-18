"use client";

import { ThemeContext, ThemeContextType } from "@/context/theme-context";
import { useContext } from "react";

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme debe ser usado dentro de ThemeProvider");
  }

  return context;
}

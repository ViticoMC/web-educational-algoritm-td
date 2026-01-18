"use client";

import { useTheme } from "@/hook/useTheme";

/**
 * Componente de demostración del sistema de tema
 * Muestra el tema actual y permite cambiar entre modo oscuro y claro
 */
export function ThemeDemo() {
    const { theme, toggleTheme, setTheme } = useTheme();

    return (
        <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Demostración del Sistema de Tema
            </h3>

            <div className="space-y-3">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                    Tema actual: <span className="font-bold text-blue-600 dark:text-blue-400">
                        {theme === "dark" ? "🌙 Oscuro" : "☀️ Claro"}
                    </span>
                </p>

                <div className="flex gap-2">
                    <button
                        onClick={toggleTheme}
                        className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                    >
                        Alternar Tema
                    </button>

                    <button
                        onClick={() => setTheme("light")}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${theme === "light"
                                ? "bg-yellow-500 text-white"
                                : "bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-400 dark:hover:bg-slate-600"
                            }`}
                    >
                        ☀️ Claro
                    </button>

                    <button
                        onClick={() => setTheme("dark")}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${theme === "dark"
                                ? "bg-indigo-600 text-white"
                                : "bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-400 dark:hover:bg-slate-600"
                            }`}
                    >
                        🌙 Oscuro
                    </button>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                    💾 El tema se guarda en localStorage y persiste entre sesiones
                </p>
            </div>
        </div>
    );
}

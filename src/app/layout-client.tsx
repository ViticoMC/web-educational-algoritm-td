"use client";

import { useState } from "react";
import { AppProviders } from "@/components/app-provider";
import Nav from "@/components/nav";
import { Menu, X } from "lucide-react";

export function LayoutClient({ children }: { children: React.ReactNode }) {
    const [navOpen, setNavOpen] = useState(true);

    return (
        <AppProviders>
            <div className="flex h-screen overflow-hidden">
                {/* Toggle button */}
                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className={`fixed top-4 ${navOpen ? "left-50" : "left-4"}  duration-300 z-50 p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-md`}
                    aria-label={navOpen ? "Cerrar navegación" : "Abrir navegación"}
                >
                    {navOpen ? (
                        <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    ) : (
                        <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    )}
                </button>

                {/* Navbar */}
                <nav
                    className={`fixed left-0 top-0 h-screen z-40 transition-transform duration-300 ${navOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <Nav />
                </nav>

                {/* Main content */}
                <main
                    className={`flex-1 overflow-auto transition-all duration-300 ${navOpen ? "ml-64" : "ml-0"
                        }`}
                >
                    {/* Content */}
                    <div className={navOpen ? "pt-0" : "pt-0"}>
                        {children}
                    </div>
                </main>
            </div>
        </AppProviders>
    );
}

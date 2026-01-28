
"use client"

import { BarChart3, BookOpen, Database, Settings, History } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export default function Nav() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(path + '/')
    }

    return (
        <nav className="h-screen w-64 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-r border-slate-200 dark:border-slate-700 shadow-lg p-6 overflow-y-auto transition-colors duration-300">
            {/* Header */}
            <div className="mb-8">
                <Link href="/" className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white">
                        DB
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white">DB Theory Lab</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">SUITE EDUCATIVA</span>
                    </div>
                </Link>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 mb-4">
                    Menú Principal
                </div>

                <Link
                    href="/"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive('/') && pathname !== '/algoritmos'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    <Database className="h-5 w-5" />
                    <span className="font-medium">Panel Principal</span>
                </Link>

                <Link
                    href="/relaciones"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive('/relaciones')
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    <BarChart3 className="h-5 w-5" />
                    <span className="font-medium">Gestión de Relaciones</span>
                </Link>

                <Link
                    href="/algoritmos"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive('/algoritmos')
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">Suite de Algoritmos</span>
                </Link>

                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 my-4">
                    Documentación
                </div>

                <Link
                    href="/docs"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive('/docs')
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">Conferencias</span>
                </Link>

                {/* <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 my-4">
                    Herramientas
                </div>

                <Link
                    href="/historia"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive('/historia')
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    <History className="h-5 w-5" />
                    <span className="font-medium">Historial</span>
                </Link>

                <Link
                    href="/configuracion"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive('/configuracion')
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    <Settings className="h-5 w-5" />
                    <span className="font-medium">Configuración</span>
                </Link> */}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex justify-center mb-4">
                    <ThemeToggle />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-500 text-center">
                    © 2025 DB Theory Lab<br />
                    Diseñado para Educación en Bases de Datos
                </p>
            </div>
        </nav>
    )
}

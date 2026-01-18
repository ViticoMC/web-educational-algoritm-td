"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { History } from "lucide-react"

export default function HistoryPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Historial</h1>
                <p className="text-slate-600 dark:text-slate-400">Registra tus análisis previos y ejecuciones de algoritmos.</p>
            </div>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="p-8 text-center">
                    <History className="h-12 w-12 text-slate-500 dark:text-slate-400 mx-auto mb-4 opacity-50" />
                    <CardTitle className="text-slate-900 dark:text-white mb-2">Sin historial aún</CardTitle>
                    <p className="text-slate-600 dark:text-slate-400">El historial de análisis aparecerá aquí</p>
                </CardContent>
            </Card>
        </div>
    )
}

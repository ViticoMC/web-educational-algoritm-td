"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Settings } from "lucide-react"

export default function ConfiguracionPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Configuración</h1>
                <p className="text-slate-600 dark:text-slate-400">Gestiona tus preferencias de aplicación y configuración.</p>
            </div>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="p-8 text-center">
                    <Settings className="h-12 w-12 text-slate-500 dark:text-slate-400 mx-auto mb-4 opacity-50" />
                    <CardTitle className="text-slate-900 dark:text-white mb-2">Configuración próximamente</CardTitle>
                    <p className="text-slate-600 dark:text-slate-400">Más opciones de configuración estarán disponibles pronto</p>
                </CardContent>
            </Card>
        </div>
    )
}

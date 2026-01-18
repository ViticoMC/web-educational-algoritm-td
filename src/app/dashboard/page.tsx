"use client"

import { useGetRelaciones } from "@/hook/useGetRelaciones"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Database, GitBranch, Key, CheckCircle } from "lucide-react"
import Link from "next/link"
import { SpinnerButton } from "@/components/spinner"

export default function Dashboard() {
    const { relaciones, isLoading: relacionesLoading } = useGetRelaciones()

    if (relacionesLoading) return <SpinnerButton />

    const totalFDs = relaciones?.length || 0
    const totalCandidateKeys = relaciones?.length || 0

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Bienvenido de nuevo, Estudiante</h1>
                <p className="text-slate-600 dark:text-slate-400">Analiza dependencias funcionales y normaliza tus relaciones a 3NF o BCNF utilizando la Suite de Algoritmos.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Active Relations */}
                <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all">
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <Database className="h-8 w-8 text-blue-400" />
                            <span className="text-sm font-semibold text-green-400">+2 today</span>
                        </div>
                        <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">RELACIONES ACTIVAS</h3>
                        <p className="text-4xl font-bold text-slate-900 dark:text-white">{relaciones?.length || 0}</p>
                    </CardContent>
                </Card>


                {/* Functional Dependencies */}
                <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all">
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <GitBranch className="h-8 w-8 text-cyan-400" />
                            <span className="text-sm font-semibold text-green-400">+3 new</span>
                        </div>
                        <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">DEPENDENCIAS FUNCIONALES</h3>
                        <p className="text-4xl font-bold text-slate-900 dark:text-white">{totalFDs}</p>
                    </CardContent>
                </Card>

                {/* Candidate Keys */}
                <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all">
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <Key className="h-8 w-8 text-purple-400" />
                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">No change</span>
                        </div>
                        <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">CLAVES CANDIDATAS</h3>
                        <p className="text-4xl font-bold text-slate-900 dark:text-white">{totalCandidateKeys}</p>
                    </CardContent>
                </Card>

                {/* Progress */}
                <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all">
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <CheckCircle className="h-8 w-8 text-green-400" />
                            <span className="text-sm font-semibold text-green-400">+5% pts</span>
                        </div>
                        <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">PROGRESO</h3>
                        <p className="text-4xl font-bold text-slate-900 dark:text-white">85%</p>
                        <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Active Projects */}
                <Card className="lg:col-span-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Database className="h-5 w-5 text-blue-400" />
                                Proyectos Activos
                            </h2>
                            <Link href="/relaciones" className="text-blue-500 dark:text-blue-400 text-sm hover:text-blue-600 dark:hover:text-blue-300">
                                Ver Todos los Proyectos
                            </Link>
                        </div>

                        <div className="space-y-3">
                            {relaciones && relaciones.length > 0 ? (
                                relaciones.slice(0, 5).map((rel) => (
                                    <Link
                                        key={rel.id}
                                        href={`/relaciones?id=${rel.id}`}
                                        className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-all group"
                                    >
                                        <div className="flex-1">
                                            <p className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{rel.nombre}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{rel.atributos?.length || 0} atributos</p>
                                        </div>
                                        <ArrowRight className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                    </Link>
                                ))
                            ) : (
                                <p className="text-slate-600 dark:text-slate-400 text-center py-8">No hay relaciones creadas aún</p>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Start */}
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="h-6 w-6" />
                            <h2 className="text-xl font-bold">Inicio Rápido de Algoritmos</h2>
                        </div>
                        <p className="text-blue-100 mb-6">¿Listo para sintetizar o descomponer? Salta directamente a la suite.</p>

                        <Button
                            asChild
                            className="w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold mb-4"
                        >
                            <Link href="/algoritmos">
                                ▶ Ejecutar Síntesis de Bernstein
                            </Link>
                        </Button>

                        <Link href="/algoritmos" className="block text-sm text-blue-100 hover:text-white text-center">
                            Cálculo de Clausura
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

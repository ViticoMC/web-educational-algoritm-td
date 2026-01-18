"use client"

import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, Circle, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface AlgorithmStep {
    numero: number
    titulo: string
    descripcion: string
    entrada?: string
    salida?: string
    operacion?: string
    estado?: string
}

interface AlgorithmExecutorProps {
    titulo: string
    descripcion: string
    pasos: AlgorithmStep[]
    configuracionInicial?: React.ReactNode
}

export default function AlgorithmExecutor({
    titulo,
    descripcion,
    pasos,
    configuracionInicial
}: AlgorithmExecutorProps) {
    const [pasoActual, setPasoActual] = useState(0)
    const [ejecutando, setEjecutando] = useState(false)
    const [completado, setCompletado] = useState(false)

    const ejecutarAlgoritmo = () => {
        setEjecutando(true)
        setPasoActual(0)
        setCompletado(false)

        // Animar pasos
        const intervalo = setInterval(() => {
            setPasoActual(prev => {
                if (prev >= pasos.length - 1) {
                    setEjecutando(false)
                    setCompletado(true)
                    clearInterval(intervalo)
                    return prev
                }
                return prev + 1
            })
        }, 2000)
    }

    const reiniciar = () => {
        setPasoActual(0)
        setEjecutando(false)
        setCompletado(false)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{titulo}</h2>
                <p className="text-slate-600 dark:text-slate-400">{descripcion}</p>
            </div>

            {/* Configuración Inicial */}
            {configuracionInicial && (
                <Card className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Configuración Inicial</h3>
                        {configuracionInicial}
                    </CardContent>
                </Card>
            )}

            {/* Botones de Control */}
            <div className="flex gap-3">
                <Button
                    onClick={ejecutarAlgoritmo}
                    disabled={ejecutando || completado}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                    <PlayCircle className="h-4 w-4" />
                    Ejecutar Algoritmo
                </Button>
                {(ejecutando || completado) && (
                    <Button
                        onClick={reiniciar}
                        variant="outline"
                        className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                    >
                        Reiniciar
                    </Button>
                )}
            </div>

            {/* Timeline de Pasos */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Ejecución del Algoritmo</h3>

                <div className="space-y-4">
                    {pasos.map((paso, index) => {
                        const esActual = index === pasoActual && (ejecutando || completado)
                        const esCompletado = index < pasoActual || completado

                        return (
                            <div
                                key={paso.numero}
                                className={`transition-all duration-300 ${esActual ? 'ring-2 ring-blue-500' : ''
                                    }`}
                            >
                                <Card className={`border-l-4 ${esActual
                                    ? 'bg-blue-50 dark:bg-blue-900 border-l-blue-500 border-slate-300 dark:border-slate-600'
                                    : esCompletado
                                        ? 'bg-white dark:bg-slate-700 border-l-green-500 border-slate-200 dark:border-slate-600'
                                        : 'bg-slate-50 dark:bg-slate-800 border-l-slate-600 border-slate-300 dark:border-slate-700'
                                    }`}>
                                    <CardContent className="p-4">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 flex items-start pt-1">
                                                {esCompletado ? (
                                                    <CheckCircle2 className="h-6 w-6 text-green-500 dark:text-green-400" />
                                                ) : esActual ? (
                                                    <Circle className="h-6 w-6 text-blue-500 dark:text-blue-400 animate-pulse" />
                                                ) : (
                                                    <Circle className="h-6 w-6 text-slate-400 dark:text-slate-500" />
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`font-bold ${esActual ? 'text-blue-600 dark:text-blue-300' : esCompletado ? 'text-green-600 dark:text-green-300' : 'text-slate-600 dark:text-slate-400'
                                                        }`}>
                                                        ITERACIÓN {paso.numero}
                                                    </span>
                                                    {esActual && <span className="text-xs bg-blue-600 dark:bg-blue-600 text-white px-2 py-1 rounded">En progreso</span>}
                                                    {esCompletado && index < pasoActual && <span className="text-xs bg-green-600 dark:bg-green-600 text-white px-2 py-1 rounded">Completado</span>}
                                                </div>

                                                <p className="text-slate-900 dark:text-white font-medium mb-3">{paso.titulo}</p>
                                                <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">{paso.descripcion}</p>

                                                {/* Entrada y Salida */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    {paso.entrada && (
                                                        <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-300 dark:border-slate-700">
                                                            <p className="text-xs text-slate-600 dark:text-slate-400 uppercase font-semibold mb-1">Entrada</p>
                                                            <code className="text-cyan-600 dark:text-cyan-300 text-sm font-mono break-all">{paso.entrada}</code>
                                                        </div>
                                                    )}
                                                    {paso.salida && (
                                                        <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded border border-slate-300 dark:border-slate-700">
                                                            <p className="text-xs text-slate-600 dark:text-slate-400 uppercase font-semibold mb-1">Salida</p>
                                                            <code className="text-green-600 dark:text-green-300 text-sm font-mono break-all">{paso.salida}</code>
                                                    )}
                                                        </div>

                                                {paso.operacion && (
                                                        <div className="mt-3 bg-slate-900 p-3 rounded border border-slate-600">
                                                            <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Operación</p>
                                                            <p className="text-amber-300 text-sm">{paso.operacion}</p>
                                                        </div>
                                                    )}

                                                    {paso.estado && (
                                                        <div className="mt-3 bg-slate-900 p-3 rounded border border-slate-600">
                                                            <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Estado Actual</p>
                                                            <code className="text-violet-300 text-sm font-mono break-all">{paso.estado}</code>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>

                {/* Resultado Final */}
                {completado && pasos.length > 0 && (
                    <Card className="bg-gradient-to-r from-green-900 to-green-800 border-green-600">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="h-8 w-8 text-green-300 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">¡Algoritmo Completado!</h4>
                                    <p className="text-green-100">El algoritmo ha ejecutado todas las iteraciones exitosamente.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}

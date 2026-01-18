"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlayCircle, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react'

export interface ExecutionStep {
    type: 'init' | 'iteration' | 'check' | 'match' | 'result' | 'info'
    iteration?: number
    content: string
    highlight?: string
    color?: 'blue' | 'green' | 'amber' | 'red' | 'violet'
}

interface AlgorithmVisualizationProps {
    title: string
    description: string
    inputConfig: React.ReactNode
    onExecute: () => Promise<ExecutionStep[]>
    result: React.ReactNode
    loading?: boolean
}

export function AlgorithmVisualization({
    title,
    description,
    inputConfig,
    onExecute,
    result,
    loading = false,
}: AlgorithmVisualizationProps) {
    const [steps, setSteps] = useState<ExecutionStep[]>([])
    const [executing, setExecuting] = useState(false)
    const [showOutput, setShowOutput] = useState(false)
    const [expandedSteps, setExpandedSteps] = useState<number[]>([])

    const handleExecute = async () => {
        setExecuting(true)
        setSteps([])
        try {
            const executionSteps = await onExecute()
            setSteps(executionSteps)
            setShowOutput(true)
            // Expandir primero y último paso automáticamente
            if (executionSteps.length > 0) {
                setExpandedSteps([0, executionSteps.length - 1])
            }
        } catch (error) {
            console.error('Error executing algorithm:', error)
            setSteps([
                {
                    type: 'result',
                    content: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
                    color: 'red',
                },
            ])
        } finally {
            setExecuting(false)
        }
    }

    const handleReset = () => {
        setSteps([])
        setShowOutput(false)
        setExpandedSteps([])
    }

    const toggleStepExpand = (index: number) => {
        setExpandedSteps((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        )
    }

    const getStepColor = (step: ExecutionStep): string => {
        const colorMap = {
            blue: 'text-blue-400 border-blue-400 bg-blue-400/5',
            green: 'text-green-400 border-green-400 bg-green-400/5',
            amber: 'text-amber-400 border-amber-400 bg-amber-400/5',
            red: 'text-red-400 border-red-400 bg-red-400/5',
            violet: 'text-violet-400 border-violet-400 bg-violet-400/5',
        }
        return colorMap[step.color || 'blue']
    }

    const getStepLabel = (step: ExecutionStep): string => {
        switch (step.type) {
            case 'init':
                return 'INITIALIZER'
            case 'iteration':
                return `ITERATION ${step.iteration || 0}`
            case 'check':
                return 'CHECKING'
            case 'match':
                return 'MATCH FOUND'
            case 'result':
                return 'FINAL RESULT'
            default:
                return 'INFO'
        }
    }

    return (
        <div className="h-screen flex flex-col gap-4 p-4 overflow-hidden">
            {/* Header with Title */}
            <div className="flex items-center gap-2 mb-2">
                <div className="text-2xl">⚙️</div>
                <div>
                    <h1 className="text-2xl font-bold text-cyan-400">{title}</h1>
                    <p className="text-slate-400">{description}</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden">
                {/* Left Panel - Input Configuration */}
                <Card className="lg:col-span-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                            <div>⚙️</div>
                            Configuración
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 overflow-y-auto">
                        {inputConfig}
                    </CardContent>
                    <div className="px-6 pb-6 mt-auto border-t border-slate-200 dark:border-slate-700 pt-4">
                        <div className="flex gap-2">
                            <Button
                                onClick={handleExecute}
                                disabled={executing || loading}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                            >
                                <PlayCircle className="h-4 w-4" />
                                {executing ? 'Ejecutando...' : 'Ejecutar'}
                            </Button>
                            {showOutput && (
                                <Button
                                    onClick={handleReset}
                                    variant="outline"
                                    className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>

                {/* Right Panel - Output */}
                <Card className="lg:col-span-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                            <div>📋</div>
                            Ejecución Paso a Paso
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0">
                        {!showOutput ? (
                            <div className="text-center h-full flex items-center justify-center text-slate-400 dark:text-slate-400">
                                <p className="text-lg">Haz clic en {`"Ejecutar"`} para ver el seguimiento</p>
                            </div>
                        ) : (
                            <div className="space-y-2 overflow-y-auto h-full px-6 py-4">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`border rounded-lg ${getStepColor(step)} border-opacity-50`}
                                    >
                                        <button
                                            onClick={() => toggleStepExpand(index)}
                                            className="w-full px-4 py-2 flex items-center justify-between hover:bg-opacity-20 transition-colors"
                                        >
                                            <div className="text-left">
                                                <span className="font-mono text-sm font-semibold">
                                                    {getStepLabel(step)}
                                                </span>
                                                {step.highlight && (
                                                    <span className="ml-2 text-xs opacity-75">({step.highlight})</span>
                                                )}
                                            </div>
                                            {expandedSteps.includes(index) ? (
                                                <ChevronUp className="h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="h-4 w-4" />
                                            )}
                                        </button>

                                        {expandedSteps.includes(index) && (
                                            <div className="px-4 pb-2 border-t border-current border-opacity-30">
                                                <pre className="text-xs font-mono whitespace-pre-wrap break-words text-slate-300 bg-slate-900 rounded p-2 mt-2">
                                                    {step.content}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Result Panel - Full Width */}
            {showOutput && steps.length > 0 && (
                <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700 h-32">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-green-400 text-sm">✓ Resultado Final</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-y-auto text-sm">{result}</CardContent>
                </Card>
            )}
        </div>
    )
}

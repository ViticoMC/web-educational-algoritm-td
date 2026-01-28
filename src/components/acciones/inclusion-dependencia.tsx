"use client"

import useConjuntoDFStore from "@/store/conjuntos";
import { ConjuntoDF, DF } from "@/tipos/df";
import { Relacion } from "@/tipos/relacion";
import { getDF } from "@/utils/df-actions";
import { useState } from "react";
import { SelectComponent } from "./select-component";
import AggDependenciaFuncional from "./agg-dependencia";
import { formatAtri } from "@/utils/formatAtr";
import { Card, CardContent, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { aspirina } from "@/utils/logica_negocio/aspirina";
import { AlgorithmVisualization } from "../algorithm-visualization";
import type { ExecutionStep } from "../algorithm-visualization";


export default function InclusionDependencia({ relaciones }: { relaciones: Relacion[] }) {

    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF>()
    const [currentDepen, setCurrentDependencia] = useState<DF>()
    const [result, setResult] = useState<boolean | null>(null)
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()

    async function handleSelectedRelacion(name: string) {
        const rel = relaciones.find(item => item.nombre === name)
        if (!rel) return
        setSelectedRelacion(rel);
        const res = await getDF(rel.id);
        setConjuntoDF(res);
    }

    function handelSelectConjDF(name: string) {
        const conj = conjuntosDF.find(item => item.nombre === name)
        if (!conj) return
        setSelectedConjuntoDf(conj);
    }

    async function handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
        if (!currentDepen?.implicantes || !selectedConjuntoDf?.df) return []

        const steps: ExecutionStep[] = []
        const implicantes = currentDepen.implicantes as string[]
        const implicados = currentDepen.implicados as string[]
        const dfs = selectedConjuntoDf.df as DF[]

        steps.push({
            type: 'init',
            content: `Verificando: {${implicantes.join(', ')}} → {${implicados.join(', ')}}`,
            color: 'blue',
        })

        let closure = [...implicantes]
        steps.push({
            type: 'info',
            content: `Calculando clausura de {${implicantes.join(', ')}} en ${selectedConjuntoDf.nombre}...`,
            color: 'violet',
        })

        let iteration = 1
        let changed = true

        while (changed) {
            changed = false

            for (const df of dfs) {
                const allImplicantsInClosure = (df.implicantes as string[]).every(attr =>
                    closure.includes(attr)
                )

                if (allImplicantsInClosure) {
                    const newAttrs = (df.implicados as string[]).filter(attr => !closure.includes(attr))
                    if (newAttrs.length > 0) {
                        steps.push({
                            type: 'iteration',
                            iteration,
                            content: `${(df.implicantes as string[]).join(', ')} → ${(df.implicados as string[]).join(', ')}\nAñadiendo: {${newAttrs.join(', ')}}`,
                            highlight: `{${implicantes.join(', ')}}⁺ = {${[...closure, ...newAttrs].join(', ')}}`,
                            color: 'green',
                        })
                        closure = Array.from(new Set([...closure, ...newAttrs]))
                        changed = true
                        iteration++
                    }
                }
            }
        }

        const isIncluded = implicados.every(attr => closure.includes(attr))

        if (isIncluded) {
            steps.push({
                type: 'result',
                content: `✓ La dependencia ESTÁ incluida\nTodos los implicados {${implicados.join(', ')}} están en la clausura {${closure.join(', ')}}`,
                color: 'green',
            })
            setResult(true)
        } else {
            const missing = implicados.filter(attr => !closure.includes(attr))
            steps.push({
                type: 'result',
                content: `✗ La dependencia NO está incluida\nFaltan: {${missing.join(', ')}}`,
                color: 'red',
            })
            setResult(false)
        }

        return steps
    }

    const inputConfig = (
        <div className="space-y-4">
            <div>
                <label className="text-sm text-slate-700 dark:text-slate-300 block mb-2">Relación Activa</label>
                <SelectComponent
                    value={selectedRelacion?.nombre}
                    changue={handleSelectedRelacion}
                    type="relacion"
                    items={relaciones}
                />
            </div>

            <div>
                <label className="text-sm text-slate-700 dark:text-slate-300 block mb-2">Conjunto de DF</label>
                <SelectComponent
                    value={selectedConjuntoDf?.nombre}
                    changue={handelSelectConjDF}
                    type="conjuntoDF"
                    items={conjuntosDF}
                    disbled={!selectedRelacion}
                />
            </div>

            {currentDepen && (
                <Card className="p-2 bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                    <CardTitle className="text-sm text-slate-700 dark:text-slate-300 mb-2">Dependencia Funcional</CardTitle>
                    <CardContent className="flex items-center justify-center gap-2 p-2">
                        <div className="text-cyan-600 dark:text-cyan-300 font-mono">
                            {formatAtri(currentDepen.implicantes)}
                        </div>
                        <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <div className="text-green-600 dark:text-green-300 font-mono">
                            {formatAtri(currentDepen.implicados)}
                        </div>
                    </CardContent>
                </Card>
            )}

            <AggDependenciaFuncional
                buttontext={currentDepen ? "Editar dependencia" : "Añadir dependencia"}
                disabled={!selectedRelacion}
                atributos={selectedRelacion?.atributos}
                dependencia={currentDepen}
                setDependencia={setCurrentDependencia}
            />

            {selectedConjuntoDf && (
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Conjunto {selectedConjuntoDf.nombre}:</p>
                    <div className="space-y-1 text-xs">
                        {(selectedConjuntoDf.df as DF[]).map((df, idx) => (
                            <div key={idx} className="font-mono text-cyan-600 dark:text-cyan-300">
                                {(df.implicantes as string[]).join(', ')} → {(df.implicados as string[]).join(', ')}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

    const resultDisplay = () => (
        <div className={`p-4 rounded border-2 ${result === true ? 'bg-green-100 dark:bg-green-900 border-green-400 dark:border-green-600' : result === false ? 'bg-red-100 dark:bg-red-900 border-red-400 dark:border-red-600' : 'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
            <p className={`text-lg font-semibold ${result === true ? 'text-green-700 dark:text-green-300' : result === false ? 'text-red-700 dark:text-red-300' : 'text-slate-700 dark:text-white'}`}>
                {result === true ? '✓ La dependencia ESTÁ incluida' : result === false ? '✗ La dependencia NO está incluida' : 'Resultado pendiente'}
            </p>
        </div>
    )

    return (
        <AlgorithmVisualization
            title="Inclusión de Dependencias Funcionales"
            description="Verifica si una dependencia funcional está incluida en un conjunto de FDs"
            inputConfig={inputConfig}
            onExecute={handleExecuteAlgorithm}
            renderResult={resultDisplay}
        />
    )
}

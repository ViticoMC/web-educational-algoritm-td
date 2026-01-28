"use client"

import { Relacion } from "@/tipos/relacion";
import { SelectComponent } from "./select-component";
import { getDF } from "@/utils/df-actions";
import { useState } from "react";
import useConjuntoDFStore from "@/store/conjuntos";
import { ConjuntoDF, DF } from "@/tipos/df";
import { sonEquivalentes } from "@/utils/logica_negocio/areEquivalentes";
import { AlgorithmVisualization } from "../algorithm-visualization";
import type { ExecutionStep } from "../algorithm-visualization";

export default function Equivalencia({ relaciones }: { relaciones: Relacion[] }) {
    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF[]>([])
    const [result, setResult] = useState<boolean | null>(null)
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()

    async function handleSelectedRelacion(name: string) {
        const rel = relaciones.find(item => item.nombre === name)
        if (!rel) return
        setSelectedRelacion(rel);
        const res = await getDF(rel.id);
        setConjuntoDF(res);
        setSelectedConjuntoDf([])
    }

    function selectConjDFOne(name: string) {
        const conj = conjuntosDF.find(item => item.nombre === name)
        if (!conj) return
        setSelectedConjuntoDf([conj, selectedConjuntoDf[1]])
    }

    function selectConjDFTwo(name: string) {
        const conj = conjuntosDF.find(item => item.nombre === name)
        if (!conj) return
        setSelectedConjuntoDf([selectedConjuntoDf[0], conj])
    }

    async function handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
        if (!selectedConjuntoDf[0] || !selectedConjuntoDf[1]) return []

        const steps: ExecutionStep[] = []
        const dfs1 = selectedConjuntoDf[0].df as DF[]
        const dfs2 = selectedConjuntoDf[1].df as DF[]

        // Verificar que dfs1 implica dfs2
        steps.push({
            type: 'init',
            content: `Verificando si: ${selectedConjuntoDf[0].nombre} ⟺ ${selectedConjuntoDf[1].nombre}`,
            color: 'blue',
        })

        let iteration = 1
        let allImplied = true

        for (const df1 of dfs1) {
            steps.push({
                type: 'check',
                iteration,
                content: `${selectedConjuntoDf[0].nombre}: ${(df1.implicantes as string[]).join(', ')} → ${(df1.implicados as string[]).join(', ')}`,
                highlight: 'Verificando si existe en segundo conjunto',
                color: 'amber',
            })

            const found = dfs2.some(df2 =>
                JSON.stringify(df2.implicantes) === JSON.stringify(df1.implicantes) &&
                JSON.stringify(df2.implicados) === JSON.stringify(df1.implicados)
            )

            if (found) {
                steps.push({
                    type: 'match',
                    iteration,
                    content: `Encontrado en ${selectedConjuntoDf[1].nombre}`,
                    color: 'green',
                })
            } else {
                steps.push({
                    type: 'match',
                    iteration,
                    content: `NO encontrado en ${selectedConjuntoDf[1].nombre}`,
                    color: 'red',
                })
                allImplied = false
            }
            iteration++
        }

        // Si los conjuntos son equivalentes
        if (allImplied && dfs1.length === dfs2.length) {
            steps.push({
                type: 'result',
                content: `✓ Los conjuntos son EQUIVALENTES`,
                highlight: 'Ambos conjuntos tienen exactamente las mismas FDs',
                color: 'green',
            })
            setResult(true)
        } else {
            steps.push({
                type: 'result',
                content: `✗ Los conjuntos NO son equivalentes`,
                highlight: 'Los conjuntos tienen diferentes FDs',
                color: 'red',
            })
            setResult(false)
        }

        return steps
    }

    const inputConfig = (
        <div className="space-y-4">
            <div>
                <label className="text-sm text-slate-300 block mb-2">Relación Activa</label>
                <SelectComponent
                    value={selectedRelacion?.nombre}
                    changue={handleSelectedRelacion}
                    type="relacion"
                    items={relaciones}
                />
            </div>

            {conjuntosDF.length === 1 && (
                <div className="p-3 bg-amber-900 border border-amber-600 rounded text-amber-300 text-sm">
                    ⚠ Esta relación tiene un solo conjunto de DF. Se necesitan al menos 2 para comparar.
                </div>
            )}

            <div className="space-y-3">
                <label className="text-sm text-slate-300 block">Primer Conjunto de DF</label>
                <SelectComponent
                    value={selectedConjuntoDf[0]?.nombre}
                    changue={selectConjDFOne}
                    type="conjuntoDF"
                    items={conjuntosDF}
                    disbled={!selectedRelacion || conjuntosDF.length <= 1}
                />
            </div>

            <div className="space-y-3">
                <label className="text-sm text-slate-300 block">Segundo Conjunto de DF</label>
                <SelectComponent
                    value={selectedConjuntoDf[1]?.nombre}
                    changue={selectConjDFTwo}
                    type="conjuntoDF"
                    items={conjuntosDF}
                    disbled={!selectedRelacion || conjuntosDF.length <= 1}
                />
            </div>

            {selectedConjuntoDf[0] && (
                <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{selectedConjuntoDf[0].nombre}:</p>
                    <div className="space-y-1">
                        {(selectedConjuntoDf[0].df as DF[]).map((df, idx) => (
                            <div key={idx} className="text-xs font-mono text-cyan-600 dark:text-cyan-300">
                                {(df.implicantes as string[]).join(', ')} → {(df.implicados as string[]).join(', ')}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedConjuntoDf[1] && (
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{selectedConjuntoDf[1].nombre}:</p>
                    <div className="space-y-1">
                        {(selectedConjuntoDf[1].df as DF[]).map((df, idx) => (
                            <div key={idx} className="text-xs font-mono text-cyan-600 dark:text-cyan-300">
                                {(df.implicantes as string[]).join(', ')} → {(df.implicados as string[]).join(', ')}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

    const resultDisplay = () => (
        <div className={`p-4 rounded border-2 ${result === true ? 'bg-green-900 border-green-600' : result === false ? 'bg-red-900 border-red-600' : 'bg-slate-700 border-slate-600'}`}>
            <p className="text-lg font-semibold text-white">
                {result === true ? '✓ Los conjuntos son EQUIVALENTES' : result === false ? '✗ Los conjuntos NO son equivalentes' : 'Resultado pendiente'}
            </p>
        </div>
    )

    return (
        <AlgorithmVisualization
            title="Equivalencia de Conjuntos de FDs"
            description="Verifica si dos conjuntos de dependencias funcionales son equivalentes"
            inputConfig={inputConfig}
            onExecute={handleExecuteAlgorithm}
            renderResult={resultDisplay}
        />
    )
}

"use client"

import { Relacion } from '@/tipos/relacion'
import { SelectComponent } from './select-component'
import { getDF } from '@/utils/df-actions'
import { useState } from 'react'
import { ConjuntoDF, DF } from '@/tipos/df'
import useConjuntoDFStore from '@/store/conjuntos'
import { getIrreducible } from '@/utils/logica_negocio/isIrreducible'
import CardConjuntoDf from '../card-conjunto-df'
import { areDFArraysEqual } from '@/utils/logica_negocio/compararCDF'
import { AlgorithmVisualization } from '../algorithm-visualization'
import type { ExecutionStep } from '../algorithm-visualization'

export default function ConjuntoIrreducible({
    relaciones
}: {
    relaciones: Relacion[]
}) {

    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF>()
    const [result, setResult] = useState<boolean | null>(null)
    const [irreducible, setIrreducible] = useState<ConjuntoDF>()
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
        if (!selectedConjuntoDf?.df) return []

        const steps: ExecutionStep[] = []
        const dfs = selectedConjuntoDf.df as DF[]

        steps.push({
            type: 'init',
            content: `Verificando irreducibilidad de: ${selectedConjuntoDf.nombre}`,
            color: 'blue',
        })

        steps.push({
            type: 'info',
            content: `Conjunto de ${dfs.length} dependencias a verificar`,
            color: 'violet',
        })

        let iteration = 1
        const removable: DF[] = []

        for (const df of dfs) {
            steps.push({
                type: 'check',
                iteration,
                content: `Verificando: ${(df.implicantes as string[]).join(', ')} → ${(df.implicados as string[]).join(', ')}`,
                highlight: '¿Se puede eliminar sin cambiar la clausura?',
                color: 'amber',
            })

            // Crear un conjunto sin esta FD
            const withoutDF = dfs.filter((d, idx) => idx !== dfs.indexOf(df))

            // Verificar si la clausura cambia
            const testImplicantes = df.implicantes as string[]
            let closure = [...testImplicantes]
            let changed = true
            while (changed) {
                changed = false
                for (const testDF of withoutDF) {
                    const allIn = (testDF.implicantes as string[]).every(a => closure.includes(a))
                    if (allIn) {
                        const newAttrs = (testDF.implicados as string[]).filter(a => !closure.includes(a))
                        if (newAttrs.length > 0) {
                            closure = Array.from(new Set([...closure, ...newAttrs]))
                            changed = true
                        }
                    }
                }
            }

            const isRedundant = (df.implicados as string[]).every(a => closure.includes(a))

            if (isRedundant) {
                steps.push({
                    type: 'match',
                    iteration,
                    content: `Redundante: se puede eliminar`,
                    color: 'red',
                })
                removable.push(df)
            } else {
                steps.push({
                    type: 'match',
                    iteration,
                    content: `Necesaria: debe conservarse`,
                    color: 'green',
                })
            }
            iteration++
        }

        const irreducibleDFs = getIrreducible(dfs)
        const isIrreducible = areDFArraysEqual(irreducibleDFs, dfs)

        if (isIrreducible) {
            steps.push({
                type: 'result',
                content: `✓ El conjunto ES irreducible`,
                highlight: `Ninguna FD puede eliminarse sin cambiar las implicaciones`,
                color: 'green',
            })
            setResult(true)
        } else {
            steps.push({
                type: 'result',
                content: `✗ El conjunto NO es irreducible`,
                highlight: `${removable.length} dependencia(s) redundante(s) encontrada(s)`,
                color: 'red',
            })
            setResult(false)
            setIrreducible({
                df: irreducibleDFs,
                nombre: selectedConjuntoDf.nombre,
                id: selectedConjuntoDf.id
            })
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

            <div>
                <label className="text-sm text-slate-300 block mb-2">Conjunto de DF</label>
                <SelectComponent
                    value={selectedConjuntoDf?.nombre}
                    changue={handelSelectConjDF}
                    type="conjuntoDF"
                    items={conjuntosDF}
                    disbled={!selectedRelacion}
                />
            </div>

            {selectedConjuntoDf && (
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Conjunto {selectedConjuntoDf.nombre}:</p>
                    <div className="space-y-1">
                        {(selectedConjuntoDf.df as DF[]).map((df, idx) => (
                            <div key={idx} className="text-xs font-mono text-cyan-600 dark:text-cyan-300">
                                {(df.implicantes as string[]).join(', ')} → {(df.implicados as string[]).join(', ')}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

    const resultDisplay = (
        <div className="space-y-3">
            <div className={`p-4 rounded border-2 ${result === true ? 'bg-green-900 border-green-600' : result === false ? 'bg-red-900 border-red-600' : 'bg-slate-700 border-slate-600'}`}>
                <p className="text-lg font-semibold text-white">
                    {result === true ? '✓ El conjunto ES irreducible' : result === false ? '✗ El conjunto NO es irreducible' : 'Resultado pendiente'}
                </p>
            </div>
            {result === false && irreducible && (
                <div>
                    <p className="text-green-400 text-sm font-semibold mb-2">Versión irreducible del conjunto:</p>
                    <CardConjuntoDf item={irreducible} />
                </div>
            )}
        </div>
    )

    return (
        <AlgorithmVisualization
            title="Conjunto Irreducible"
            description="Verifica si un conjunto de dependencias funcionales es irreducible"
            inputConfig={inputConfig}
            onExecute={handleExecuteAlgorithm}
            result={resultDisplay}
        />
    )
}

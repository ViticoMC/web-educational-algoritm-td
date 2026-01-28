"use client"
import { Relacion } from '@/tipos/relacion'
import useConjuntoDFStore from '@/store/conjuntos'
import { ConjuntoDF, DF } from '@/tipos/df'
import { useState } from 'react'
import { getDF } from '@/utils/df-actions'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { aspirina } from '@/utils/logica_negocio/aspirina'
import { formatAtri } from '@/utils/formatAtr'
import { SelectComponent } from './select-component'
import { AlgorithmVisualization } from '../algorithm-visualization'
import type { ExecutionStep } from '../algorithm-visualization'

export default function Clausura({ relaciones }: { relaciones: Relacion[] }) {
    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF | null>(null)
    const [selectedAtributos, setSelectedAtributos] = useState<string[]>([])
    const [clausuraResult, setClausuraResult] = useState<string[]>([])
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()

    async function handleSelectedRelacion(name: string) {
        const rel = relaciones.find(item => item.nombre === name)
        if (!rel) return
        setSelectedRelacion(rel);
        const res = await getDF(rel.id);
        setConjuntoDF(res);
    }

    function handleSelectedConjuntoDf(name: string) {
        const conj = conjuntosDF.find(item => item.nombre === name)
        if (!conj) return
        setSelectedConjuntoDf(conj);
    }

    async function handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
        if (!selectedAtributos.length || !selectedConjuntoDf) return []

        const steps: ExecutionStep[] = []
        const dfs = selectedConjuntoDf.df as DF[]
        let closure = [...selectedAtributos]

        // INITIALIZER
        steps.push({
            type: 'init',
            content: `X⁽⁰⁾ = {${closure.join(', ')}}`,
            color: 'blue',
        })

        let iteration = 1
        let changed = true

        while (changed) {
            changed = false
            const initialSize = closure.length

            for (const df of dfs) {
                // Verificar si todos los implicantes están en la clausura actual
                const allImplicantsInClosure = (df.implicantes as string[]).every(attr =>
                    closure.includes(attr)
                )

                if (allImplicantsInClosure) {
                    // Añadir los implicados a la clausura
                    const newAttrs = (df.implicados as string[]).filter(attr => !closure.includes(attr))
                    if (newAttrs.length > 0) {
                        steps.push({
                            type: 'check',
                            iteration,
                            content: `Verificando FD: ${(df.implicantes as string[]).join(', ')} → ${(df.implicados as string[]).join(', ')}`,
                            highlight: `${(df.implicantes as string[]).join(', ')} ⊆ X`,
                            color: 'amber',
                        })

                        closure = Array.from(new Set([...closure, ...newAttrs]))
                        changed = true

                        steps.push({
                            type: 'match',
                            iteration,
                            content: `Encontrado: ${(df.implicados as string[]).join(', ')}.\nAñadiendo: {${newAttrs.join(', ')}}`,
                            highlight: `Añadiendo {${newAttrs.join(', ')}}`,
                            color: 'green',
                        })

                        steps.push({
                            type: 'info',
                            iteration,
                            content: `X⁽${iteration}⁾ = {${closure.join(', ')}}`,
                            color: 'violet',
                        })
                    }
                }
            }

            if (changed) iteration++
        }

        // FINAL RESULT
        steps.push({
            type: 'result',
            content: `{${selectedAtributos.join(', ')}}⁺ = {${closure.join(', ')}}`,
            highlight: `Converged after ${iteration - 1} iterations`,
            color: 'green',
        })

        setClausuraResult(closure)
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
                    changue={handleSelectedConjuntoDf}
                    type="conjuntoDF"
                    items={conjuntosDF}
                    disbled={!selectedRelacion}
                />
            </div>

            <div>
                <label className="text-sm text-slate-300 block mb-2">Atributos Objetivo (X)</label>
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className={`w-full border rounded px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-left text-white text-sm`}
                            disabled={!selectedRelacion || !selectedConjuntoDf}
                        >
                            {selectedAtributos.length > 0
                                ? `{${selectedAtributos.join(', ')}}`
                                : 'Selecciona atributos'}
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[420px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <DialogHeader>
                            <DialogTitle className="text-slate-900 dark:text-white">Selecciona Atributos</DialogTitle>
                            <DialogDescription className="text-slate-600 dark:text-slate-400">
                                Elige los atributos para calcular su clausura.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-2 py-2">
                            {selectedRelacion &&
                                selectedRelacion.atributos.map((atr) => (
                                    <label
                                        key={atr}
                                        className="flex items-center gap-2 text-slate-900 dark:text-white cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded"
                                    >
                                        <Checkbox
                                            checked={selectedAtributos.includes(atr)}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setSelectedAtributos((prev) =>
                                                        Array.from(new Set([...prev, atr]))
                                                    );
                                                } else {
                                                    setSelectedAtributos((prev) =>
                                                        prev.filter((a) => a !== atr)
                                                    );
                                                }
                                            }}
                                        />
                                        <span>{atr}</span>
                                    </label>
                                ))}
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <button className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-3 py-2 rounded text-sm">
                                    Cancelar
                                </button>
                            </DialogClose>
                            <DialogClose asChild>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm">
                                    Aceptar
                                </button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {selectedConjuntoDf && (
                <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Dependencias Funcionales:</p>
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

    const resultDisplay = () => (
        <div className="space-y-3">
            <div className="p-4 bg-green-100 dark:bg-slate-700 rounded border border-green-400 dark:border-green-600">
                <p className="text-sm text-green-700 dark:text-slate-300 mb-2">Clausura de {selectedAtributos.join(', ')}:</p>
                <p className="text-lg font-mono text-green-700 dark:text-green-400">
                    {'{'}
                    {clausuraResult.join(', ')}
                    {'}'}
                </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded">
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-1">Atributos Iniciales:</p>
                    <p>{selectedAtributos.length}</p>
                </div>
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded">
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-1">Atributos en Clausura:</p>
                    <p>{clausuraResult.length}</p>
                </div>
            </div>
        </div>
    )

    return (
        <AlgorithmVisualization
            title="Clausura de Atributos"
            description="Calcula X⁺ iterativamente aplicando FDs hasta convergencia"
            inputConfig={inputConfig}
            onExecute={handleExecuteAlgorithm}
            renderResult={resultDisplay}
        />
    )
}


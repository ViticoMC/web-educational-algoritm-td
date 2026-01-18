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
import CardConjuntoDf from '../card-conjunto-df'
import CardRelacion from '../card-relacion'
import { SelectComponent } from './select-component'
import { isCandidatClave } from '@/utils/logica_negocio/isCandidatKey'
import { AlgorithmVisualization } from '../algorithm-visualization'
import type { ExecutionStep } from '../algorithm-visualization'


export default function ClaveCandidata({ relaciones }: { relaciones: Relacion[] }) {

    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF | null>(null)
    const [selectedAtributos, setSelectedAtributos] = useState<string[]>([])
    const [result, setResult] = useState<boolean | null>(null)
    const [message, setMessage] = useState<string>("")
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
        if (!selectedAtributos.length || !selectedConjuntoDf || !selectedRelacion) return []

        const steps: ExecutionStep[] = []

        steps.push({
            type: 'init',
            content: `Verificando si {${selectedAtributos.join(', ')}} es clave candidata`,
            color: 'blue',
        })

        // Paso 1: Verificar superkey (debe contener todos los atributos en su clausura)
        steps.push({
            type: 'check',
            iteration: 1,
            content: `Paso 1: Calcular clausura de {${selectedAtributos.join(', ')}}`,
            highlight: 'Para verificar si es superkey',
            color: 'amber',
        })

        const closure = aspirina({ df: selectedAtributos, conjuntoDF: selectedConjuntoDf?.df })
        const isComplete = closure.length === selectedRelacion.atributos.length

        steps.push({
            type: 'info',
            iteration: 1,
            content: `{${selectedAtributos.join(', ')}}⁺ = {${closure.join(', ')}}`,
            color: 'violet',
        })

        if (!isComplete) {
            steps.push({
                type: 'result',
                content: `✗ NO es clave candidata: No es superkey`,
                highlight: `Faltan atributos: {${selectedRelacion.atributos.filter(a => !closure.includes(a)).join(', ')}}`,
                color: 'red',
            })
            setResult(false)
            setMessage('No es superkey - faltan atributos en la clausura')
            return steps
        }

        // Paso 2: Verificar que sea minimal (sin eliminar atributos)
        steps.push({
            type: 'check',
            iteration: 2,
            content: `Paso 2: Verificar minimalidad`,
            highlight: '¿Se puede eliminar algún atributo?',
            color: 'amber',
        })

        let isMinimal = true
        for (const attr of selectedAtributos) {
            const subset = selectedAtributos.filter(a => a !== attr)
            const subsetClosure = aspirina({ df: subset, conjuntoDF: selectedConjuntoDf?.df })

            if (subsetClosure.length === selectedRelacion.atributos.length) {
                isMinimal = false
                steps.push({
                    type: 'match',
                    iteration: 2,
                    content: `Redundante: {${subset.join(', ')}}⁺ = R (se puede eliminar ${attr})`,
                    color: 'red',
                })
                break
            }
        }

        if (!isMinimal) {
            steps.push({
                type: 'result',
                content: `✗ NO es clave candidata: No es minimal`,
                highlight: 'Contiene subconjuntos que también son superkeys',
                color: 'red',
            })
            setResult(false)
            setMessage('No es minimal - contiene subconjuntos que son superkeys')
            return steps
        }

        steps.push({
            type: 'match',
            iteration: 2,
            content: `Minimal: No se puede eliminar ningún atributo sin perder la superkey`,
            color: 'green',
        })

        steps.push({
            type: 'result',
            content: `✓ ES clave candidata`,
            highlight: 'Es superkey y es minimal',
            color: 'green',
        })

        setResult(true)
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
                <label className="text-sm text-slate-300 block mb-2">Posible Clave Candidata (K)</label>
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
                                Elige los atributos para verificar si forman una clave candidata.
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

            {selectedRelacion && (
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Atributos de la relación:</p>
                    <p className="text-sm font-mono text-cyan-600 dark:text-cyan-300">
                        {formatAtri(selectedRelacion.atributos)}
                    </p>
                </div>
            )}

            {selectedConjuntoDf && (
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
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

    const resultDisplay = (
        <div className={`p-4 rounded border-2 ${result === true ? 'bg-green-900 border-green-600' : result === false ? 'bg-red-900 border-red-600' : 'bg-slate-700 border-slate-600'}`}>
            <p className="text-lg font-semibold text-white mb-2">
                {result === true ? '✓ ES clave candidata' : result === false ? '✗ NO es clave candidata' : 'Resultado pendiente'}
            </p>
            {message && (
                <p className="text-sm text-slate-300">{message}</p>
            )}
        </div>
    )

    return (
        <AlgorithmVisualization
            title="Clave Candidata"
            description="Verifica si un conjunto de atributos es una clave candidata"
            inputConfig={inputConfig}
            onExecute={handleExecuteAlgorithm}
            result={resultDisplay}
        />
    )
}


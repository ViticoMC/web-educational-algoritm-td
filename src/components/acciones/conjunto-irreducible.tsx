"use client"

import { Relacion } from '@/tipos/relacion'
import { SelectComponent } from './select-component'
import { getDF } from '@/utils/df-actions'
import { useState } from 'react'
import { ConjuntoDF } from '@/tipos/df'
import useConjuntoDFStore from '@/store/conjuntos'
import { Button } from '../ui/button'
import { getIrreducible } from '@/utils/logica_negocio/isIrreducible'
import CardConjuntoDf from '../card-conjunto-df'
import { areDFArraysEqual } from '@/utils/logica_negocio/compararCDF'

export default function ConjuntoIrreducible({
    relaciones
}: {
    relaciones: Relacion[]
}) {

    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF>()
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()
    const [irreducible, setIrreducible] = useState<ConjuntoDF>()

    const [result, setResult] = useState<"not-res" | "succes" | "failed">("not-res")

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



    return (
        <section className="flex items-center flex-col gap-2 text-center ">
            <h1 className="text-2xl">Determinar si a partir de un conjunto de dependencias funcionales se puede implicar cierta dependencia funcional</h1>
            <p>Selecciona la relacion ,  luego el conjunto de DF y agrega la dependencia funcional para verificar si esta inlcuida </p>
            <div className="flex gap-2">
                <SelectComponent value={selectedRelacion?.nombre} changue={handleSelectedRelacion} type="relacion" items={relaciones} />
                <SelectComponent disbled={conjuntosDF.length === 0} value={selectedConjuntoDf?.nombre} changue={handelSelectConjDF} type="conjuntoDF" items={conjuntosDF} />
            </div>
            <Button variant="outline" className="hover:cursor-pointer w-ful"
                disabled={!(selectedRelacion && selectedConjuntoDf !== undefined)}
                onClick={() => {
                    if (!selectedConjuntoDf) return
                    const irreducible = getIrreducible(selectedConjuntoDf.df)

                    if (areDFArraysEqual(irreducible, selectedConjuntoDf.df)) {
                        setResult("succes")
                    } else {
                        setResult("failed")
                        setIrreducible({
                            df: irreducible,
                            nombre: selectedConjuntoDf.nombre,
                            id: selectedConjuntoDf.id
                        })
                    }
                }}
            >
                Determinar si es irreducible
            </Button>
            {
                result === "succes" ? <p className="text-green-400">El conjunto es irreducible</p>
                    : result === "failed" ? <div>
                        <p className="text-red-400">El conjunto no es irreducible</p>
                        <p className="text-green-400">Version irreducible del conjunto seleccionado</p>
                        <CardConjuntoDf item={irreducible} />

                    </div>

                        : <p className="text-orange-400">Esperando complete la seleccion</p>
            }

        </section>
    )
}

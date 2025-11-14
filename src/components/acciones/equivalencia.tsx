"use client"

import { Relacion } from "@/tipos/relacion";
import { SelectComponent } from "./select-component";
import { getDF } from "@/utils/df-actions";
import { useState } from "react";
import useConjuntoDFStore from "@/store/conjuntos";
import { ConjuntoDF } from "@/tipos/df";
import { Button } from "../ui/button";
import { sonEquivalentes } from "@/utils/logica_negocio/areEquivalentes";

export default function Equivalencia({ relaciones }: { relaciones: Relacion[] }) {
    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF[]>([])
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()
    const [result, setResult] = useState<"not-res" | "succes" | "failed">("not-res")

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
        const newConjuntoDf = [
            conj,
            selectedConjuntoDf[1]
        ]
        setSelectedConjuntoDf(newConjuntoDf);
        console.log(selectedConjuntoDf)
    }
    function selectConjDFTwo(name: string) {
        const conj = conjuntosDF.find(item => item.nombre === name)
        if (!conj) return
        const newConjuntoDf = [
            selectedConjuntoDf[0],
            conj,
        ]
        setSelectedConjuntoDf(newConjuntoDf);
        console.log(selectedConjuntoDf)

    }

    return (
        <section className="flex items-center flex-col gap-2">
            <h1 className="text-2xl">Determinar si dos conjuntos son equivalentes</h1>
            <p>Selecciona la relacion y luego sus conjuntos de DF para calcular si son equivalentes</p>
            <div className="flex flex-col justify-center items-center gap-4 ">
                <SelectComponent value={selectedRelacion?.nombre} changue={handleSelectedRelacion} type="relacion" items={relaciones} />
                {
                    conjuntosDF.length === 1 && <p className="text-orange-400">Esta relacion tiene un solo conjunto de DF
                        no tiene sentido calcular equivalencia entre sus conjuntos</p>
                }
                <div className="flex gap-2">
                    <SelectComponent disbled={conjuntosDF.length <= 1} value={selectedConjuntoDf[0]?.nombre} changue={selectConjDFOne} type="conjuntoDF" items={conjuntosDF} />
                    <SelectComponent disbled={conjuntosDF.length <= 1} value={selectedConjuntoDf[1]?.nombre} changue={selectConjDFTwo} type="conjuntoDF" items={conjuntosDF} />
                </div>
            </div>
            <Button variant="outline" className="hover:cursor-pointer w-ful"
                disabled={selectedConjuntoDf.some(item => item == undefined)}
                onClick={() => {
                    if (sonEquivalentes(selectedConjuntoDf[0].df, selectedConjuntoDf[1].df))
                        setResult("succes")
                    else setResult("failed")
                }}
            >
                Calcular equivalencia
            </Button>
            {
                result === "succes" ? <p className="text-green-400">Los conjuntos son equivalentes</p>
                    : result === "failed" ? <p className="text-red-400">Los conjuntos no son equivalentes</p>
                        : <p className="text-orange-400">Esperando complete la seleccion</p>
            }

        </section>
    )
}

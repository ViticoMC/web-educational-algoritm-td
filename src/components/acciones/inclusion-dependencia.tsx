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
import { Button } from "../ui/button";
import { aspirina } from "@/utils/logica_negocio/aspirina";


export default function InclusionDependencia({ relaciones }: { relaciones: Relacion[] }) {

    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF>()
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()
    const [currentDepen, setCurrentDependencia] = useState<DF>()

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

            {
                currentDepen &&
                <Card className="p-2">
                    <CardTitle className="text-xl">Dependencia Funcional</CardTitle>
                    <CardContent className="flex items-end justify-center gap-2 m-2">
                        <div>
                            {formatAtri(currentDepen.implicantes)}
                        </div>
                        <ArrowRight className="h-5 w-5" />
                        <div>
                            {formatAtri(currentDepen.implicados)}
                        </div>
                    </CardContent>
                </Card>
            }
            <AggDependenciaFuncional buttontext={currentDepen ? "Editar dependencia Funcional" : "Agregar dependencia Funcional"} disabled={!selectedRelacion} atributos={selectedRelacion?.atributos} dependencia={currentDepen} setDependencia={setCurrentDependencia} />

            <Button variant="outline" className="hover:cursor-pointer w-ful"
                disabled={!(selectedRelacion && currentDepen !== undefined && selectedConjuntoDf !== undefined)}
                onClick={() => {
                    if (!currentDepen?.implicantes) return
                    if (!selectedConjuntoDf?.df) return
                    const clausura = aspirina({ df: currentDepen?.implicantes, conjuntoDF: selectedConjuntoDf?.df })
                    if (clausura) {
                        if (currentDepen.implicados.every(item => clausura.includes(item))) {
                            setResult("succes")
                        } else {
                            setResult("failed")
                        }
                    } else setResult("failed")
                }}
            >
                Calcular inclusion
            </Button>
            {
                result === "succes" ? <p className="text-green-400">La dependencia funcional se incluye en el conjunto</p>
                    : result === "failed" ? <p className="text-red-400">La dependencia funcional no se incluye en el conjunto</p>
                        : <p className="text-orange-400">Esperando complete la seleccion</p>
            }

        </section>
    )
}

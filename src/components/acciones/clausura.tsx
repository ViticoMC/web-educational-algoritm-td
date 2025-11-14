"use client"
import { Relacion } from '@/tipos/relacion'
import useConjuntoDFStore from '@/store/conjuntos'
import { ConjuntoDF } from '@/tipos/df'
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
import { Button } from '../ui/button'
import { aspirina } from '@/utils/logica_negocio/aspirina'
import { formatAtri } from '@/utils/formatAtr'
import CardConjuntoDf from '../card-conjunto-df'
import CardRelacion from '../card-relacion'
import { SelectComponent } from './select-component'


export default function Clausura({ relaciones }: { relaciones: Relacion[] }) {


    const [selectedRelacion, setSelectedRelacion] = useState<Relacion | null>(null)
    const [selectedConjuntoDf, setSelectedConjuntoDf] = useState<ConjuntoDF | null>(null)
    const [selectedAtributos, setSelectedAtributos] = useState<string[]>([])
    const { conjuntosDF, setConjuntoDF } = useConjuntoDFStore()
    const [clausura, setClausura] = useState<string[]>([])

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
        console.log(conj)
    }


    function handleAspirina() {
        if (!selectedAtributos.length || !selectedConjuntoDf) return
        setClausura(aspirina({ df: selectedAtributos, conjuntoDF: selectedConjuntoDf?.df }))
    }

    return (
        <section className='flex flex-col gap-4 items-center p-4'>
            <h1 className='text-2xl text-center'>Determinar de un conjunto de atributos sobre un conjunto de dependencias funcionales</h1>
            <p>Selecciona la relacion , el  conjuntos de DF y luego el  conjunto de atributos para calcular el cierre</p>
            <div className='flex justify-center flex-col md:flex-row  gap-4 '>
                <section className='flex flex-col justify-center items-center gap-4 '>
                    <div className='flex  gap-2'>
                        <SelectComponent value={selectedRelacion?.nombre} changue={handleSelectedRelacion} type="relacion" items={relaciones} />
                        <SelectComponent value={selectedConjuntoDf?.nombre} changue={handleSelectedConjuntoDf} type="conjuntoDF" items={conjuntosDF} disbled={!selectedRelacion} />
                    </div>

                    {/* Panel desplegable para seleccionar varios atributos de la relación escogida */}
                    <Dialog >
                        <DialogTrigger asChild className='rounded-sm'>
                            <button
                                className={`border rounded px-3 p-2 bg-white hover:bg-gray-50 disabled:opacity-50 w-fit text-left`}
                                disabled={!selectedRelacion || !selectedConjuntoDf}
                            >
                                {selectedAtributos.length > 0 ? `${selectedAtributos.join(', ')}` : 'Seleccionar atributos'}
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[420px]">
                            <DialogHeader>
                                <DialogTitle>Seleccionar atributos</DialogTitle>
                                <DialogDescription>
                                    Elige uno o varios atributos de la relación seleccionada.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-2 py-2">
                                {!selectedRelacion && <p className="text-sm text-muted-foreground">Selecciona primero una relación</p>}
                                {selectedRelacion && selectedRelacion.atributos.map((atr) => (
                                    <label key={atr} className="flex items-center gap-2">
                                        <Checkbox
                                            checked={selectedAtributos.includes(atr)}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setSelectedAtributos((prev) => Array.from(new Set([...prev, atr])));
                                                } else {
                                                    setSelectedAtributos((prev) => prev.filter((a) => a !== atr));
                                                }
                                            }}
                                        />
                                        <span>{atr}</span>
                                    </label>
                                ))}
                            </div>

                            <DialogFooter>
                                <DialogClose asChild>
                                    <button className="btn-outline px-3 py-2">Cancelar</button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <button
                                        className="btn-primary px-3 py-2"
                                        onClick={() => {
                                            // Al cerrar, selectedAtributos ya está actualizado por los checkboxes
                                        }}
                                    >Aceptar</button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </section>
                <section className='flex flex-col justify-start px-3'>
                    <Button variant="outline" className="hover:cursor-pointer w-ful"
                        disabled={selectedAtributos.length === 0}
                        onClick={handleAspirina}
                    >
                        Calcular Cierre
                    </Button>
                    <div className="flex flex-col gap-2">
                        <div className={`flex flex-col gap-2 ${clausura.length > 0 ? "" : "text-gray-400"}`}>
                            {clausura.length > 0 ? formatAtri(clausura) : "Esperando para calcular resultado"}
                        </div>
                    </div>
                </section>
            </div>

            <div className='flex gap-4 pb-4 flex-col md:flex-row'>
                {
                    selectedRelacion && <CardRelacion item={selectedRelacion} />
                }
                {
                    selectedConjuntoDf && <CardConjuntoDf item={selectedConjuntoDf} />
                }
            </div>


        </section>
    )
}


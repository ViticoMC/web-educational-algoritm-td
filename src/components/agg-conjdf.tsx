"use client"
import { ArrowRight, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Checkbox } from "./ui/checkbox";
import { formatAtri } from "@/utils/formatAtr";
import { ConjuntoDF } from "@/tipos/df";
import { insertConjuntoDF } from "@/utils/df-actions";
import { Input } from "./ui/input";
import { QueryObserverResult } from "@tanstack/react-query";



export default function AggDF({ atributos, id, refetch, conjuntosDF }: { atributos: string[], id: number, refetch: () => Promise<QueryObserverResult<ConjuntoDF[], Error>>, conjuntosDF: ConjuntoDF[] }) {
    const [currentDepen, setCurrentDependencia] = useState<{
        implicantes: string[],
        implicados: string[],
    }>({
        implicantes: [],
        implicados: [],
    });
    const [open, setOpen] = useState(false)
    const [error, setError] = useState<string>("")

    const [conjuntoDF, setConjuntoDF] = useState<ConjuntoDF>({
        df: [],
        nombre: "",
        id: -1,
    });

    function saveDependencia() {
        if (currentDepen.implicantes.length === 0 || currentDepen.implicados.length === 0) {
            setError("Debe agregar al menos un atributo implicante o implicado")
            return
        }
        if (
            conjuntoDF.df.some((depen) => {
                return currentDepen.implicantes.every((i) => depen.implicantes.includes(i)) && currentDepen.implicados.every((i) => depen.implicados.includes(i))
            })
        ) {
            setError("La dependencia ya existe")
            return
        }
        setError("")
        setConjuntoDF((prev) => ({
            nombre: prev.nombre,
            id: prev.id,
            df: [...prev.df, currentDepen]
        }))

        setCurrentDependencia({
            implicantes: [],
            implicados: [],
        });
    }

    async function saveConjunto() {

        if (comprobarError()) {
            return
        }

        await insertConjuntoDF(conjuntoDF.nombre, conjuntoDF.df, id)
        refetch()
        setCurrentDependencia({
            implicantes: [],
            implicados: [],
        })
        setOpen(false)
    }

    function comprobarError() {
        if (conjuntoDF.nombre === "") {
            setError("Debe agregar un nombre para el conjunto")
            return true
        }
        if (conjuntoDF.df.length === 0) {
            setError("Debe agregar al menos una dependencia funcional")
            return true
        }
        if (conjuntosDF.some(item => item.nombre === conjuntoDF.nombre)) {
            setError("El nombre del conjunto ya existe")
            return true
        }
        setError("")
        return false
    }

    return (
        <Dialog open={open} onOpenChange={() => {
            setOpen(!open)
            setConjuntoDF({
                df: [],
                nombre: "",
                id: -1,
            })
            setCurrentDependencia({
                implicantes: [],
                implicados: [],
            })
            setError("")
        }}>
            <DialogTrigger asChild>
                <Button variant="outline" className="hover:cursor-pointer w-full absolute -bottom-12"

                >Agregar conjunto de DF
                </Button>
            </DialogTrigger>

            <DialogContent className="md:max-w-[800px] max-w-400 flex flex-col items-center">
                <DialogTitle className="text-2xl text-center">Agregar conjunto de Dependencias Funcionales</DialogTitle>
                <CardContent className="w-80 flex gap-4">
                    <Label htmlFor="name" className="text-md ">Nombre</Label>
                    <Input id="name" name="name" value={conjuntoDF.nombre} onChange={(e) => setConjuntoDF({ ...conjuntoDF, nombre: e.target.value })} />

                </CardContent>
                <DialogDescription className="text-center">
                    Selecciona los atributos implicantes y implicados
                </DialogDescription>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center gap-2 items-center">
                        <Card className="p-4 h-40">
                            <CardTitle>Selecciona los atributos Implicantes</CardTitle>
                            <CardContent>
                                {
                                    atributos.map((item, index) => (
                                        <div key={index} className="flex gap-2">
                                            <Checkbox id={`${item}-1`} checked={currentDepen.implicantes.includes(item)} onCheckedChange={(e) => {
                                                if (e) {
                                                    setCurrentDependencia({
                                                        implicantes: [...currentDepen.implicantes, item],
                                                        implicados: currentDepen.implicados,

                                                    });
                                                } else {
                                                    setCurrentDependencia({
                                                        implicantes: currentDepen.implicantes.filter((i) => i !== item),
                                                        implicados: currentDepen.implicados,
                                                    });
                                                }
                                            }} />
                                            <Label htmlFor={`${item}-1`}>{item}</Label>
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Card>
                        <Card className="p-4 h-40">
                            <CardTitle>Selecciona los atributos implicados</CardTitle>
                            <CardContent>
                                {
                                    atributos.map((item, index) => (
                                        <div key={index} className="flex gap-2">
                                            <Checkbox id={`${item}-2`} checked={currentDepen.implicados.includes(item)} onCheckedChange={(e) => {
                                                if (e) {
                                                    setCurrentDependencia({
                                                        implicantes: currentDepen.implicantes,
                                                        implicados: [...currentDepen.implicados, item],
                                                    });
                                                } else {
                                                    setCurrentDependencia({
                                                        implicantes: currentDepen.implicantes,
                                                        implicados: currentDepen.implicados.filter((i) => i !== item),
                                                    });
                                                }
                                            }} />
                                            <Label htmlFor={`${item}-2`}>{item}</Label>
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Card>
                    </div>
                    {error !== "" && <p className="text-red-500">{error}</p>}
                    <Button onClick={() => saveDependencia()}>Agregar dependencia</Button>
                </div>
                <div>
                    <h1 className="text-2xl mb-3 text-center">Dependencias Funcionales</h1>
                    <div className="grid grid-cols-2">

                        {
                            conjuntoDF.df.length > 0 && conjuntoDF.df.map((item, index) => (
                                <CardContent key={index} className="flex items-end justify-center gap-2 m-2">
                                    <div>
                                        {formatAtri(item.implicantes)}
                                    </div>
                                    <ArrowRight className="h-5 w-5" />
                                    <div>
                                        {formatAtri(item.implicados)}
                                    </div>

                                </CardContent>
                            ))
                        }
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault()
                            saveConjunto()
                        }}>Guardar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Relacion } from "@/tipos/relacion"
import { comporbarError } from "@/utils/comprobar-error"
import { insertRelacion } from "@/utils/relaciones-actions"
import { QueryObserverResult } from "@tanstack/react-query"
import { useState } from "react"

export function AggRelacion({ refetch }:
    { refetch: () => Promise<QueryObserverResult<Relacion[], Error>> }) {

    const [formRelacion, setFormRelacion] = useState<{
        nombre: string,
        atributos: string[],
    }>({
        nombre: "",
        atributos: [],
    })
    const [error, setErrror] = useState<string>("");
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currAtr, setCurrAtr] = useState<string>("")

    async function handleSaveNew() {

        if (comporbarError(formRelacion, setErrror)) {
            setLoading(false)
            return
        }
        await insertRelacion(formRelacion.nombre, formRelacion.atributos)
        setOpen(false)
        setLoading(false)
        setCurrAtr("")
        setFormRelacion({
            nombre: "",
            atributos: [],
        })
        refetch()
    }



    return (
        <Dialog open={open} onOpenChange={() => {
            setOpen(!open)
            setCurrAtr("")
            setFormRelacion({
                nombre: "",
                atributos: [],
            })
        }}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="hover:cursor-pointer w-full" >Agregar relación</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Agregar nueva relación</DialogTitle>
                        <DialogDescription>
                            Rellene todos los campos para agregar la relación
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" name="name" value={formRelacion.nombre} onChange={(e) => setFormRelacion({ ...formRelacion, nombre: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <form className="flex items-end gap-3">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="atr">Atributo</Label>
                                    <Input id="atr" name="username" onChange={(e) => setCurrAtr(e.target.value)} value={currAtr} />
                                </div>
                                <Button onClick={(e) => {
                                    e.preventDefault()
                                    setCurrAtr("")
                                    setFormRelacion({ ...formRelacion, atributos: [...formRelacion.atributos, currAtr] })
                                }}
                                    disabled={loading}
                                >Agregar</Button>
                            </form>
                            <div className="grid grid-cols-2">

                                {
                                    formRelacion.atributos.map((item, index) => (
                                        <div key={index} className="flex gap-2">
                                            <p>{item}</p>
                                            <Button className="w-4 h-6" onClick={() => {
                                                setFormRelacion({ ...formRelacion, atributos: formRelacion.atributos.filter((i) => i !== item) })
                                            }}
                                                disabled={loading}
                                            >x</Button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {error !== "" && <p className="text-red-500">{error}</p>}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" disabled={loading}>Cancelar</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit" onClick={(e) => {
                                e.preventDefault()
                                setLoading(true)
                                handleSaveNew()
                            }}
                                disabled={loading}
                            >{loading ? "Guardando..." : "Guardar"}</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

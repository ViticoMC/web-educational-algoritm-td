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
import { updateRelacion } from "@/utils/relaciones-actions"
import { QueryObserverResult } from "@tanstack/react-query"
import { Edit } from "lucide-react"
import { useState } from "react"

export function EditRelacion({ relacion, refetch }:
    { relacion: Relacion, refetch: () => Promise<QueryObserverResult<Relacion[], Error>> }) {

    const [formRelacion, setFormRelacion] = useState<Relacion>(relacion)
    const [error, setErrror] = useState<string>("");
    const [loading, setLoading] = useState(false)
    const [currAtributo, setCurrAtributo] = useState<string>("")
    const [open, setOpen] = useState(false)


    async function handleSaveEdit() {

        if (comporbarError(formRelacion, setErrror)) {
            setLoading(false)
            return
        }
        await updateRelacion(formRelacion.id, formRelacion.nombre, formRelacion.atributos)

        refetch()
        setLoading(false)
        setOpen(false)
        setCurrAtributo("")
    }


    return (
        <Dialog open={open} onOpenChange={() => {
            setOpen(!open)
            setCurrAtributo("")
        }}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="hover:cursor-pointer w-full" ><Edit className="h-5 w-5" /></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar relación</DialogTitle>
                        <DialogDescription>
                            Ajuste los campos para editar la relación
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
                                    <Input id="atr" name="username" onChange={(e) => setCurrAtributo(e.target.value)} value={currAtributo} />
                                </div>
                                <Button onClick={(e) => {
                                    e.preventDefault()
                                    setCurrAtributo("")
                                    setFormRelacion({ ...formRelacion, atributos: [...formRelacion.atributos, currAtributo] })
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
                                            }}>x</Button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {error !== "" && <p className="text-red-500">{error}</p>}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit" onClick={(e) => {
                                e.preventDefault()
                                setLoading(true)
                                handleSaveEdit()
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

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
import { Plus, X } from "lucide-react"

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
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Nueva Relación
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <DialogHeader>
                        <DialogTitle className="text-slate-900 dark:text-white">Crear Nueva Relación</DialogTitle>
                        <DialogDescription className="text-slate-600 dark:text-slate-400">
                            Define un esquema relacional con atributos
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name" className="text-slate-900 dark:text-white">Nombre</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formRelacion.nombre}
                                onChange={(e) => setFormRelacion({ ...formRelacion, nombre: e.target.value })}
                                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <form className="flex items-end gap-3">
                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="atr" className="text-slate-900 dark:text-white">Atributo</Label>
                                    <Input
                                        id="atr"
                                        name="attribute"
                                        onChange={(e) => setCurrAtr(e.target.value)}
                                        value={currAtr}
                                        className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white"
                                    />
                                </div>
                                <Button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setCurrAtr("")
                                        setFormRelacion({ ...formRelacion, atributos: [...formRelacion.atributos, currAtr] })
                                    }}
                                    disabled={loading || !currAtr}
                                    className="bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </form>
                            <div className="flex flex-wrap gap-2">
                                {
                                    formRelacion.atributos.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm"
                                        >
                                            <span className="font-mono">{item}</span>
                                            <button
                                                onClick={() => {
                                                    setFormRelacion({ ...formRelacion, atributos: formRelacion.atributos.filter((i) => i !== item) })
                                                }}
                                                disabled={loading}
                                                className="hover:opacity-70"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {error !== "" && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" disabled={loading} className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600">Cancelar</Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                setLoading(true)
                                handleSaveNew()
                            }}
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            {loading ? "Guardando..." : "Guardar"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

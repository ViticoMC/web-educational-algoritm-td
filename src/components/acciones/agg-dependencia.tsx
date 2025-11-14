"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dispatch, SetStateAction, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Checkbox } from "../ui/checkbox";
import { DF } from "@/tipos/df";




export default function AggDependenciaFuncional({ buttontext, disabled, atributos, dependencia, setDependencia }: {
    buttontext: string
    disabled: boolean
    atributos: string[] | undefined,
    dependencia: DF | undefined,
    setDependencia: Dispatch<SetStateAction<DF | undefined>>
}) {
    const [currentDepen, setCurrentDependencia] = useState<DF>(dependencia || {
        implicantes: [],
        implicados: []
    })


    const [open, setOpen] = useState(false)
    const [error, setError] = useState<string>("")



    function saveDependencia() {
        if (currentDepen.implicantes.length === 0 || currentDepen.implicados.length === 0) {
            setError("Debe agregar al menos un atributo implicante o implicado")
            return
        }
        setError("")
        setDependencia(currentDepen)
        setCurrentDependencia({
            implicantes: [],
            implicados: [],
        });
        setOpen(false)
    }



    return (
        <Dialog open={open} onOpenChange={() => {
            setOpen(!open)
            setCurrentDependencia({
                implicantes: [],
                implicados: [],
            })
            setError("")
        }}>
            <DialogTrigger asChild>
                <Button variant="outline" className="hover:cursor-pointer w-fit "
                    disabled={disabled}
                >
                    {
                        buttontext
                    }
                </Button>
            </DialogTrigger>

            <DialogContent className="md:max-w-[800px] max-w-400 flex flex-col items-center">
                <DialogTitle className="text-2xl text-center">Agregar  Dependencia Funcional</DialogTitle>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center gap-2 items-center">
                        <Card className="p-4 h-40">
                            <CardTitle>Selecciona los atributos Implicantes</CardTitle>
                            <CardContent>
                                {
                                    atributos?.map((item, index) => (
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
                                    atributos?.map((item, index) => (
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
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault()
                            saveDependencia()
                        }}>Agregar dependencia</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

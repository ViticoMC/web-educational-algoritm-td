"use client"
import { Atom, Car, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { AggRelacion } from "./agg-relacion";
import { useGetRelaciones } from "@/hook/useGetRelaciones";
import { EditRelacion } from "./edit-relacion";
import { deleteRelacion } from "@/utils/relaciones-actions";
import ConjuntosDF from "./conjuntos-df";
import { useState } from "react";
import { SpinnerButton } from "./spinner";
import CardRelacion from "./card-relacion";



export default function Relaciones() {
    const [tabId, setTabId] = useState(0)

    const { relaciones, isLoading, error, refetch } = useGetRelaciones()

    if (isLoading) return <SpinnerButton />
    if (error || !relaciones) return <div>Error: {error?.message}</div>


    return (
        <Tabs className="flex flex-col md:flex-row h-auto w-full items-center md:items-start overflow-y-auto "
            onValueChange={(e) => setTabId(Number(e))}
        >
            <Card className="flex flex-col p-2  items-start overflow-y-auto h-screen col-span-1 overflow-x-hidden">
                <CardTitle className="text-2xl flex items-end gap-2">
                    <Atom className="h-7 w-7" />
                    <span>Relaciones</span>
                </CardTitle>
                <CardContent >
                    <TabsList className="grid lg:grid-cols-2 grid-cols-1  items-start h-auto gap-2 p-4">
                        {relaciones.length > 0 ? relaciones.map((item) => (
                            <TabsTrigger key={item.id} value={String(item.id)} >
                                <CardRelacion item={item} tabId={tabId} refetch={refetch} />
                            </TabsTrigger>
                        )) : <Card className="p-2 text-center  col-span-2">
                            <CardTitle>
                                No hay relaciones disponibles
                            </CardTitle>
                            <CardContent>
                                <p>Crea una nueva relación para comenzar</p>
                            </CardContent>
                        </Card>}
                    </TabsList>
                    <AggRelacion refetch={refetch} />
                </CardContent>
            </Card>
            <Card className="p-2 flex-1">
                {
                    tabId !== 0 ?
                        relaciones.map((item) => (
                            <ConjuntosDF key={item.id} relacion={item} />
                        ))

                        : (
                            <CardContent className="text-center flex flex-col gap-2 text-xl">
                                <CardTitle>Selecciona una relación</CardTitle>
                                <CardDescription>Para ver sus Conjuntos de Dependencias Funcionales</CardDescription>
                            </CardContent>
                        )
                }
            </Card>
        </Tabs >
    )
}

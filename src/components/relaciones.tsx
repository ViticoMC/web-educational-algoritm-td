"use client"
import { Database, Plus } from "lucide-react";
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
        <Tabs className="flex flex-col lg:flex-row h-auto w-full items-start overflow-y-auto gap-6"
            onValueChange={(e) => setTabId(Number(e))}
        >
            <Card className="flex flex-col p-6 items-center overflow-y-auto h-auto w-full lg:w-80 overflow-x-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="w-full mb-6">
                    <CardTitle className="text-2xl flex items-center gap-3 mb-1 text-slate-900 dark:text-white">
                        <Database className="h-7 w-7 text-blue-400" />
                        <span>Relaciones</span>
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">Selecciona una relación para editar</CardDescription>
                </div>
                <TabsList className="grid grid-cols-1 w-full items-start h-auto gap-2 p-0 bg-transparent">
                    {relaciones.length > 0 ? relaciones.map((item) => (
                        <TabsTrigger
                            key={item.id}
                            value={String(item.id)}
                            className="w-full justify-start bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 data-[state=active]:bg-blue-600 text-slate-900 dark:text-white rounded-lg"
                        >
                            <CardRelacion item={item} tabId={tabId} refetch={refetch} />
                        </TabsTrigger>
                    )) : <Card className="p-4 text-center w-full bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                        <CardTitle className="text-sm text-slate-900 dark:text-white">
                            Sin relaciones aún
                        </CardTitle>
                        <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                            Crea una para comenzar
                        </CardDescription>
                    </Card>}
                </TabsList>
                <AggRelacion refetch={refetch} />
            </Card>
            <Card className="p-6 flex-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                {
                    tabId !== 0 ?
                        relaciones.find((item) => item.id === tabId) && <ConjuntosDF relacion={relaciones.find((item) => item.id === tabId)!} />

                        : (
                            <CardContent className="text-center flex flex-col gap-2 text-xl min-h-96 flex items-center justify-center">
                                <Database className="h-12 w-12 text-slate-400 mx-auto opacity-50" />
                                <CardTitle>Selecciona una relación</CardTitle>
                                <CardDescription>Ver y gestionar sus dependencias funcionales</CardDescription>
                            </CardContent>
                        )
                }
            </Card>
        </Tabs>
    )
}

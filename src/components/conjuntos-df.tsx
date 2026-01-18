
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import {
    TabsContent,
} from "@/components/ui/tabs"
import { useGetConjuntosDF } from "@/hook/useGetConjuntosDF";

import AggDF from "./agg-conjdf";
import { Relacion } from "@/tipos/relacion";
import CardConjuntoDf from "./card-conjunto-df";
import { GitBranch } from "lucide-react";


export default function ConjuntosDF({ relacion }: { relacion: Relacion }) {
    const { conjuntosDF, isLoading, error, refetch } = useGetConjuntosDF(relacion.id)

    if (isLoading) return <div className="text-slate-400">Cargando...</div>
    if (error || !conjuntosDF) return <div className="text-red-400">Error: {error?.message}</div>

    return (
        <TabsContent value={String(relacion.id)} className="w-full gap-3 grid grid-cols-1 lg:grid-cols-2 justify-center items-start relative">
            {
                conjuntosDF.length > 0 ? conjuntosDF.map((item, index) => (
                    <CardConjuntoDf key={index} item={item} refetch={refetch} />
                )) : <Card className="p-6 text-center col-span-2 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                    <GitBranch className="h-12 w-12 text-slate-500 dark:text-slate-400 mx-auto mb-4 opacity-50" />
                    <CardTitle className="text-slate-900 dark:text-white mb-2">
                        Sin dependencias funcionales
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                        Añade tu primer conjunto de dependencia funcional para {relacion.nombre}
                    </CardDescription>
                </Card>
            }
            <AggDF atributos={relacion.atributos} id={relacion.id} refetch={refetch} conjuntosDF={conjuntosDF} />
        </TabsContent>
    )
}



import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    TabsContent,
} from "@/components/ui/tabs"
import { useGetConjuntosDF } from "@/hook/useGetConjuntosDF";

import AggDF from "./agg-conjdf";
import { Relacion } from "@/tipos/relacion";
import CardConjuntoDf from "./card-conjunto-df";


export default function ConjuntosDF({ relacion }: { relacion: Relacion }) {
    const { conjuntosDF, isLoading, error, refetch } = useGetConjuntosDF(relacion.id)

    if (isLoading) return <div>Loading...</div>
    if (error || !conjuntosDF) return <div>Error: {error?.message}</div>

    return (
        <TabsContent value={String(relacion.id)} className="w-full gap-3  grid grid-cols-1 lg:grid-cols-2 justify-center items-start relative">
            {
                conjuntosDF.length > 0 ? conjuntosDF.map((item, index) => (
                    <CardConjuntoDf key={index} item={item} refetch={refetch} />
                )) : <Card className="p-2 text-center col-span-2">
                    <CardTitle >
                        <span className="text-xl">{relacion.nombre}</span>: No tiene conjuntos de ependencias uncionales disponibles
                    </CardTitle>
                    <CardContent>
                        <p>Crea un nuevo conjunto de Dependencias Funcionalea para comenzar</p>
                    </CardContent>
                </Card>
            }
            <AggDF atributos={relacion.atributos} id={relacion.id} refetch={refetch} conjuntosDF={conjuntosDF} />
        </TabsContent>
    )
}

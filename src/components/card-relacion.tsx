import { Relacion } from "@/tipos/relacion"
import { QueryObserverResult } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash } from "lucide-react"
import { deleteRelacion } from "@/utils/relaciones-actions"
import { EditRelacion } from "./edit-relacion"


export default function CardRelacion({ item, tabId, refetch }:
    { item: Relacion, tabId?: number, refetch?: () => Promise<QueryObserverResult<Relacion[], Error>> }) {
    return (
        <Card key={item.id} className={`flex flex-col gap-2 p-2 min-h-56  transition-all duration-500 ease-in-out 
                           ${tabId === item.id ? "  bg-green-300" : ""}`}>
            <div className="w-60 flex flex-col items-start border-2 border-gray-200 rounded-lg p-2 min-h-40">
                <h1 className="text-2xl">{item.nombre}</h1>
                <div className="grid grid-cols-2 items-start gap-2 w-full ">
                    {item.atributos.map((atr, index) => (

                        <p key={index} className="text-start">-{atr}</p>
                    ))}
                </div>

            </div>
            {
                refetch ?
                    <div className="flex w-full justify-center gap-3">

                        <EditRelacion relacion={item} refetch={refetch} />

                        <Button variant="destructive" className="hover:cursor-pointer" onClick={() => {
                            deleteRelacion(item.id)
                            refetch()
                        }}>
                            <Trash className="h-5 w-5" />
                        </Button>
                    </div> : null
            }

        </Card>
    )
}

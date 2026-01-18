import { Relacion } from "@/tipos/relacion"
import { QueryObserverResult } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash, Edit2 } from "lucide-react"
import { deleteRelacion } from "@/utils/relaciones-actions"
import { EditRelacion } from "./edit-relacion"


export default function CardRelacion({ item, tabId, refetch }:
    { item: Relacion, tabId?: number, refetch?: () => Promise<QueryObserverResult<Relacion[], Error>> }) {
    return (
        <Card key={item.id} className="flex flex-col gap-3 p-4 w-full bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white truncate">{item.nombre}</h2>
                <div className="flex flex-wrap gap-1">
                    {item.atributos.slice(0, 4).map((atr, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-blue-600 dark:text-blue-300 text-xs rounded font-mono"
                        >
                            {atr}
                        </span>
                    ))}
                    {item.atributos.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-400 text-xs rounded">
                            +{item.atributos.length - 4}
                        </span>
                    )}
                </div>
            </div>
            {
                refetch ?
                    <div className="flex w-full gap-2 mt-2">
                        <EditRelacion relacion={item} refetch={refetch} />
                        <Button
                            variant="destructive"
                            size="sm"
                            className="flex-1 hover:cursor-pointer"
                            onClick={() => {
                                deleteRelacion(item.id)
                                refetch()
                            }}
                        >
                            <Trash className="h-4 w-4" />
                        </Button>
                    </div> : null
            }
        </Card>
    )
}


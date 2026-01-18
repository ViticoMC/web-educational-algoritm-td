import { ConjuntoDF } from '@/tipos/df'
import { QueryObserverResult } from '@tanstack/react-query'
import { ArrowRight, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { formatAtri } from '@/utils/formatAtr'
import { deleteDF } from '@/utils/df-actions'

export default function CardConjuntoDf({ item, refetch }: { item: ConjuntoDF | undefined, refetch?: () => Promise<QueryObserverResult<ConjuntoDF[], Error>> }) {


    if (!item) return <div></div>
    return (
        <Card className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all flex flex-col justify-between">
            <CardContent className="p-4">
                <CardTitle className="text-lg mb-4 text-slate-900 dark:text-white">{item.nombre}</CardTitle>
                <div className="space-y-2">
                    {
                        item.df?.map((df, index) => (
                            <div key={index} className="flex items-center justify-between gap-2 text-xs bg-slate-100 dark:bg-slate-600 p-2 rounded">
                                <span className="font-mono text-blue-600 dark:text-blue-300">{formatAtri(df.implicantes)}</span>
                                <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0" />
                                <span className="font-mono text-cyan-600 dark:text-cyan-300">{formatAtri(df.implicados)}</span>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
            {
                refetch ?
                    <div className="p-4 border-t border-slate-200 dark:border-slate-600">
                        <Button
                            variant="destructive"
                            size="sm"
                            className="w-full hover:cursor-pointer"
                            onClick={() => {
                                deleteDF(item.id)
                                refetch()
                            }}
                        >
                            <Trash className="h-4 w-4 mr-2" />
                            Delete Set
                        </Button>
                    </div> : null
            }
        </Card>
    )
}


import { ConjuntoDF } from '@/tipos/df'
import { QueryObserverResult } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { formatAtri } from '@/utils/formatAtr'
import { deleteDF } from '@/utils/df-actions'

export default function CardConjuntoDf({ item, refetch }: { item: ConjuntoDF | undefined, refetch?: () => Promise<QueryObserverResult<ConjuntoDF[], Error>> }) {


    if (!item) return <div></div>
    return (
        <Card className="relative h-auto w- w-80 flex flex-col justify-between">
            <CardTitle className="text-2xl text-center absolute top-0 left-4">{item.nombre}:</CardTitle>
            <CardContent className="flex flex-col ">
                {
                    item.df?.map((df, index) => (
                        <CardContent key={index} className="flex items-end justify-between gap-2 text-xs">
                            <div>
                                {formatAtri(df.implicantes)}
                            </div>
                            <ArrowRight className="h-4 w-4" />
                            <div>
                                {formatAtri(df.implicados)}
                            </div>
                        </CardContent>
                    ))
                }
            </CardContent>
            {
                refetch ?
                    <Button variant="destructive" className="hover:cursor-pointer" onClick={() => {
                        deleteDF(item.id)
                        refetch()
                    }}>
                        Eliminar Conjunto
                    </Button> : null
            }
        </Card>
    )
}

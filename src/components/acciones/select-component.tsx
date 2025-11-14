import { ConjuntoDF } from '@/tipos/df'
import { Relacion } from '@/tipos/relacion'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"


const placeholders = {
    relacion: [
        "Selecciona una relación",
        "Relaciones",
        "No hay Relaciones",
    ],
    conjuntoDF: [
        "Selecciona un Conjunto DF ",
        "Conjuntos DF",
        "No hay Conjuntos DF",
    ],
}

export function SelectComponent({ value, changue, type, items, disbled }: {
    value: string | undefined,
    changue: (value: string) => void
    type: keyof typeof placeholders
    items: Relacion[] | ConjuntoDF[]
    disbled?: boolean
}) {
    return (
        <Select
            value={value}
            onValueChange={(value) => changue(value)}
            disabled={disbled}
        >
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={placeholders[type][0]} />
            </SelectTrigger>
            <SelectContent side="bottom" align="center" className="z-50">
                <SelectGroup>
                    <SelectLabel>{items.length > 0 ? placeholders[type][1] : placeholders[type][2]}</SelectLabel>
                    {
                        items.length > 0 && items.map((rel) => (
                            <SelectItem key={rel.id} value={rel.nombre} >
                                {rel.nombre}
                            </SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
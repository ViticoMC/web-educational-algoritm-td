"use client"
import { TabsList, TabsTrigger, Tabs } from '../ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Relacion } from '@/tipos/relacion'
import useConjuntoDFStore from '@/store/conjuntos'
import { useGetRelaciones } from '@/hook/useGetRelaciones'
import { SpinnerButton } from '../spinner'
import Clausura from './clausura'
import Equivalencia from './equivalencia'
import InclusionDependencia from './inclusion-dependencia'
import ConjuntoIrreducible from './conjunto-irreducible'
import ClaveCandidata from './clave-candidata'
import { Card } from '../ui/card'

const options = [
    "Clausura de Atributos",
    "Equivalencia",
    "Inclusión de Dependencia",
    "Conjunto Irreducible",
    "Claves Candidatas"
]

export default function Acciones() {

    const { relaciones, isLoading, error } = useGetRelaciones()


    if (isLoading) return <SpinnerButton />
    if (error || !relaciones) return <div className="text-red-400">Error: {error?.message}</div>

    return (
        <div className="space-y-6">
            <Tabs className='w-full' defaultValue={options[0]} >
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full h-auto p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                    {
                        options.map((option) => (
                            <TabsTrigger
                                key={option}
                                value={option}
                                className='cursor-pointer data-[state=active]:bg-blue-600 rounded text-sm'
                            >
                                {option}
                            </TabsTrigger>
                        ))
                    }
                </TabsList>
                {
                    options.map((option) => (
                        <TabsContent value={option} key={option} className="mt-6">
                            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 p-6">
                                {renderAccion(option, relaciones)}
                            </Card>
                        </TabsContent>
                    ))
                }
            </Tabs>
        </div>
    )
}

function renderAccion(option: string, relaciones: Relacion[]) {
    switch (option) {
        case "Clausura de Atributos":
            return <Clausura relaciones={relaciones} />
        case "Equivalencia":
            return <Equivalencia relaciones={relaciones} />
        case "Inclusión de Dependencia":
            return <InclusionDependencia relaciones={relaciones} />
        case "Conjunto Irreducible":
            return <ConjuntoIrreducible relaciones={relaciones} />
        case "Claves Candidatas":
            return <ClaveCandidata relaciones={relaciones} />

    }
}



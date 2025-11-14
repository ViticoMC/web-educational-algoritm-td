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

const options = [
    "Clausura",
    "Equivalencia",
    "Inlcusion de dependencia",
    "Conjunto Irreducible",
    "Clave Candidata"
]

export default function Acciones() {

    const { relaciones, isLoading, error } = useGetRelaciones()


    if (isLoading) return <SpinnerButton />
    if (error || !relaciones) return <div>Error: {error?.message}</div>

    return (
        <Tabs className='col-span-2' defaultValue={options[0]} >
            <TabsList className="md:flex h-auto grid grid-cols-2 gap-2 w-full justify-between">
                {
                    options.map((option) => (
                        <TabsTrigger key={option} value={option} className='cursor-pointer'>{option}</TabsTrigger>
                    ))
                }
            </TabsList>
            {
                options.map((option) => (
                    <TabsContent value={option} key={option}>
                        {renderAccion(option, relaciones)}
                    </TabsContent>
                ))
            }
        </Tabs>
    )
}

function renderAccion(option: string, relaciones: Relacion[]) {
    switch (option) {
        case "Clausura":
            return <Clausura relaciones={relaciones} />
        case "Equivalencia":
            return <Equivalencia relaciones={relaciones} />
        case "Inlcusion de dependencia":
            return <InclusionDependencia relaciones={relaciones} />
        case "Conjunto Irreducible":
            return <ConjuntoIrreducible relaciones={relaciones} />
        case "Clave Candidata":
            return <ClaveCandidata relaciones={relaciones} />

    }
}


import Acciones from '@/components/acciones/acciones'

export default function PageAcciones() {
    return (
        <div className='p-8 pb-10'>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Suite de Ejecución de Algoritmos</h1>
                <p className="text-slate-400">Deriva formas normales de bases de datos y clausuras con lógica paso a paso.</p>
            </div>
            <Acciones />
        </div>
    )
}


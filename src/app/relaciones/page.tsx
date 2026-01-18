"use client"

import Relaciones from '@/components/relaciones'

export default function RelacionesPage() {
    return (
        <main className='p-8 pb-10'>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Gestión de Relaciones</h1>
                <p className="text-slate-600 dark:text-slate-400">Define los atributos de tu esquema relacional y mapea dependencias funcionales.</p>
            </div>
            <Relaciones />
        </main>
    )
}

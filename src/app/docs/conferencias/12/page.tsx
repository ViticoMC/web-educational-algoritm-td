import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function BDConference12Page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-violet-900 dark:bg-violet-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-violet-300 dark:text-violet-400 hover:text-violet-100 dark:hover:text-violet-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-violet-300 font-bold tracking-widest uppercase mb-4">Conferencia 12</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        [Título de la Conferencia 12]
                    </h1>
                    <p className="text-2xl text-violet-100 font-light">
                        [Subtítulo descriptivo]
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
                {/* Contenido aquí */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-violet-600 dark:border-violet-400 inline-block mb-8">Sumario</h2>
                    <p className="text-slate-600 dark:text-slate-400">Contenido por agregar...</p>
                </section>
            </main>
        </div>
    );
}

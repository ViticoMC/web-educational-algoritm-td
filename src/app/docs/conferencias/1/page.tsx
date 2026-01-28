import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Database,
    Layers,
    Users,
    Cpu,
    Code2,
    Key,
    Share2,
    HardDrive,
    Info,
    ChevronRight
} from 'lucide-react';

export default function BDConferencePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section - Portada */}
            <header className="bg-blue-900 dark:bg-blue-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-blue-300 dark:text-blue-400 hover:text-blue-100 dark:hover:text-blue-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-blue-300 font-bold tracking-widest uppercase mb-4">Conferencia 1</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Introducción a las Bases de Datos
                    </h1>
                    <p className="text-2xl text-blue-100 font-light">
                        Modelo Entidad / Interrelación (E/R)
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-blue-600 dark:border-blue-400 inline-block mb-8">Sumario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="#conceptos" className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1.</span>
                                <span className="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">Conceptos fundamentales de SBD</span>
                            </span>
                            <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" size={20} />
                        </a>
                        <a href="#arquitectura" className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">2.</span>
                                <span className="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">Arquitectura de Sistemas de BD</span>
                            </span>
                            <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" size={20} />
                        </a>
                        <a href="#modelos" className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">3.</span>
                                <span className="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">Modelos de datos</span>
                            </span>
                            <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" size={20} />
                        </a>
                        <a href="#modelo-er" className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">4.</span>
                                <span className="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">Modelo E/R</span>
                            </span>
                            <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" size={20} />
                        </a>
                    </div>
                </section>

                {/* 1. Conceptos Fundamentales */}
                <section id="conceptos" className="scroll-mt-10 space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                            <Database className="text-blue-600 dark:text-blue-400" /> Conceptos Fundamentales
                        </h2>
                        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mb-6">
                            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2 text-lg">Sistema de Base de Datos (SBD)</h3>
                            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                                Sistema computarizado cuya finalidad es almacenar información y permitir a los usuarios recuperar y actualizar esa información en base a peticiones.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <FeatureCard
                                title="Integrados"
                                desc="Representación unificada de datos con redundancia controlada."
                            />
                            <FeatureCard
                                title="Compartidos"
                                desc="Acceso concurrente por múltiples usuarios para fines diversos."
                            />
                            <FeatureCard
                                title="Persistentes"
                                desc="Permanencia de datos hasta solicitud explícita de eliminación."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <ComponentCard icon={<HardDrive size={32} />} title="Hardware" text="Discos, memoria y procesadores." />
                        <ComponentCard icon={<Code2 size={32} />} title="Software" text="SGBD y herramientas de gestión." />
                        <ComponentCard icon={<Users size={32} />} title="Usuarios" text="ABD, programadores y usuarios finales." />
                        <ComponentCard icon={<Database size={32} />} title="Datos" text="Base de datos integrada y compartida." />
                    </div>
                </section>

                {/* 2. Arquitectura de Sistemas de BD */}
                <section id="arquitectura" className="scroll-mt-10 bg-slate-800 dark:bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-300 dark:text-blue-200">
                        <Layers className="text-blue-400 dark:text-blue-300" /> Arquitectura ANSI/SPARC
                    </h2>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-full max-w-md bg-blue-500 dark:bg-blue-600 p-4 rounded text-center font-bold">Nivel Externo (Vistas de Usuario)</div>
                        <div className="h-8 border-l-2 border-dashed border-blue-400 dark:border-blue-500"></div>
                        <div className="w-full max-w-md bg-blue-700 dark:bg-blue-800 p-4 rounded text-center font-bold">Nivel Intermedio (Conceptual)</div>
                        <div className="h-8 border-l-2 border-dashed border-blue-400 dark:border-blue-500"></div>
                        <div className="w-full max-w-md bg-blue-900 dark:bg-blue-950 p-4 rounded text-center font-bold">Nivel Interno (Físico)</div>
                    </div>
                </section>

                {/* 3. Modelos de Datos */}
                <section id="modelos" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Modelos de Datos</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 italic">Herramientas conceptuales para describir datos, relaciones y semántica.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Basados en Objetos</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">Entidad-Relación y Orientado a Objetos.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Basados en Registros</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">Relacional, Jerárquico y de Red.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Físicos</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">Descripción del almacenamiento a bajo nivel.</p>
                        </div>
                    </div>
                </section>

                {/* 4. Modelo E/R */}
                <section id="modelo-er" className="scroll-mt-10 space-y-10 pt-10">
                    <h2 className="text-3xl font-bold text-center border-b-2 border-slate-200 dark:border-slate-700 pb-4 text-slate-900 dark:text-white">Modelo Entidad / Interrelación (E/R)</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Entidad */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 flex items-center justify-center border border-blue-700 dark:border-blue-500 font-mono text-xs">E</div> Entidad
                            </h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <li>• Existencia propia.</li>
                                <li>• Ocurrencias distinguibles entre sí.</li>
                                <li>• Mismas características para todas las ocurrencias.</li>
                            </ul>
                        </div>

                        {/* Atributos */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                                <Key className="text-yellow-600 dark:text-yellow-500" /> Identificadores (Atributos)
                            </h3>
                            <div className="space-y-3">
                                <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-100 dark:border-yellow-800">
                                    <span className="font-bold block text-yellow-900 dark:text-yellow-100">Identificador Principal (Llave):</span>
                                    <span className="text-sm text-yellow-800 dark:text-yellow-200">Conjunto mínimo que identifica unívocamente cada ocurrencia.</span>
                                </div>
                                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                                    <span className="font-bold block text-slate-900 dark:text-slate-100">Identificador Alternativo:</span>
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Otras claves candidatas para identificación.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interrelación */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-t-8 border-blue-600 dark:border-blue-500">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white"><Share2 className="text-blue-600 dark:text-blue-400" /> Interrelación</h3>
                        <p className="mb-6 text-slate-700 dark:text-slate-300">Asociación o correspondencia entre entidades. Elementos clave:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-1 italic">Grado</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Cantidad de entidades participantes.</div>
                            </div>
                            <div className="text-center p-4 border-x border-slate-100 dark:border-slate-700">
                                <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-1 italic">Correspondencia</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 italic">1:1, 1:N, N:M</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-1 italic">Función</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Papel de la entidad en la relación.</div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Bibliografía */}
            <footer className="bg-slate-100 dark:bg-slate-900 py-12 px-6 mt-20 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <h3 className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                        <Info size={16} /> Bibliografía
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 space-y-2 text-sm">
                        <p>• C. J. Date. "Introducción a los Sistemas de Bases de Datos", Caps. 1-2.</p>
                        <p>• Jeffrey D. Ullman. "Principles of Database Systems", Cap. 1.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Componentes auxiliares
function FeatureCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">{desc}</p>
        </div>
    );
}

function ComponentCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full">{icon}</div>
            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">{title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{text}</p>
        </div>
    );
}
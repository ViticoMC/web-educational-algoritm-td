import React from 'react';
import Link from 'next/link';
import { Database, Server, HardDrive, Users, Layers, Share2, ShieldCheck, Key, ArrowLeft } from 'lucide-react';

export default function DatabaseLecturePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Header con botón atrás */}
            <header className="bg-blue-900 dark:bg-blue-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs#fundamentos-conceptual" className="inline-flex items-center gap-2 text-blue-300 dark:text-blue-400 hover:text-blue-100 dark:hover:text-blue-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
                            Conferencia 1: Introducción a las Bases de Datos
                        </h1>
                        <p className="text-2xl text-blue-100 font-light">Modelo Entidad/Interrelación (E/R)</p>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">

                {/* Sumario */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold border-b-4 border-blue-600 dark:border-blue-400 inline-block mb-8">Sumario</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-lg text-slate-700 dark:text-slate-300">
                        <li>Introducción a los Sistemas de Bases de Datos (SBD).</li>
                        <li>Conceptos fundamentales.</li>
                        <li>Arquitectura de los Sistemas de Bases de Datos.</li>
                        <li>Modelos de datos.</li>
                        <li>Modelo E/R (Entidad/Interrelación).</li>
                    </ul>
                </section>

                {/* Conceptos Fundamentales */}
                <section className="mb-12 space-y-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                        <Database className="text-blue-600 dark:text-blue-400" /> Conceptos Fundamentales
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-blue-600 dark:border-blue-500 shadow-md">
                            <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-400">Sistema de Base de Datos (SBD)</h3>
                            <p className="text-slate-600 dark:text-slate-400">Sistema computarizado cuya finalidad es almacenar información y permitir a los usuarios recuperar y actualizar esa información en base a peticiones.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-indigo-600 dark:border-indigo-500 shadow-md">
                            <h3 className="font-bold text-xl mb-2 text-indigo-700 dark:text-indigo-400">SGBD</h3>
                            <p className="text-slate-600 dark:text-slate-400">Conjunto coordinado de programas, procedimientos y lenguajes que suministra los medios para describir, recuperar y manipular datos manteniendo integridad y seguridad.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-8">
                        <h3 className="text-xl font-semibold border-l-4 border-blue-600 dark:border-blue-400 pl-3 text-slate-800 dark:text-slate-200">Características de los Datos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="p-4 bg-white dark:bg-slate-800 shadow rounded border-l-4 border-blue-600 dark:border-blue-500">
                                <strong className="block text-blue-600 dark:text-blue-400 uppercase">Integrados</strong>
                                <p className="text-slate-600 dark:text-slate-400 mt-1">Representación unificada de varios archivos con redundancia controlada.</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 shadow rounded border-l-4 border-indigo-600 dark:border-indigo-500">
                                <strong className="block text-indigo-600 dark:text-indigo-400 uppercase">Compartidos</strong>
                                <p className="text-slate-600 dark:text-slate-400 mt-1">Acceso concurrente por diferentes usuarios para fines diversos.</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 shadow rounded border-l-4 border-cyan-600 dark:border-cyan-500">
                                <strong className="block text-cyan-600 dark:text-cyan-400 uppercase">Persistentes</strong>
                                <p className="text-slate-600 dark:text-slate-400 mt-1">Los datos permanecen hasta que existe una solicitud explícita de eliminación.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Componentes del Sistema */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <HardDrive className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={48} />
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Hardware</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Discos magnéticos (almacenamiento secundario), Unidades E/S, procesadores y memoria principal.</p>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Server className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400" size={48} />
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Software</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">SGBD (capa entre usuario y BD física), utilerías, generadores de informes y administrador de transacciones.</p>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Users className="mx-auto mb-4 text-cyan-600 dark:text-cyan-400" size={48} />
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Usuarios</h3>
                        <ul className="text-sm text-slate-600 dark:text-slate-400">
                            <li>Programadores de aplicaciones</li>
                            <li>Usuarios finales</li>
                            <li><strong>ABD:</strong> Administrador de la Base de Datos (Personal técnico).</li>
                        </ul>
                    </div>
                </section>

                {/* Arquitectura ANSI/SPARC */}
                <section className="mb-12 p-8 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-300 dark:text-indigo-200">
                        <Layers /> Arquitectura de tres niveles ANSI/SPARC (1978)
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-slate-800 dark:bg-slate-800 p-4 rounded border-l-4 border-blue-600 dark:border-blue-500">
                            <span className="bg-blue-600 dark:bg-blue-500 px-3 py-1 rounded font-mono text-white">Externo</span>
                            <p className="text-slate-100">Vistas de usuario (Lógico)</p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-800 dark:bg-slate-800 p-4 rounded border-l-4 border-indigo-600 dark:border-indigo-500">
                            <span className="bg-indigo-600 dark:bg-indigo-500 px-3 py-1 rounded font-mono text-white">Conceptual</span>
                            <p className="text-slate-100">Vista de usuarios unificada (Intermedio)</p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-800 dark:bg-slate-800 p-4 rounded border-l-4 border-cyan-600 dark:border-cyan-500">
                            <span className="bg-cyan-600 dark:bg-cyan-500 px-3 py-1 rounded font-mono text-white">Interno</span>
                            <p className="text-slate-100">Base de datos física</p>
                        </div>
                    </div>
                </section>

                {/* Modelo Entidad/Interrelación */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-slate-300 dark:border-slate-600 pb-2 text-slate-900 dark:text-white">Modelo Entidad / Interrelación (E/R)</h2>

                    {/* Entidades */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 italic">1. Entidades</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-2 border-dashed border-blue-400 dark:border-blue-500 p-4 flex items-center justify-center bg-white dark:bg-slate-800 rounded-lg">
                                <span className="text-xl font-bold tracking-widest uppercase text-slate-900 dark:text-white">[ PACIENTE ]</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className="text-slate-900 dark:text-white"><strong>Reglas (Tardieu 1979):</strong></p>
                                <ul className="list-disc ml-5 text-slate-700 dark:text-slate-300">
                                    <li>Tener existencia propia.</li>
                                    <li>Cada ocurrencia debe ser distinguible.</li>
                                    <li>Todas las ocurrencias deben tener mismas características.</li>
                                </ul>
                                <p className="mt-2 font-semibold text-slate-900 dark:text-white">Tipos:</p>
                                <p className="text-slate-700 dark:text-slate-400">Regulares (existen por sí mismas) y Débiles (dependen de otra).</p>
                            </div>
                        </div>
                    </div>

                    {/* Interrelaciones */}
                    <div className="mb-10 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                            <Share2 size={24} /> 2. Interrelaciones
                        </h3>
                        <p className="mb-4 text-slate-700 dark:text-slate-400">Asociación o correspondencia entre entidades.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border-l-4 border-blue-600 dark:border-blue-500">
                                <p className="text-slate-900 dark:text-white"><strong>Grado:</strong> Número de entidades participantes.</p>
                                <p className="text-slate-700 dark:text-slate-400"><strong>Función:</strong> Papel de cada entidad.</p>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border-l-4 border-indigo-600 dark:border-indigo-500">
                                <p className="text-slate-900 dark:text-white"><strong>Tipo de correspondencia:</strong></p>
                                <p className="font-mono font-bold text-blue-600 dark:text-blue-400 mt-1">1:1 | 1:N | N:M</p>
                            </div>
                        </div>
                    </div>

                    {/* Atributos */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                            <ShieldCheck size={24} /> 3. Atributos e Identificadores
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded border-l-4 border-blue-400 dark:border-blue-500">
                                    <h4 className="font-bold flex items-center gap-1 text-blue-900 dark:text-blue-200"><Key size={16} /> Identificador Principal</h4>
                                    <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">Conjunto mínimo de atributos (Llave/Superclave) que identifica unívocamente cada ocurrencia.</p>
                                </div>
                                <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded border-l-4 border-slate-400 dark:border-slate-600">
                                    <h4 className="font-bold text-slate-900 dark:text-white">Identificador Alternativo</h4>
                                    <p className="text-sm text-slate-700 dark:text-slate-400 mt-1">Llave candidata que también podría identificar unívocamente la entidad.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-6 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-slate-800">
                                <div className="w-32 h-16 border-2 border-blue-500 dark:border-blue-400 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mb-2">
                                    Atributo
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-500 underline italic">Representación gráfica: Óvalo</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Historia y Bibliografía */}
                <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2 underline text-slate-900 dark:text-white">Hitos Históricos</h4>
                                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-400">
                                    <li><strong>1960:</strong> Charles Bachman (General Electric) crea IDS (Modelo de Red). Premio Turing 1973.</li>
                                    <li><strong>Finales 60s:</strong> IBM desarrolla IMS (Modelo Jerárquico) y sistema SABRE.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 underline text-slate-900 dark:text-white">Bibliografía</h4>
                                <ul className="text-sm space-y-1 italic text-slate-600 dark:text-slate-400">
                                    <li>C.J. Date - Introducción a los SBD (Cap. 1 y 2).</li>
                                    <li>Jeffrey D. Ullman - Principles of Database Systems.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-slate-500 dark:text-slate-500 text-xs mt-10">
                            © 2026 - Material de Apoyo Académico: Sistemas de Bases de Datos I
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
import React from 'react';
import Link from 'next/link';
import {
    Table2,
    KeyRound,
    ShieldAlert,
    Database,
    Combine,
    ListTree,
    FileText,
    Binary,
    ArrowLeft
} from 'lucide-react';

export default function ModeloRelacionalPage() {
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
                            Conferencia 3: El Modelo Relacional
                        </h1>
                        <p className="text-2xl text-blue-100 font-light">Estructuras, Claves y Restricciones de Integridad</p>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Estructura del Modelo */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                        <Table2 /> Estructura del Modelo Relacional
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-3 border-b dark:border-slate-600 pb-1">Relación (Tabla)</h3>
                            <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Es la estructura fundamental. Se compone de un conjunto de tuplas (filas) que comparten los mismos atributos (columnas).</p>
                            <ul className="text-sm space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                                <li><strong>Tupla:</strong> Cada una de las filas de la tabla.</li>
                                <li><strong>Grado:</strong> Número de atributos de la relación.</li>
                                <li><strong>Cardinalidad:</strong> Número de tuplas que contiene.</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-3 border-b dark:border-slate-600 pb-1">Dominio y Atributo</h3>
                            <p className="text-sm mb-2 text-slate-700 dark:text-slate-300"><strong>Dominio:</strong> Conjunto de valores que puede tomar un atributo.</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300"><strong>Atributo:</strong> Papel que desempeña un dominio en una relación.</p>
                            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded text-xs italic border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200">
                                <strong>Nota Histórica:</strong> En 1990, Date y Codd propusieron el concepto de Dominio Compuesto (ej. Fecha = Día + Mes + Año).
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tipos de Claves */}
                <section className="mb-12 bg-blue-900 dark:bg-blue-950 text-white p-8 rounded-2xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <KeyRound className="text-yellow-400" /> Definición de Claves (Keys)
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded font-bold shrink-0 text-sm">Primaria</div>
                            <div>
                                <p className="text-sm">Conjunto mínimo de atributos que identifican de forma única cada tupla. No puede contener valores nulos.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-400 text-blue-900 px-3 py-1 rounded font-bold shrink-0 text-sm">Ajena</div>
                            <div>
                                <p className="text-sm">Atributo(s) en una relación que referencia a la clave primaria de otra relación (o de la misma).</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-slate-400 text-white px-3 py-1 rounded font-bold shrink-0 text-sm">Candidata</div>
                            <div>
                                <p className="text-sm">Cualquier superclave mínima que podría actuar como clave primaria.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Restricciones de Integridad */}
                <section className="mb-12">
                    <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-400 flex items-center gap-2">
                                <Database size={20} /> Restricciones Inherentes
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                <li>• <strong>No duplicidad:</strong> No puede haber filas duplicadas en una relación[cite: 92].</li>
                                <li>• <strong>Orden:</strong> El orden de las filas es irrelevante para el modelo[cite: 93].</li>
                                <li>• <strong>Atomicidad:</strong> En el cruce de fila y columna solo puede haber un valor simple (sin multievaluados)[cite: 93].</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-blue-900 dark:bg-blue-950 text-white rounded-xl shadow-md transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Binary size={20} /> Restricciones de Usuario
                            </h3>
                            <p className="text-sm mb-4">Son predicados definidos sobre un conjunto de atributos, tuplas o dominios[cite: 99].</p>
                            <div className="bg-blue-800 dark:bg-blue-900 p-4 rounded-lg text-xs font-mono">
                                <p>// Ejemplo de Esquema Relacional [cite: 106]</p>
                                <p>{"< {Ri}, {Vi} >"}</p>
                                <p className="mt-2">Ri: Conjunto de esquemas</p>
                                <p>Vi: Restricciones interrelacionales</p>
                            </div>
                        </div>
                    </section>

                    {/* Integridad Referencial */}
                    <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-xl transition-colors duration-300">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800 dark:text-blue-400">
                            <Combine size={20} /> Integridad Referencial
                        </h3>
                        <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Asegura que las referencias entre tablas sean consistentes. Cuando se intenta eliminar una tupla referenciada, existen tres opciones:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center border border-slate-200 dark:border-slate-700">
                                <strong className="block text-blue-700 dark:text-blue-400">Restringir</strong>
                                <span className="text-xs text-slate-600 dark:text-slate-400">No permitir la eliminación.</span>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center border border-slate-200 dark:border-slate-700">
                                <strong className="block text-blue-700 dark:text-blue-400">Cascada</strong>
                                <span className="text-xs text-slate-600 dark:text-slate-400">Eliminar todas las tuplas que la referencian.</span>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded text-center border border-slate-200 dark:border-slate-700">
                                <strong className="block text-blue-700 dark:text-blue-400">Poner a Nulo</strong>
                                <span className="text-xs text-slate-600 dark:text-slate-400">Establecer valores nulos en la clave ajena.</span>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Resumen del Modelo [cite: 104] */}
                <section className="mb-16">
                    <div className="bg-slate-800 dark:bg-slate-900 text-slate-100 dark:text-slate-300 p-8 rounded-3xl transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="text-blue-400" /> Resumen: Esquema de Relación
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-lg font-mono text-blue-300">R(A: D, S)</p>
                                <ul className="text-sm space-y-2 opacity-80">
                                    <li><strong>R:</strong> Nombre de la relación[cite: 104].</li>
                                    <li><strong>A:</strong> Lista de atributos[cite: 104].</li>
                                    <li><strong>D:</strong> Dominios asociados[cite: 105].</li>
                                    <li><strong>S:</strong> Restricciones de integridad (Inherentes y de Usuario)[cite: 106].</li>
                                </ul>
                            </div>
                            <div className="border-l border-slate-700 dark:border-slate-600 pl-8 hidden md:block italic text-slate-400 dark:text-slate-500 text-sm">
                                "El objetivo fundamental es mantener la independencia de la estructura lógica respecto al modo de almacenamiento físico"[cite: 91].
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operaciones Especiales y Resumen */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-800 dark:text-blue-400">
                                <Binary size={20} /> Operaciones Especiales
                            </h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300">Incluye manipulación avanzada de la estructura lógica y el manejo de valores desconocidos o no aplicables mediante el valor nulo.</p>
                        </div>

                        <div className="bg-blue-900 dark:bg-blue-950 text-white p-6 rounded-xl shadow-lg transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText size={20} /> Resumen del Esquema
                            </h3>
                            <div className="font-mono text-xs space-y-2 opacity-90">
                                <p>Esquema de Relación: R(A: D, S)</p>
                                <p className="ml-4">• R: Nombre de la relación.</p>
                                <p className="ml-4">• A: Lista de atributos.</p>
                                <p className="ml-4">• D: Dominios.</p>
                                <p className="ml-4">• S: Restricciones de integridad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer / Bibliografía */}
                <footer className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-2">
                        <ListTree size={16} /> Bibliografía de Referencia
                    </h4>
                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 italic">
                        <li>• Date, C.J. (1990) - Propuesta del concepto de Dominio Compuesto.</li>
                        <li>• Codd, E.F. - Fundamentos del Modelo Relacional.</li>
                        <li>• Material de Conferencia: "El Modelo Relacional" - Beatriz.</li>
                    </ul>
                    <div className="mt-10 text-center text-[10px] text-slate-500 dark:text-slate-500">
                        Sistemas de Bases de Datos I - 2026 - Conferencia 3
                    </div>
                </footer>            </div>
        </div>
    );
}
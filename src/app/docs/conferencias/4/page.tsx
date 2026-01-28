import React from 'react';
import Link from 'next/link';
import {
    ArrowRightLeft,
    Database,
    Table as TableIcon,
    Key,
    Layers,
    Boxes,
    Code2,
    Info,
    CheckCircle2,
    ChevronRight,
    ArrowLeft
} from 'lucide-react';

export default function TransformacionERPage() {
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
                            Conferencia 4: Transformación E/R a Relacional
                        </h1>
                        <p className="text-2xl text-blue-100 font-light">Diagrama E/R → Esquema Relacional</p>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Principios Fundamentales */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-100 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                        <h3 className="font-bold text-sm mb-1 uppercase text-blue-800 dark:text-blue-300">Principio 1</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-200">Todo tipo de entidad se convierte en una relación[cite: 13].</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                        <h3 className="font-bold text-sm mb-1 uppercase text-blue-800 dark:text-blue-300">Principio 2</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-200">Toda interrelación M:M se transforma en una relación[cite: 13].</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                        <h3 className="font-bold text-sm mb-1 uppercase text-blue-800 dark:text-blue-300">Principio 3</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-200">Las interrelaciones 1:M se traducen en propagación de clave o nueva relación[cite: 13].</p>
                    </div>
                </section>

                {/* Reglas del Modelo Básico */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-900 dark:text-blue-300 border-l-4 border-blue-600 dark:border-blue-400 pl-4 transition-colors duration-300">
                        <Database /> Reglas del Modelo Básico
                    </h2>

                    <div className="space-y-6">
                        {/* Dominios y Entidades */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                                <TableIcon size={20} /> 1-3. Dominios, Entidades y Atributos
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-blue-500 dark:text-blue-400 shrink-0" size={18} />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>Dominios:</strong> Son objetos en el Modelo Relacional[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-blue-500 dark:text-blue-400 shrink-0" size={18} />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>Entidades:</strong> Cada tipo se convierte en una relación[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-blue-500 dark:text-blue-400 shrink-0" size={18} />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>Atributos:</strong> Se convierten en columnas de la relación[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-blue-500 dark:text-blue-400 shrink-0" size={18} />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>AIP:</strong> Los Atributos Identificadores Principales se convierten en Clave Primaria[cite: 14].</span>
                                </li>
                            </ul>
                        </div>

                        {/* Interrelaciones M:M */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-400">4.1 Interrelaciones M:M</h3>
                            <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Se transforma en una relación cuya <strong>Clave Primaria</strong> son los AIP (juntos) de las entidades que relaciona[cite: 15].</p>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-500 text-sm text-slate-700 dark:text-slate-300">
                                Cada AIP se convierte individualmente en una <strong>Clave Ajena</strong> referenciando a las entidades participantes[cite: 15].
                            </div>
                        </div>

                        {/* Interrelaciones 1:N */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-400">4.2 Interrelaciones 1:N</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="border border-slate-200 dark:border-slate-600 p-4 rounded-lg transition-colors duration-300">
                                    <h4 className="font-bold text-sm mb-2 uppercase underline text-slate-600 dark:text-slate-400">Opción A: Propagación</h4>
                                    <p className="text-xs text-slate-700 dark:text-slate-300">Los AIP de la entidad "1" se transfieren a la entidad "N" como Clave Ajena[cite: 15, 16]. Se incluyen también los atributos de la interrelación[cite: 16].</p>
                                </div>
                                <div className="border border-slate-200 dark:border-slate-600 p-4 rounded-lg transition-colors duration-300">
                                    <h4 className="font-bold text-sm mb-2 uppercase underline text-slate-600 dark:text-slate-400">Opción B: Crear Relación</h4>
                                    <p className="text-xs text-slate-700 dark:text-slate-300">Se usa cuando el número de ocurrencias es pequeño (cardinalidad mínima 0), cuando tiene atributos propios o se prevé que sea N:M en el futuro[cite: 16].</p>
                                </div>
                            </div>
                        </div>

                        {/* Interrelaciones 1:1 */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-400">4.3 Interrelaciones 1:1</h3>
                            <ul className="text-sm space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                                <li>Si ambas son <strong>(0,1)</strong>: Se recomienda crear una relación independiente[cite: 17].</li>
                                <li>Si es <strong>(0,1)</strong> y <strong>(1,1)</strong>: Se traslada la clave de la entidad (1,1) a la (0,1)[cite: 17].</li>
                                <li>Si ambas son <strong>(1,1)</strong>: Se traslada la clave en cualquier dirección[cite: 18].</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Reglas del Modelo Extendido */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-900 dark:text-blue-300 border-l-4 border-blue-600 dark:border-blue-400 pl-4 transition-colors duration-300">
                        <Layers /> Reglas del Modelo Extendido
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Interrelaciones Débiles */}
                        <div className="p-6 bg-blue-900 dark:bg-blue-950 text-white rounded-xl transition-colors duration-300">
                            <h3 className="font-bold mb-4 flex items-center gap-2 underline">
                                <Info size={18} /> Entidades Débiles
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Para dependencias en identificación y existencia: Utilizar mecanismos de propagación de clave y plantear la clave ajena con nulos no permitidos (<strong>NOT NULL</strong>)[cite: 18, 19].
                            </p>
                        </div>

                        {/* Jerarquías y Subtipos */}
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors duration-300">
                            <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-4">7. Jerarquías (Tipos y Subtipos)</h3>
                            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                                <div className="flex gap-2"><strong>a)</strong><span>Todos los atributos (supertipo y subtipos) en una sola relación[cite: 20].</span></div>
                                <div className="flex gap-2"><strong>b)</strong><span>Una relación para el supertipo y tantas relaciones como subtipos existan[cite: 20].</span></div>
                                <div className="flex gap-2"><strong>c)</strong><span>Relaciones distintas para cada subtipo con atributos comunes incluidos[cite: 21].</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transformación de Agregación */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300 border-l-4 border-blue-600 dark:border-blue-400 pl-4 transition-colors duration-300">
                        <Boxes /> Transformación de la Agregación
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                        <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Se transforma en una relación cuyos atributos son los AIP de las entidades contenidas en la agregación.</p>
                        <ul className="text-sm space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                            <li>Los atributos AIP juntos forman la <strong>Clave Primaria</strong>.</li>
                            <li>Cada uno se convierte individualmente en <strong>Clave Ajena</strong>.</li>
                            <li>Se añaden los atributos propios de la agregación como columnas.</li>
                        </ul>
                    </div>
                </section>


                {/* Casos Prácticos de Transformación */}
                <section className="mb-12">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={24} className="text-blue-500" /> Casos de Estudio Rápidos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px]">
                        <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm transition-colors duration-300">
                            <strong className="text-slate-900 dark:text-slate-100">Matrimonio (1:1):</strong> <br />
                            <span className="text-slate-600 dark:text-slate-400">Hombre(Cod-h), Mujer(Cod-m) → Matrimonio(Cod-h, Cod-m)[cite: 27].</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm transition-colors duration-300">
                            <strong className="text-slate-900 dark:text-slate-100">Pertenece (1:N):</strong> <br />
                            <span className="text-slate-600 dark:text-slate-400">Editorial(Cod-E) → Libro(..., Cod-E)[cite: 26].</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm transition-colors duration-300">
                            <strong className="text-slate-900 dark:text-slate-100">Recursiva (0,1):</strong> <br />
                            <span className="text-slate-600 dark:text-slate-400">Tema(Cod-Tema, ..., Cod-Tema-Sup)[cite: 27].</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm transition-colors duration-300">
                            <strong className="text-slate-900 dark:text-slate-100">Responsable (1:1):</strong> <br />
                            <span className="text-slate-600 dark:text-slate-400">Depto(Cod-d, ..., Cod-e_responsable)[cite: 27].</span>
                        </div>
                    </div>
                </section>

                <footer className="mt-20 pt-8 border-t border-slate-300 dark:border-slate-700 text-center text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
                    <p>Material de Apoyo: Universidad de Ciencias Informáticas (UCI) - Sistemas de Bases de Datos I</p>
                    <p className="mt-2 uppercase tracking-widest opacity-50">Conferencia 4 - Profesor Ramiro Pérez Vázquez [cite: 31]</p>
                </footer>
            </div>
        </div>
    );
}
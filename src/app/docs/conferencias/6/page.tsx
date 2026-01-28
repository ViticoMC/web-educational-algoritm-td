import React from 'react';
import Link from 'next/link';
import {
    SquareFunction,
    Binary,
    FileCode2,
    Terminal,
    Database,
    ChevronRight,
    Info,
    ShieldCheck,
    AlertTriangle,
    Search,
    ArrowLeft
} from 'lucide-react';

export default function BDConference6Page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-cyan-900 dark:bg-cyan-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-cyan-300 dark:text-cyan-400 hover:text-cyan-100 dark:hover:text-cyan-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-cyan-300 font-bold tracking-widest uppercase mb-4">Conferencia 6</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Cálculo Relacional
                    </h1>
                    <p className="text-2xl text-cyan-100 font-light">
                        Lenguajes No Procedimentales: Tuplas y Dominios
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-cyan-600 dark:border-cyan-400 inline-block mb-8">Sumario de la Conferencia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "definicion", text: "Definición de Cálculo Relacional" },
                            { id: "tuplas", text: "Cálculo Relacional de Tuplas (CRT)" },
                            { id: "formulas", text: "Fórmulas Bien Formadas (FBF)" },
                            { id: "ejemplos", text: "Ejemplos de Expresiones" },
                            { id: "seguridad", text: "Expresiones Seguras e Inseguras" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-cyan-500 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-cyan-700 dark:group-hover:text-cyan-300">{item.text}</span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-cyan-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* 1. Definición */}
                <section id="definicion" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Search className="text-cyan-600" /> ¿Qué es el Cálculo Relacional?
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-cyan-600">
                        <p className="text-slate-700 leading-relaxed mb-6">
                            A diferencia del Álgebra Relacional, el Cálculo Relacional es un <strong>lenguaje no procedimental</strong>. Se basa en la lógica de predicados de primer orden para describir qué resultados se desean obtener de la base de datos, sin especificar los pasos para conseguirlos.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-cyan-50 p-6 rounded-xl">
                                <h4 className="font-bold text-cyan-800 mb-2">Cálculo de Tuplas (CRT)</h4>
                                <p className="text-sm text-slate-600">Las variables representan tuplas completas de una relación.</p>
                            </div>
                            <div className="bg-cyan-50 p-6 rounded-xl">
                                <h4 className="font-bold text-cyan-800 mb-2">Cálculo de Dominios (CRD)</h4>
                                <p className="text-sm text-slate-600">Las variables representan valores individuales de los dominios (columnas).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Cálculo Relacional de Tuplas */}
                <section id="tuplas" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Terminal className="text-cyan-600" /> Cálculo Relacional de Tuplas (CRT)
                    </h2>
                    <div className="bg-slate-900 text-cyan-100 p-8 rounded-2xl shadow-xl font-mono">
                        <p className="text-emerald-400 mb-4"># Expresión General:</p>
                        <div className="text-2xl text-center py-4 bg-slate-800 rounded-lg border border-slate-700">
                            {'{ t | P(t) }'}
                        </div>
                        <div className="mt-6 space-y-2 text-sm">
                            <p><span className="text-orange-400">t:</span> Variable de tupla.</p>
                            <p><span className="text-orange-400">P(t):</span> Predicado o fórmula que describe la condición.</p>
                            <p className="text-slate-400 mt-4 italic">"El conjunto de todas las tuplas t tales que el predicado P es verdadero para t."</p>
                        </div>
                    </div>
                </section>

                {/* 3. Fórmulas Bien Formadas (FBF) */}
                <section id="formulas" className="scroll-mt-10 space-y-8">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Binary className="text-cyan-600" /> Construcción de Fórmulas
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-cyan-700">Átomos de la Fórmula</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="p-3 bg-white rounded shadow-sm border-l-4 border-cyan-400">
                                    <strong>Relación:</strong> <code className="bg-slate-100 px-1">R(t)</code> (t es una tupla de la relación R).
                                </li>
                                <li className="p-3 bg-white rounded shadow-sm border-l-4 border-cyan-400">
                                    <strong>Comparación de componentes:</strong> <code className="bg-slate-100 px-1">t.A θ u.B</code> (donde θ es =, &lt;, &gt;, etc).
                                </li>
                                <li className="p-3 bg-white rounded shadow-sm border-l-4 border-cyan-400">
                                    <strong>Comparación con constante:</strong> <code className="bg-slate-100 px-1">t.A θ c</code>.
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-cyan-700">Cuantificadores</h3>
                            <div className="bg-cyan-900 text-white p-6 rounded-xl space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold">∃</span>
                                    <div>
                                        <p className="font-bold">Cuantificador Existencial</p>
                                        <p className="text-xs text-cyan-200">"Existe al menos un..."</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold">∀</span>
                                    <div>
                                        <p className="font-bold">Cuantificador Universal</p>
                                        <p className="text-xs text-cyan-200">"Para todo..."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Ejemplos Detallados */}
                <section id="ejemplos" className="scroll-mt-10 space-y-8">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <FileCode2 className="text-cyan-600" /> Ejemplos de Consultas
                    </h2>
                    <div className="space-y-6">
                        <ExampleBox
                            title="1. Selección de empleados de un departamento específico"
                            query="{t | empleado(t) and t.dno = 5}"
                            desc="Obtiene todas las tuplas de empleados que trabajan en el departamento 5."
                        />
                        <ExampleBox
                            title="2. Proyección (Nombre y Apellido)"
                            query="{t.nombre, t.apellido | empleado(t) and t.salario > 3000}"
                            desc="Solo muestra los atributos nombre y apellido de los empleados con salario mayor a 3000."
                        />
                        <ExampleBox
                            title="3. Join entre Empleado y Departamento"
                            query="{e.nombre, d.nombreD | empleado(e) and dpto(d) and e.dno = d.nrodpto}"
                            desc="Combina tuplas donde el número de departamento en empleado coincida con el de la tabla departamento."
                        />
                        <ExampleBox
                            title="4. Uso de cuantificador existencial"
                            query="{e.nombre | empleado(e) and (∃ d)(dependiente(d) and e.codemp = d.ecodemp)}"
                            desc="Nombres de empleados que tienen al menos un dependiente."
                        />
                    </div>
                </section>

                {/* 5. Seguridad */}
                <section id="seguridad" className="scroll-mt-10">
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-10">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-amber-800">
                            <AlertTriangle /> Seguridad de las Expresiones
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-amber-900 flex items-center gap-2">
                                    <ShieldCheck className="text-green-600" /> Expresiones Seguras
                                </h4>
                                <p className="text-sm text-amber-800">
                                    Son aquellas que garantizan resultados finitos. Todos los valores resultantes deben pertenecer al <strong>dominio de la expresión</strong> (valores que aparecen en las relaciones o como constantes).
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-red-700 flex items-center gap-2">
                                    <AlertTriangle className="text-red-600" /> Expresiones Inseguras
                                </h4>
                                <p className="text-sm text-red-800">
                                    Pueden generar resultados infinitos.
                                    <br />Ejemplo: <code className="bg-red-100 px-1">{'{ t | not(empleado(t)) }'}</code>
                                    <br />Esto pediría todas las tuplas del universo que NO son empleados.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-100 py-16 px-6 mt-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <Database size={20} className="text-cyan-600" /> Sistemas de Bases de Datos I
                        </h3>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Conferencia 6: Cálculo Relacional</p>
                    </div>
                    <div className="text-right">
                        <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-2">Bibliografía</h4>
                        <p className="text-xs text-slate-500">Elmasri & Navathe, Cap. 6 (Págs. 169-177)</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ExampleBox({ title, query, desc }: { title: string, query: string, desc: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-3">{title}</h4>
            <div className="bg-slate-50 p-4 rounded-lg font-mono text-cyan-700 text-sm mb-3 border-l-4 border-cyan-500">
                {query}
            </div>
            <p className="text-xs text-slate-500 italic">{desc}</p>
        </div>
    );
}
import React from 'react';
import Link from 'next/link';
import {
    Calculator,
    Filter,
    LayoutList,
    Combine,
    Files,
    MinusSquare,
    ChevronRight,
    Database,
    Info,
    Zap,
    Split,
    Table as TableIcon,
    ArrowLeft
} from 'lucide-react';

export default function BDConference5Page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-purple-900 dark:bg-purple-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-purple-300 dark:text-purple-400 hover:text-purple-100 dark:hover:text-purple-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-purple-300 font-bold tracking-widest uppercase mb-4">Conferencia 5</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Dinámica del Modelo Relacional
                    </h1>
                    <p className="text-2xl text-purple-100 font-light">
                        Álgebra Relacional y Lenguajes de Consulta
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-purple-600 dark:border-purple-400 inline-block mb-8">Sumario Detallado</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "lenguajes", text: "Lenguajes Relacionales (Procedimentales vs No Procedimentales)" },
                            { id: "seleccion", text: "Operación de Selección (Condiciones y Predicados)" },
                            { id: "proyeccion", text: "Operación de Proyección (Eliminación de Duplicados)" },
                            { id: "conjuntos", text: "Operaciones de Conjuntos y Compatibilidad" },
                            { id: "acople", text: "Acople Natural (Join) y Producto Cartesiano" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300">{item.text}</span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-purple-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* 1. Lenguajes Relacionales */}
                <section id="lenguajes" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Calculator className="text-purple-600" /> Lenguajes Relacionales
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Un lenguaje de consulta es aquel en el que el usuario solicita información de la base de datos. Estos se categorizan según su nivel de abstracción:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-purple-600">
                            <h3 className="text-xl font-bold mb-4 text-purple-900">Procedimentales</h3>
                            <p className="text-sm text-slate-600 mb-4">
                                El usuario instruye al sistema para que lleve a cabo una serie de operaciones en la base de datos para calcular el resultado deseado.
                            </p>
                            <div className="text-sm font-semibold text-purple-700">Ejemplo: Álgebra Relacional</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-indigo-600">
                            <h3 className="text-xl font-bold mb-4 text-indigo-900">No Procedimentales</h3>
                            <p className="text-sm text-slate-600 mb-4">
                                El usuario describe la información deseada sin dictar los pasos específicos para obtener esa información.
                            </p>
                            <div className="text-sm font-semibold text-indigo-700">Ejemplo: Cálculo Relacional</div>
                        </div>
                    </div>
                </section>

                {/* 2. Selección */}
                <section id="seleccion" className="scroll-mt-10 space-y-6">
                    <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-purple-400">
                            <Filter /> Operación de Selección (σ)
                        </h2>
                        <div className="space-y-4">
                            <p className="text-slate-300">
                                Selecciona tuplas que satisfacen un predicado determinado. Se utiliza una proposición lógica (fórmula) sobre los atributos de la relación.
                            </p>
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <div className="text-purple-300 font-mono mb-2">Sintaxis: σ<sub>predicado</sub> (R)</div>
                                <div className="text-xs text-slate-400">
                                    Operadores permitidos: =, ≠, &lt;, ≤, &gt;, ≥, ∧ (y), ∨ (o), ¬ (no).
                                </div>
                            </div>
                            <p className="text-sm italic text-purple-200">
                                Resultado: Una relación con el mismo esquema que R, pero solo con las filas que cumplen la condición.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Proyección */}
                <section id="proyeccion" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <LayoutList className="text-purple-600" /> Operación de Proyección (π)
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-purple-600">
                        <p className="text-slate-600 mb-6">
                            Permite seleccionar ciertas columnas de una relación y descartar las demás. Dado que las relaciones son conjuntos, la proyección <strong>elimina automáticamente las filas duplicadas</strong>.
                        </p>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <div className="text-purple-800 font-mono mb-2 text-lg text-center">π<sub>A1, A2, ..., Ak</sub> (R)</div>
                            <p className="text-xs text-center text-purple-600 italic">Donde A1, A2 son nombres de atributos de la relación R.</p>
                        </div>
                    </div>
                </section>

                {/* 4. Operaciones de Conjuntos */}
                <section id="conjuntos" className="scroll-mt-10 space-y-8">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Combine className="text-purple-600" /> Operaciones de Conjuntos
                    </h2>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                        <p className="text-sm text-amber-800 font-bold">Requisito de Compatibilidad:</p>
                        <p className="text-xs text-amber-700">
                            Para Unión, Intersección y Diferencia, las relaciones deben tener el mismo grado (número de atributos) y los dominios de los atributos correspondientes deben ser iguales.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold flex items-center gap-2 mb-2"><span className="text-purple-600 text-xl">∪</span> Unión</h4>
                            <p className="text-sm text-slate-600">Incluye todas las tuplas que están en R, en S o en ambas. Elimina duplicados.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold flex items-center gap-2 mb-2"><span className="text-purple-600 text-xl">-</span> Diferencia</h4>
                            <p className="text-sm text-slate-600">Tuplas que están en R pero NO en S.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold flex items-center gap-2 mb-2"><span className="text-purple-600 text-xl">∩</span> Intersección</h4>
                            <p className="text-sm text-slate-600">Tuplas que aparecen en ambas relaciones simultáneamente.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold flex items-center gap-2 mb-2"><span className="text-purple-600 text-xl">x</span> Producto Cartesiano</h4>
                            <p className="text-sm text-slate-600">Combina cada tupla de R con cada tupla de S. Si R tiene <i>n</i> filas y S tiene <i>m</i>, el resultado tiene <i>n * m</i> filas.</p>
                        </div>
                    </div>
                </section>

                {/* 5. Acople Natural */}
                <section id="acople" className="scroll-mt-10 space-y-8">
                    <div className="flex items-center gap-4">
                        <Split className="text-purple-600" size={40} />
                        <h2 className="text-3xl font-bold text-slate-800">Acople Natural (JOIN)</h2>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-purple-600">
                        <p className="text-slate-600 mb-6">
                            Es una operación binaria que permite combinar selecciones y productos cartesianos en una sola operación más eficiente.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-purple-800 uppercase text-xs tracking-widest">Características Clave</h4>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <Zap size={16} className="text-purple-500 mt-1 shrink-0" />
                                        <span>Solo considera combinaciones de tuplas que tienen el mismo valor en los atributos comunes.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Zap size={16} className="text-purple-500 mt-1 shrink-0" />
                                        <span><strong>Eliminación de duplicados:</strong> El atributo común aparece una sola vez en el resultado.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-purple-300">
                                <h4 className="font-bold text-xs text-slate-400 mb-4 uppercase">Propiedades Matemáticas</h4>
                                <div className="space-y-2 text-xs font-mono text-purple-700">
                                    <p>• R ⋈ S = S ⋈ R (Conmutativo)</p>
                                    <p>• (R ⋈ S) ⋈ T = R ⋈ (S ⋈ T) (Asociativo)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Bibliografía y Cierre */}
            <footer className="bg-slate-100 py-16 px-6 mt-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Database size={20} className="text-purple-600" /> Dinámica de Datos
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                            "El álgebra relacional es la base teórica que permite entender cómo SQL procesa internamente las consultas mediante la manipulación de conjuntos."
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <Info size={14} /> Datos de la Conferencia
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">Nombre: Dinámica del Modelo Relacional</p>
                        <p className="text-xs text-slate-500 font-medium">Temas: Selección, Proyección, Unión, Diferencia, Producto y Join.</p>
                        <p className="text-xs text-slate-500 font-medium">Autor: Ramiro Pérez Vázquez</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
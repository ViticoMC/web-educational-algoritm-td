import React from 'react';
import {
    Ruler,
    Database,
    AlertOctagon,
    ArrowRight,
    Layout,
    ChevronRight,
    Info,
    CheckCircle,
    Zap,
    Layers
} from 'lucide-react';

export default function BDConference9Page() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-rose-900 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-rose-300 font-bold tracking-widest uppercase mb-4">Conferencia 9</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Teoría del Diseño
                    </h1>
                    <p className="text-2xl text-rose-100 font-light">
                        Dependencias Funcionales y Normalización
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-rose-600 inline-block mb-8">Sumario de la Conferencia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "introduccion", text: "Introducción al Diseño Lógico" },
                            { id: "problemas", text: "Problemas de un Mal Diseño" },
                            { id: "dependencias", text: "Dependencias Funcionales (DF)" },
                            { id: "formas-normales", text: "Formas Normales (1FN, 2FN, 3FN, FNBC)" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-500 hover:bg-rose-50 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-rose-600 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-rose-700">{item.text}</span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-rose-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* 1. ¿Qué es la Teoría del Diseño? */}
                <section id="introduccion" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Ruler className="text-rose-600" /> Introducción
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-rose-600">
                        <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                            Es una técnica formal para organizar los datos dentro de un esquema relacional.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-rose-800 mb-2">Caso de Estudio: Suministradores</h4>
                            <p className="text-sm text-slate-600 italic">
                                Relación: Suministrador(s#, nombreS, ciudad, status, p#, producto, precio)
                            </p>
                            <p className="text-xs mt-2 text-slate-500">
                                Donde el status se establece de acuerdo a la ciudad del suministrador.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Problemas de un mal diseño */}
                <section id="problemas" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <AlertOctagon className="text-rose-600" /> Anomalías de Diseño
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Redundancia", desc: "Repetición innecesaria de datos (ej. repetir nombre y ciudad por cada producto)." },
                            { title: "Inconsistencia Potencial", desc: "Riesgo de actualizar un dato en una fila pero no en otras donde está repetido." },
                            { title: "Anomalía de Inserción", desc: "No poder insertar una ciudad/status si aún no hay productos suministrados." },
                            { title: "Anomalía de Eliminación", desc: "Al borrar el último producto de un suministrador, se pierde la información de su ubicación." }
                        ].map((prob, idx) => (
                            <div key={idx} className="p-4 bg-rose-50 border border-rose-100 rounded-lg">
                                <h4 className="font-bold text-rose-900 text-sm mb-1">{prob.title}</h4>
                                <p className="text-xs text-rose-700">{prob.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Dependencias Funcionales */}
                <section id="dependencias" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Zap className="text-rose-600" /> Dependencias Funcionales (DF)
                    </h2>
                    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                        <p className="text-rose-300 font-bold mb-4 italic">"Vínculo muchos a uno que va de un conjunto de atributos a otro en una relación."</p>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 font-mono text-center text-xl">
                            X → Y
                        </div>
                        <p className="mt-4 text-sm text-slate-400">
                            Si dos tuplas coinciden en los valores de X, deben coincidir en los valores de Y.
                        </p>
                        <div className="mt-6 space-y-2">
                            <h4 className="text-xs uppercase tracking-widest text-slate-500">Ejemplos del caso:</h4>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rose-500" /> s# → nombreS, ciudad</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rose-500" /> ciudad → status</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rose-500" /> s#, p# → precio</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Formas Normales */}
                <section id="formas-normales" className="scroll-mt-10 space-y-10">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Layers className="text-rose-600" /> Proceso de Normalización
                    </h2>

                    <div className="space-y-6">
                        {/* 1FN */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-rose-300">
                            <h3 className="font-bold text-xl mb-2">1FN: Primera Forma Normal</h3>
                            <p className="text-sm text-slate-600 italic mb-3">"Los dominios de los atributos deben ser atómicos (valores simples)."</p>
                            <div className="text-xs text-rose-600 font-bold">Estado: Cumplido por definición en el modelo relacional básico.</div>
                        </div>

                        {/* 2FN */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-rose-400">
                            <h3 className="font-bold text-xl mb-2">2FN: Segunda Forma Normal</h3>
                            <p className="text-sm text-slate-600 mb-3">Está en 1FN y cada atributo que no es parte de la llave depende de <strong>forma completa</strong> de la llave primaria.</p>
                            <div className="bg-rose-50 p-3 rounded text-xs text-rose-800">
                                <strong>Elimina:</strong> Dependencias parciales (donde un atributo depende solo de una parte de una llave compuesta).
                            </div>
                        </div>

                        {/* 3FN */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-rose-500">
                            <h3 className="font-bold text-xl mb-2">3FN: Tercera Forma Normal</h3>
                            <p className="text-sm text-slate-600 mb-3">Está en 2FN y los atributos que no forman parte de la llave proporcionan información <strong>solo acerca de la llave</strong>.</p>
                            <div className="bg-rose-50 p-3 rounded text-xs text-rose-800">
                                <strong>Elimina:</strong> Dependencias transitivas (ej. ciudad → status, cuando la llave es s#).
                            </div>
                        </div>

                        {/* FNBC */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-rose-600">
                            <h3 className="font-bold text-xl mb-2">FNBC: Forma Normal de Boyce-Codd</h3>
                            <p className="text-sm text-slate-600 mb-3">"Una relación está en FNBC si y solo si todo <strong>determinante</strong> es una clave candidata."</p>
                        </div>
                    </div>


                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-100 py-16 px-6 mt-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <Database size={20} className="text-rose-600" /> Teoría del Diseño Relacional
                        </h3>
                        <div className="text-xs text-slate-500 space-y-1">
                            <p>Historial de Formas Normales:</p>
                            <p>• 1FN, 2FN, 3FN: Codd (Primer modelo)</p>
                            <p>• FNBC: Boyce/Codd (1974)</p>
                            <p>• 4FN y 5FN: Fagin (1977-1979)</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-2">Bibliografía</h4>
                        <p className="text-xs text-slate-500">C. J. Date - Introducción a los Sistemas de Bases de Datos</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
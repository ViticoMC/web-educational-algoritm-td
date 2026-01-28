import React from 'react';
import Link from 'next/link';
import {
    Database,
    GitMerge,
    Boxes,
    UserPlus,
    Link2,
    ArrowRightLeft,
    ChevronRight,
    Info,
    Layers,
    Users,
    ArrowLeft
} from 'lucide-react';

export default function BDConference2Page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section - Portada */}
            <header className="bg-indigo-900 dark:bg-indigo-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-indigo-300 dark:text-indigo-400 hover:text-indigo-100 dark:hover:text-indigo-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-indigo-300 font-bold tracking-widest uppercase mb-4">Conferencia 2</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Modelo Entidad Interrelación Extendido
                    </h1>
                    <p className="text-2xl text-indigo-100 font-light">
                        Semántica Avanzada y Extensiones del Modelo E/R
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-indigo-600 dark:border-indigo-400 inline-block mb-8">Sumario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "cardinalidad", text: "Cardinalidad mínima y máxima" },
                            { id: "debiles", text: "Interrelaciones débiles (Existencia e ID)" },
                            { id: "jerarquias", text: "Generalización / Especialización" },
                            { id: "agregacion", text: "Agregación" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300">{item.text} </span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* 1. Cardinalidades Mínimas y Máximas */}
                <section id="cardinalidad" className="scroll-mt-10 space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-t-8 border-indigo-600 dark:border-indigo-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                            <ArrowRightLeft className="text-indigo-600 dark:text-indigo-400" /> Semántica de las Interrelaciones
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Número mínimo y máximo de ocurrencias de un tipo de entidad que pueden estar interrelacionadas con una ocurrencia de los otros tipos participantes.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-indigo-50 dark:bg-indigo-950 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-4 text-center">Notación Gráfica</h4>
                                <div className="flex justify-around items-center bg-white dark:bg-slate-800 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700 font-mono text-indigo-600 dark:text-indigo-400">
                                    <span>(0,1)</span>
                                    <span>(1,1)</span>
                                    <span>(0,N)</span>
                                    <span>(1,N)</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center bg-slate-800 dark:bg-slate-900 text-white p-6 rounded-xl border border-slate-700 dark:border-slate-800">
                                <p className="text-sm italic mb-2">Ejemplo de Requisito:</p>
                                <div className="flex items-center gap-4 text-center">
                                    <div className="flex-1 p-2 border border-slate-500 dark:border-slate-600 rounded text-xs uppercase">Empleado</div>
                                    <div className="text-indigo-400 dark:text-indigo-300 font-bold">Trabaja_en <br />(1,1) — (1,m)</div>
                                    <div className="flex-1 p-2 border border-slate-500 dark:border-slate-600 rounded text-xs uppercase">Depto</div>
                                </div>
                                <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">"Todos los empleados deben asignarse a un único departamento."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Interrelaciones Débiles */}
                <section id="debiles" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                        <Link2 className="text-indigo-600 dark:text-indigo-400" /> Interrelaciones Débiles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-indigo-700 dark:text-indigo-400 mb-3 underline decoration-indigo-200 dark:decoration-indigo-700">En Existencia</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Si la ocurrencia de la entidad regular desaparece, sus ocurrencias relacionadas en la entidad débil también desaparecen.
                            </p>
                            <div className="mt-4 text-xs font-semibold text-indigo-500 uppercase tracking-wider">Cardinalidad M-1</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-indigo-700 dark:text-indigo-400 mb-3 underline decoration-indigo-200 dark:decoration-indigo-700">En Identificación</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                La identidad se logra a través de la llave de la entidad fuerte + un atributo propio opcional.
                            </p>
                            <div className="mt-4 text-xs font-semibold text-indigo-500 uppercase tracking-wider">Dependencia total</div>
                        </div>
                    </div>
                </section>

                {/* 3. Generalización / Especialización */}
                <section id="jerarquias" className="scroll-mt-10 bg-slate-900 dark:bg-slate-950 text-white p-10 rounded-3xl shadow-2xl">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-indigo-300 dark:text-indigo-200">
                        <Layers className="text-indigo-400 dark:text-indigo-300" /> Jerarquías de Generalización
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-l-4 border-indigo-500 dark:border-indigo-400 pl-3 text-indigo-100 dark:text-indigo-200">Propiedades</h3>
                            <ul className="space-y-3 text-sm text-slate-300 dark:text-slate-400">
                                <li>• <strong>Herencia de Atributos:</strong> Todo atributo del supertipo lo es de los subtipos.</li>
                                <li>• <strong>Herencia de Relaciones:</strong> Las interrelaciones del supertipo afectan a todos los subtipos.</li>
                                <li>• <strong>Específicos:</strong> Los atributos propios se asocian solo al subtipo correspondiente.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 dark:bg-slate-800 p-6 rounded-xl border border-slate-700 dark:border-slate-600">
                            <h3 className="text-xl font-bold mb-4 text-indigo-400 dark:text-indigo-300">Clasificación</h3>
                            <div className="grid grid-cols-2 gap-4 text-xs text-center">
                                <div className="p-3 bg-slate-700 dark:bg-slate-600 rounded text-slate-200 dark:text-slate-300">Solapados vs Excluyentes</div>
                                <div className="p-3 bg-slate-700 dark:bg-slate-600 rounded text-slate-200 dark:text-slate-300">Total vs Parcial</div>
                            </div>
                            <p className="mt-4 text-xs text-slate-400 dark:text-slate-500 italic text-center">Representación común: (t, e) - Total y Excluyente </p>
                        </div>
                    </div>
                    <div className="border-t border-slate-700 dark:border-slate-600 pt-8 text-center">
                        <h4 className="text-indigo-300 dark:text-indigo-200 font-bold mb-4 uppercase text-sm tracking-widest">Caso de Estudio: Empleados </h4>
                        <div className="flex flex-col items-center">
                            <div className="p-3 border-2 border-indigo-500 dark:border-indigo-400 rounded min-w-[150px] text-white">EMPLEADO</div>
                            <div className="h-6 w-0.5 bg-indigo-500 dark:bg-indigo-400 my-2"></div>
                            <div className="flex gap-8">
                                <div className="p-2 border border-slate-500 dark:border-slate-400 rounded text-xs text-white">Técnico</div>
                                <div className="p-2 border border-slate-500 dark:border-slate-400 rounded text-xs text-white">No Técnico</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Agregación */}
                <section id="agregacion" className="scroll-mt-10 space-y-10">
                    <div className="flex items-center gap-4">
                        <Boxes className="text-indigo-600 dark:text-indigo-400" size={40} />
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Agregación</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-l-8 border-indigo-600 dark:border-indigo-500">
                        <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                            "Se forma un nuevo tipo de entidad compuesto por una interrelación y sus entidades participantes".
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-indigo-700 dark:text-indigo-400">¿Cuándo usarla? </h4>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li>• Para establecer una relación con otra relación previa.</li>
                                    <li>• Facilita la modelación sin sobrecargar el diagrama.</li>
                                    <li>• Se identifica con un nombre compuesto.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-dashed border-indigo-300 dark:border-indigo-700">
                                <h4 className="font-bold text-xs uppercase text-slate-400 dark:text-slate-500 mb-4">Ejemplo Práctico </h4>
                                <div className="text-sm space-y-2 text-center">
                                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-700">
                                        Matrimonio (Hombre + Mujer)
                                    </div>
                                    <div className="h-4 w-px bg-indigo-300 dark:bg-indigo-600 mx-auto"></div>
                                    <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                                        Fecha de Boda / Dirección
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Conclusiones / Footer */}
            <footer className="bg-slate-100 dark:bg-slate-900 py-16 px-6 mt-20 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <Database size={20} className="text-indigo-600 dark:text-indigo-400" /> Conclusiones
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Estas extensiones dan mayor riqueza expresiva al modelo. El diseño conceptual es un proceso iterativo que permite lograr el diseño correcto antes de pasar al diseño lógico.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                <Info size={14} /> Fuentes Usadas
                            </h3>
                            <div className="text-slate-500 dark:text-slate-400 space-y-1 text-xs">
                                <p>• Conferencia 2: Modelo Entidad Interrelación Extendido.</p>
                                <p>• Elaborado por: Beatriz Ramiro P.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ComponentCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow group">
            <div className="mb-4 p-3 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">{title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{text}</p>
        </div>
    );
}
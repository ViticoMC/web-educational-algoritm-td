"use client";

import React from 'react';
import Link from 'next/link';
import {
    GitMerge,
    Users,
    Boxes,
    ArrowDownZa,
    LinkIcon,
    CheckCircle2,
    AlertCircle,
    Shapes,
    ArrowLeft
} from 'lucide-react';

export default function MER_ExtendidoPage() {
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
                            Conferencia 2: Modelo Entidad Interrelación Extendido (EE/R)
                        </h1>
                        <p className="text-2xl text-blue-100 font-light">Extensiones para el diseño conceptual avanzado de bases de datos</p>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Sumario */}
                <nav className="mb-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-sm transition-colors duration-300">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                        <CheckCircle2 size={24} /> Sumario de la Sesión
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-700 dark:text-slate-300">
                        <p>• Semántica en las Interrelaciones</p>
                        <p>• Cardinalidad mínima y máxima</p>
                        <p>• Interrelaciones débiles (Existencia e Identificación)</p>
                        <p>• Jerarquías de Generalización / Especialización</p>
                        <p>• Agregación de entidades</p>
                    </div>
                </nav>

                {/* Caso de Estudio: Requisitos */}
                <section className="mb-12 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 dark:border-blue-700 p-6 rounded-r-xl transition-colors duration-300">
                    <h2 className="text-lg font-bold mb-2 uppercase text-blue-800 dark:text-blue-300">Nuevos Requisitos (Empresa de Software)</h2>
                    <ul className="space-y-2 italic text-slate-700 dark:text-slate-300">
                        <li>"Todos los empleados tienen que ser asignados a un único departamento."</li>
                        <li>"El personal técnico trabaja en proyectos; otros empleados realizan actividades distintas."</li>
                    </ul>
                </section>

                {/* 1. Semántica y Cardinalidades */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-600 dark:bg-blue-600 p-2 rounded-lg text-white">
                            <LinkIcon size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Semántica de Interrelaciones</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-700 p-6 rounded-xl shadow-md border mb-6 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Cardinalidades Mínimas y Máximas</h3>
                        <p className="mb-4 text-slate-700 dark:text-slate-300">Indican el número mínimo y máximo de ocurrencias de un tipo de entidad que pueden estar interrelacionadas con una ocurrencia de otro tipo.</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            {['(0,1)', '(1,1)', '(0,N)', '(1,N)'].map((card) => (
                                <span key={card} className="px-4 py-2 font-mono font-bold rounded-md border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100">
                                    {card}
                                </span>
                            ))}
                        </div>

                        <div className="border-2 border-slate-200 dark:border-blue-600 bg-slate-50 dark:bg-slate-800 rounded-lg p-6 flex items-center justify-around transition-colors duration-300">
                            <div className="text-center">
                                <div className="bg-white dark:bg-slate-700 border-2 border-blue-800 dark:border-blue-400 px-4 py-2 font-bold mb-1">EMPLEADO</div>
                                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">(1,m)</span>
                            </div>
                            <div className="h-[2px] bg-blue-400 dark:bg-blue-600 flex-grow mx-4 relative">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm italic text-slate-600 dark:text-slate-400">Trabaja_en</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-white dark:bg-slate-700 border-2 border-blue-800 dark:border-blue-400 px-4 py-2 font-bold mb-1">DEPARTAMENTO</div>
                                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">(1,1)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Interrelaciones Débiles */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-red-600 dark:bg-red-700 p-2 rounded-lg text-white">
                            <AlertCircle size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Interrelaciones Débiles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 border rounded-xl transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 underline text-red-700 dark:text-red-400">En Existencia</h3>
                            <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">Entre una entidad regular y una débil. Cardinalidad m-1 hacia la regular.</p>
                            <div className="p-3 rounded text-xs border bg-red-50 dark:bg-red-950 border-red-100 dark:border-red-800 text-red-900 dark:text-red-200">
                                <strong>Regla de Borrado:</strong> Si la ocurrencia regular desaparece, sus ocurrencias débiles relacionadas también se eliminan.
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 border rounded-xl transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 underline text-red-700 dark:text-red-400">En Identificación</h3>
                            <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">Es una relación débil en existencia donde la identificación propia es insuficiente.</p>
                            <div className="p-3 rounded text-xs font-mono bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-300">
                                ID = [Atributos Llave Fuerte] + [Atributo Propio Opcional]
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Jerarquías (Generalización / Especialización) */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-amber-600 dark:bg-amber-600 p-2 rounded-lg text-white">
                            <GitMerge size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Jerarquías (E/S)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-blue-950 dark:bg-blue-950 text-blue-100 dark:text-blue-100 rounded-lg transition-colors duration-300">
                            <h4 className="font-bold mb-1">Herencia de Atributos</h4>
                            <p className="text-xs opacity-90">Todo atributo del supertipo pertenece a los subtipos. Los comunes van arriba; los específicos abajo.</p>
                        </div>
                        <div className="p-4 bg-blue-900 dark:bg-blue-900 text-blue-100 dark:text-blue-100 rounded-lg transition-colors duration-300">
                            <h4 className="font-bold mb-1">Herencia de Relaciones</h4>
                            <p className="text-xs opacity-90">Las interrelaciones del supertipo afectan a todos los subtipos.</p>
                        </div>
                        <div className="p-4 bg-blue-800 dark:bg-blue-800 text-blue-100 dark:text-blue-100 rounded-lg transition-colors duration-300">
                            <h4 className="font-bold mb-1">Ocurrencias</h4>
                            <p className="text-xs opacity-90">Toda ocurrencia de un subtipo es ocurrencia del supertipo (pero no viceversa).</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl border-2 border-dashed bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 transition-colors duration-300">
                        <h3 className="text-center font-bold mb-8 uppercase tracking-widest text-sm text-slate-500 dark:text-slate-400">Ejemplo: Jerarquía Total y Excluyente (t,e)</h3>
                        <div className="flex flex-col items-center">
                            <div className="bg-white dark:bg-slate-800 border-2 border-slate-800 dark:border-blue-400 px-6 py-2 font-bold z-10">EMPLEADO</div>
                            <div className="w-[2px] h-8 bg-slate-800 dark:bg-blue-400"></div>
                            <div className="px-3 py-1 border-2 rounded-full bg-white dark:bg-slate-800 text-xs font-bold mb-8 italic border-slate-800 dark:border-blue-400 text-slate-800 dark:text-blue-300">t, e</div>
                            <div className="flex gap-16">
                                <div className="flex flex-col items-center">
                                    <div className="w-[2px] h-4 bg-slate-800 dark:bg-blue-400"></div>
                                    <div className="bg-white dark:bg-slate-800 border border-slate-800 dark:border-slate-600 px-4 py-1 text-sm">Técnico</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-[2px] h-4 bg-slate-800 dark:bg-blue-400"></div>
                                    <div className="bg-white dark:bg-slate-800 border border-slate-800 dark:border-slate-600 px-4 py-1 text-sm">No_Técnico</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Agregación */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-600 dark:bg-green-700 p-2 rounded-lg text-white">
                            <Boxes size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Agregación</h2>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 p-8 rounded-xl border shadow-sm transition-colors duration-300">
                        <p className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                            Permite modelar situaciones donde se desea establecer una interrelación con otra interrelación existente. Se trata a la interrelación y sus entidades participantes como un **nuevo tipo de entidad compuesta**.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 border p-4 rounded transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-4 uppercase text-slate-500 dark:text-slate-400">Ejemplo 1: Matrimonio</h4>
                                <div className="bg-white dark:bg-slate-700 border-blue-200 dark:border-blue-600 flex items-center justify-center p-4 border-2 rounded-lg relative transition-colors duration-300">
                                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">HOMBRE — Casado_con — MUJER</span>
                                    <div className="absolute inset-0 border-blue-400 dark:border-blue-500 border-2 border-dotted opacity-30"></div>
                                </div>
                                <p className="text-[10px] mt-2 text-center font-mono text-slate-400 dark:text-slate-500">Agregación: "Matrimonio"</p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 border p-4 rounded transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-4 uppercase text-slate-500 dark:text-slate-400">Ejemplo 2: Deportes</h4>
                                <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                                    <p>• <strong>Agregación:</strong> [Equipo — Compite_con — Juego]</p>
                                    <p>• <strong>Interrelación con:</strong> Arbitro (Participa)</p>
                                    <p>• <strong>Localización:</strong> Estadio, Fecha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusiones */}
                <footer className="mt-12 bg-slate-900 dark:bg-slate-900 text-slate-300 dark:text-slate-300 p-8 rounded-3xl transition-colors duration-300">
                    <h2 className="text-white dark:text-white text-2xl font-bold mb-4 flex items-center gap-2">
                        <ArrowDownZa className="text-amber-400 dark:text-amber-300" /> Conclusiones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-3">
                            <p>• Las extensiones del modelo EE/R proporcionan una mayor **riqueza expresiva** para modelar realidades complejas.</p>
                            <p>• El diseño conceptual es un **proceso iterativo** vital para la comunicación entre el diseñador y el cliente.</p>
                        </div>
                        <div className="bg-slate-800 dark:bg-slate-800 p-4 rounded-xl transition-colors duration-300">
                            <p className="text-amber-400 dark:text-amber-400 font-bold mb-1">Siguiente Etapa:</p>
                            <p>Obtención del **Diseño Lógico** de la Base de Datos.</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-800 dark:border-slate-800 text-center text-[10px] uppercase tracking-widest opacity-50">
                        Sistemas de Bases de Datos I - Conferencia 2 - Universidad de Ciencias Informáticas
                    </div>
                </footer>

            </div>
        </div>
    );
}
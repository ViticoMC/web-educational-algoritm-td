import React from 'react';
import Link from 'next/link';
import {
    Table2,
    Key,
    ShieldCheck,
    Layout,
    Database,
    ChevronRight,
    Info,
    Zap,
    Columns,
    ArrowLeft
} from 'lucide-react';

export default function BDConference3Page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-emerald-900 dark:bg-emerald-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-emerald-300 dark:text-emerald-400 hover:text-emerald-100 dark:hover:text-emerald-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-emerald-300 font-bold tracking-widest uppercase mb-4">Conferencia 3</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        El Modelo Relacional
                    </h1>
                    <p className="text-2xl text-emerald-100 font-light">
                        Estructuras, Claves y Restricciones de Integridad
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-emerald-600 dark:border-emerald-400 inline-block mb-8">Sumario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "estructura", text: "Estructura: Relaciones, Dominios y Atributos" },
                            { id: "claves", text: "Tipos de Claves (Primaria, Ajena)" },
                            { id: "integridad", text: "Restricciones de Integridad" },
                            { id: "operaciones", text: "Operaciones Especiales y Resumen" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-emerald-500 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300">{item.text}</span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* 1. Estructura del Modelo Relacional */}
                <section id="estructura" className="scroll-mt-10 space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-t-8 border-emerald-600 dark:border-emerald-500">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                            <Table2 className="text-emerald-600 dark:text-emerald-400" /> Conceptos de la Estructura
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                <h4 className="font-bold text-emerald-800 mb-2 underline">Relación</h4>
                                <p className="text-sm text-slate-600">Se visualiza como una tabla. Es un conjunto de n-tuplas que representan entidades o interrelaciones.</p>
                            </div>
                            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                <h4 className="font-bold text-emerald-800 mb-2 underline">Dominio</h4>
                                <p className="text-sm text-slate-600">Conjunto de valores atómicos del mismo tipo. Define los valores válidos para un atributo.</p>
                            </div>
                            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                <h4 className="font-bold text-emerald-800 mb-2 underline">Atributo</h4>
                                <p className="text-sm text-slate-600">Nombre que se le da a una columna dentro de una relación específica.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Claves */}
                <section id="claves" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                        <Key className="text-emerald-600 dark:text-emerald-400" /> Identificación y Relación (Claves)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 dark:bg-slate-900 text-white p-8 rounded-xl shadow-lg border border-slate-700 dark:border-slate-800">
                            <h3 className="text-xl font-bold mb-4 text-emerald-400 dark:text-emerald-300">Clave Primaria (PK)</h3>
                            <p className="text-sm text-slate-300 dark:text-slate-400 leading-relaxed">
                                Es el atributo o conjunto de atributos que identifica de forma única a cada tupla en la relación. No puede contener valores nulos.
                            </p>
                            <div className="mt-6 p-3 bg-slate-700 dark:bg-slate-800 rounded border-l-4 border-emerald-500 dark:border-emerald-400 font-mono text-xs text-slate-100">
                                R(<u>ID_EMPLEADO</u>, Nombre, Cargo)
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">Clave Ajena (FK)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Atributo en una relación que es clave primaria en otra. Se utiliza para establecer el vínculo lógico entre las tablas.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400 italic">
                                <li>• Debe coincidir en dominio con la PK referenciada.</li>
                                <li>• Soporta la integridad referencial.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. Restricciones de Integridad */}
                <section id="integridad" className="scroll-mt-10">
                    <div className="bg-emerald-950 dark:bg-emerald-950 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-emerald-900 dark:border-emerald-800">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck size={120} />
                        </div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-emerald-300 dark:text-emerald-200">
                            <ShieldCheck className="text-emerald-400 dark:text-emerald-300" /> Reglas de Integridad
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-6">
                                <div className="bg-emerald-900/50 dark:bg-emerald-900/40 p-6 rounded-xl border border-emerald-700 dark:border-emerald-700">
                                    <h4 className="text-emerald-300 dark:text-emerald-200 font-bold mb-2">Integridad de Entidad</h4>
                                    <p className="text-sm text-emerald-50 dark:text-emerald-100">Ningún componente de la clave primaria de una relación base puede aceptar valores nulos.</p>
                                </div>
                                <div className="bg-emerald-900/50 dark:bg-emerald-900/40 p-6 rounded-xl border border-emerald-700 dark:border-emerald-700">
                                    <h4 className="text-emerald-300 dark:text-emerald-200 font-bold mb-2">Integridad Referencial</h4>
                                    <p className="text-sm text-emerald-50 dark:text-emerald-100">La base de datos no debe contener valores de clave ajena sin concordancia, excepto valores nulos si se permite.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center bg-white/10 dark:bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/20 dark:border-white/10">
                                <h4 className="font-bold text-emerald-200 dark:text-emerald-300 mb-4 flex items-center gap-2">
                                    <Zap size={16} /> Restricciones de Usuario
                                </h4>
                                <ul className="text-sm space-y-3 text-emerald-100 dark:text-emerald-200">
                                    <li>• Reglas específicas del negocio.</li>
                                    <li>• Definición de rangos y formatos.</li>
                                    <li>• Control de valores por defecto.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Resumen y Operaciones */}
                <section id="operaciones" className="scroll-mt-10 space-y-10">
                    <div className="flex items-center gap-4">
                        <Layout className="text-emerald-600 dark:text-emerald-400" size={40} />
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Resumen del Esquema</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-l-8 border-emerald-600 dark:border-emerald-500">
                            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Esquema de Relación R</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-mono bg-slate-50 dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-700">
                                R(A: D, S)
                            </p>
                            <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400">
                                <li><strong>A:</strong> Lista de atributos.</li>
                                <li><strong>D:</strong> Dominios de los atributos.</li>
                                <li><strong>S:</strong> Restricciones de integridad.</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-l-8 border-emerald-400 dark:border-emerald-500">
                            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Operaciones ante Cambios</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Al actualizar o eliminar tuplas referenciadas, se pueden aplicar políticas como:
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['Restricción (No permitir)', 'Cascada', 'Poner a nulos'].map(op => (
                                    <span key={op} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold border border-emerald-200 dark:border-emerald-700">
                                        {op}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-100 dark:bg-slate-900 py-16 px-6 mt-20 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <Database size={20} className="text-emerald-600 dark:text-emerald-400" /> Modelo Relacional
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                El modelo relacional proporciona una forma sencilla pero potente de representar datos mediante tablas, permitiendo asegurar la consistencia mediante reglas matemáticas estrictas.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                <Info size={14} /> Referencias Académicas
                            </h3>
                            <div className="text-slate-500 dark:text-slate-400 space-y-1 text-xs">
                                <p>• Conferencia 3: El Modelo Relacional.</p>
                                <p>• Conceptos de Codd y Date (1990) sobre Dominios Compuestos.</p>
                                <p>• Arquitectura ANSI/SPARC de 1978.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
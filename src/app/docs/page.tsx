'use client';

import Link from 'next/link';
import { BookOpen, Database, Table2, ChevronRight, ArrowRightLeft, Calculator, SquareFunction } from 'lucide-react';

interface Conferencia {
    id: number;
    titulo: string;
    descripcion: string;
    icon: React.ReactNode;
    color: {
        bg: string;
        darkBg: string;
        border: string;
        darkBorder: string;
        text: string;
    };
}

const conferencias: Conferencia[] = [
    {
        id: 1,
        titulo: 'Introducción a las Bases de Datos',
        descripcion: 'Fundamentos del Modelo Entidad/Interrelación (E/R), sistemas de bases de datos y arquitectura ANSI/SPARC',
        icon: <Database className="w-12 h-12" />,
        color: {
            bg: 'bg-blue-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-blue-200',
            darkBorder: 'dark:border-blue-800',
            text: 'text-blue-600 dark:text-blue-400'
        }
    },
    {
        id: 2,
        titulo: 'Modelo Entidad Interrelación Extendido (EE/R)',
        descripcion: 'Semántica avanzada, cardinalidades, interrelaciones débiles y jerarquías de generalización/especialización',
        icon: <BookOpen className="w-12 h-12" />,
        color: {
            bg: 'bg-indigo-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-indigo-200',
            darkBorder: 'dark:border-indigo-800',
            text: 'text-indigo-600 dark:text-indigo-400'
        }
    },
    {
        id: 3,
        titulo: 'El Modelo Relacional',
        descripcion: 'Estructura de relaciones, dominios, atributos, tipos de claves y restricciones de integridad',
        icon: <Table2 className="w-12 h-12" />,
        color: {
            bg: 'bg-emerald-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-emerald-200',
            darkBorder: 'dark:border-emerald-800',
            text: 'text-emerald-600 dark:text-emerald-400'
        }
    },
    {
        id: 4,
        titulo: 'Transformación E/R a Relacional',
        descripcion: 'Reglas de conversión de entidades, interrelaciones M:M, 1:N y atributos al esquema relacional',
        icon: <ArrowRightLeft className="w-12 h-12" />,
        color: {
            bg: 'bg-orange-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-orange-200',
            darkBorder: 'dark:border-orange-800',
            text: 'text-orange-600 dark:text-orange-400'
        }
    },
    {
        id: 5,
        titulo: 'Dinámica del Modelo Relacional',
        descripcion: 'Álgebra Relacional: operaciones monádicas (selección, proyección) y operaciones de conjunto (unión, intersección)',
        icon: <Calculator className="w-12 h-12" />,
        color: {
            bg: 'bg-purple-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-purple-200',
            darkBorder: 'dark:border-purple-800',
            text: 'text-purple-600 dark:text-purple-400'
        }
    },
    {
        id: 6,
        titulo: 'Cálculo Relacional',
        descripcion: 'Lenguajes no procedimentales basados en lógica de predicados: cálculo de tuplas y dominios',
        icon: <SquareFunction className="w-12 h-12" />,
        color: {
            bg: 'bg-cyan-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-cyan-200',
            darkBorder: 'dark:border-cyan-800',
            text: 'text-cyan-600 dark:text-cyan-400'
        }
    },
    {
        id: 7,
        titulo: 'Teoría del Diseño',
        descripcion: 'Normalización de bases de datos: dependencias funcionales, problemas de mal diseño y anomalías',
        icon: <Database className="w-12 h-12" />,
        color: {
            bg: 'bg-rose-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-rose-200',
            darkBorder: 'dark:border-rose-800',
            text: 'text-rose-600 dark:text-rose-400'
        }
    },
    {
        id: 8,
        titulo: 'Propiedades de las DF',
        descripcion: 'Clausura de atributos, equivalencia de dependencias y cubrimiento minimal',
        icon: <Table2 className="w-12 h-12" />,
        color: {
            bg: 'bg-teal-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-teal-200',
            darkBorder: 'dark:border-teal-800',
            text: 'text-teal-600 dark:text-teal-400'
        }
    },
    {
        id: 9,
        titulo: 'Descomposición de Relaciones',
        descripcion: 'Propiedades de un diseño lógico correcto: acople sin pérdida y preservación de dependencias funcionales',
        icon: <BookOpen className="w-12 h-12" />,
        color: {
            bg: 'bg-amber-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-amber-200',
            darkBorder: 'dark:border-amber-800',
            text: 'text-amber-600 dark:text-amber-400'
        }
    },
    {
        id: 10,
        titulo: 'SQL Estándar (DML)',
        descripcion: 'Dominio total de consultas simples: sentencias SELECT, INSERT, UPDATE, DELETE y tipos de datos SQL',
        icon: <Calculator className="w-12 h-12" />,
        color: {
            bg: 'bg-pink-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-pink-200',
            darkBorder: 'dark:border-pink-800',
            text: 'text-pink-600 dark:text-pink-400'
        }
    },
    {
        id: 11,
        titulo: 'SQL Avanzado (DML)',
        descripcion: 'Ordenamiento de resultados (ORDER BY), funciones de agregación (SUM, AVG, MIN, MAX, COUNT) y agrupamiento (GROUP BY, HAVING)',
        icon: <SquareFunction className="w-12 h-12" />,
        color: {
            bg: 'bg-violet-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-violet-200',
            darkBorder: 'dark:border-violet-800',
            text: 'text-violet-600 dark:text-violet-400'
        }
    },
    {
        id: 12,
        titulo: 'Consultas Multitablas',
        descripcion: 'Uniones de tablas (JOINs), subconsultas no correlacionadas y subconsultas correlacionadas',
        icon: <ArrowRightLeft className="w-12 h-12" />,
        color: {
            bg: 'bg-lime-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-lime-200',
            darkBorder: 'dark:border-lime-800',
            text: 'text-lime-600 dark:text-lime-400'
        }
    },
    {
        id: 13,
        titulo: 'Modificación y Vistas en SQL',
        descripcion: 'Actualización de datos (INSERT, UPDATE, DELETE), creación de vistas (CREATE VIEW) y seguridad lógica',
        icon: <Database className="w-12 h-12" />,
        color: {
            bg: 'bg-sky-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-sky-200',
            darkBorder: 'dark:border-sky-800',
            text: 'text-sky-600 dark:text-sky-400'
        }
    },
    {
        id: 14,
        titulo: 'Vistas y Seguridad',
        descripcion: 'Mecanismos de protección, seguridad física y lógica, autorización (GRANT/REVOKE) y control de acceso',
        icon: <BookOpen className="w-12 h-12" />,
        color: {
            bg: 'bg-fuchsia-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-fuchsia-200',
            darkBorder: 'dark:border-fuchsia-800',
            text: 'text-fuchsia-600 dark:text-fuchsia-400'
        }
    }
];

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white py-16 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-10 h-10" />
                        <h2 className="text-sm font-bold tracking-widest uppercase text-blue-100">Documentación</h2>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Conferencias y Recursos
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl">
                        Explora nuestras conferencias sobre bases de datos, modelos de datos y conceptos fundamentales para el diseño de sistemas de información.
                    </p>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-5xl mx-auto px-6 py-12">
                {/* SECCIÓN 1: Fundamentos del Diseño Conceptual (Conferencias 1-6) */}
                <section id="fundamentos-conceptual" className="mb-16 scroll-mt-20">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Fundamentos del Diseño Conceptual
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Aprende los conceptos fundamentales de bases de datos, desde el modelo E/R hasta el Álgebra Relacional
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conferencias.slice(0, 6).map((conf) => (
                            <Link
                                key={conf.id}
                                href={`/docs/conferencias/${conf.id}`}
                                className="group"
                            >
                                <div className={`h-full ${conf.color.bg} ${conf.color.darkBg} rounded-xl border-2 ${conf.color.border} ${conf.color.darkBorder} p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer`}>
                                    {/* Icon */}
                                    <div className={`${conf.color.text} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                        {conf.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {conf.titulo}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                                        {conf.descripcion}
                                    </p>

                                    {/* Footer con numero de conferencia */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <span className={`text-xs font-semibold ${conf.color.text}`}>
                                            Conferencia {conf.id}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1 duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* SECCIÓN 2: Normalización y Diseño Lógico (Conferencias 7-9) */}
                <section id="normalizacion-diseno" className="mb-16 scroll-mt-20">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Normalización y Diseño Lógico
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Optimiza tu esquema relacional con teoría de dependencias funcionales y descomposición de relaciones
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conferencias.slice(6, 9).map((conf) => (
                            <Link
                                key={conf.id}
                                href={`/docs/conferencias/${conf.id}`}
                                className="group"
                            >
                                <div className={`h-full ${conf.color.bg} ${conf.color.darkBg} rounded-xl border-2 ${conf.color.border} ${conf.color.darkBorder} p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer`}>
                                    {/* Icon */}
                                    <div className={`${conf.color.text} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                        {conf.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {conf.titulo}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                                        {conf.descripcion}
                                    </p>

                                    {/* Footer con numero de conferencia */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <span className={`text-xs font-semibold ${conf.color.text}`}>
                                            Conferencia {conf.id}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1 duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* SECCIÓN 3: Lenguaje SQL Práctico (Conferencias 10-14) */}
                <section id="sql-practico" className="mb-12 scroll-mt-20">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Lenguaje SQL Práctico
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Domina SQL desde consultas básicas hasta consultas complejas, vistas y seguridad en bases de datos
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conferencias.slice(9, 14).map((conf) => (
                            <Link
                                key={conf.id}
                                href={`/docs/conferencias/${conf.id}`}
                                className="group"
                            >
                                <div className={`h-full ${conf.color.bg} ${conf.color.darkBg} rounded-xl border-2 ${conf.color.border} ${conf.color.darkBorder} p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer`}>
                                    {/* Icon */}
                                    <div className={`${conf.color.text} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                        {conf.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {conf.titulo}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                                        {conf.descripcion}
                                    </p>

                                    {/* Footer con numero de conferencia */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <span className={`text-xs font-semibold ${conf.color.text}`}>
                                            Conferencia {conf.id}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1 duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Info Section */}
                {/* <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="text-blue-600 dark:text-blue-400">💡</span>
                        ¿Cómo usar esta documentación?
                    </h2>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                        <li className="flex gap-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                            <span>Selecciona una conferencia de arriba para acceder a su contenido completo</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                            <span>Usa el sidebar de navegación para moverte entre diferentes secciones</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                            <span>Las conferencias están organizadas de forma progresiva, comienza por la 1</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
                            <span>Puedes cambiar entre modo claro y oscuro usando el toggle en el sidebar</span>
                        </li>
                    </ul>
                </div> */}
            </main>
        </div>
    );
}

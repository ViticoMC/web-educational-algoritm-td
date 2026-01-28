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
        titulo: 'Introducción a Bases de Datos',
        descripcion: 'Fundamentos del Modelo Entidad-Relación y conceptos básicos de diseño de bases de datos',
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
        titulo: 'Modelo Entidad Interrelación Extendido',
        descripcion: 'Semántica Avanzada y Extensiones del Modelo E/R',
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
        descripcion: 'Estructuras, Claves y Restricciones de Integridad',
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
        descripcion: 'Reglas de transformación del Diagrama E/R al Esquema Relacional',
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
        descripcion: 'Álgebra Relacional y Lenguajes de Consulta',
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
        descripcion: 'Lenguajes No Procedimentales: Tuplas y Dominios',
        icon: <SquareFunction className="w-12 h-12" />,
        color: {
            bg: 'bg-cyan-50',
            darkBg: 'dark:bg-slate-800',
            border: 'border-cyan-200',
            darkBorder: 'dark:border-cyan-800',
            text: 'text-cyan-600 dark:text-cyan-400'
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
                {/* Grid de Conferencias */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {conferencias.map((conf) => (
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

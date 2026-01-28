import React from 'react';
import Link from 'next/link';
import {
    ArrowRightLeft,
    Table2,
    Layers,
    GitBranch,
    Database,
    ChevronRight,
    Info,
    CheckCircle2,
    FileText,
    ArrowLeft
} from 'lucide-react';

export default function BDConference4Page() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-orange-900 dark:bg-orange-950 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link href="/docs" className="inline-flex items-center gap-2 text-orange-300 dark:text-orange-400 hover:text-orange-100 dark:hover:text-orange-200 transition-colors mb-6">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <h2 className="text-orange-300 font-bold tracking-widest uppercase mb-4">Conferencia 4</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Transformación E/R a Relacional
                    </h1>
                    <p className="text-2xl text-orange-100 font-light">
                        Reglas de transformación del Diagrama E/R al Esquema Relacional
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario con Anchors */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-orange-600 dark:border-orange-400 inline-block mb-8">Sumario de Reglas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "reglas-basicas", text: "Reglas del Modelo Básico (1 a 5)" },
                            { id: "regla-6", text: "Regla 6: Interrelaciones Débiles" },
                            { id: "regla-7", text: "Regla 7: Jerarquías" },
                            { id: "regla-8", text: "Regla 8: Agregación" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border-l-4 border-orange-500 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300">{item.text}</span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* Reglas del Modelo Básico */}
                <section id="reglas-basicas" className="scroll-mt-10 space-y-8">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                        <CheckCircle2 className="text-orange-600" /> Reglas del Modelo Básico
                    </h2>

                    <div className="space-y-4">
                        <RuleCard
                            number="1"
                            title="Transformación de Entidades Regulares"
                            content="Cada tipo de entidad se transforma en una relación (tabla). Los atributos de la entidad son los atributos de la relación y la clave primaria de la entidad es la clave primaria de la relación."
                        />
                        <RuleCard
                            number="2"
                            title="Transformación de Interrelaciones N:M"
                            content="Se crea una relación cuya clave primaria es la concatenación de las claves primarias de las entidades participantes. Incluye también los atributos propios de la interrelación."
                        />
                        <RuleCard
                            number="3"
                            title="Transformación de Interrelaciones 1:N"
                            content="Se propaga la clave primaria de la entidad del lado '1' a la relación que representa la entidad del lado 'N', actuando como clave ajena. Los atributos de la interrelación se llevan también al lado 'N'."
                        />
                        <RuleCard
                            number="4"
                            title="Transformación de Interrelaciones 1:1"
                            content="Si la participación es obligatoria en ambos lados, se pueden fusionar en una sola relación. Si no, se propaga la clave de una entidad a otra como clave ajena (preferiblemente hacia el lado de participación total)."
                        />
                        <RuleCard
                            number="5"
                            title="Transformación de Interrelaciones N-arias"
                            content="Se crea una nueva relación cuya clave primaria es la concatenación de las claves de todas las entidades participantes (grado > 2)."
                        />
                    </div>
                </section>

                {/* Regla 6: Débiles */}
                <section id="regla-6" className="scroll-mt-10">
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-orange-500">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">6</span>
                            <h2 className="text-2xl font-bold">Transformación de Interrelaciones Débiles</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            La entidad débil se transforma en una relación cuya clave primaria está compuesta por la clave de la entidad regular (fuerte) de la que depende, más el discriminante o clave parcial de la propia entidad débil.
                        </p>
                    </div>
                </section>

                {/* Regla 7: Jerarquías */}
                <section id="regla-7" className="scroll-mt-10 bg-slate-800 text-white p-10 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="bg-orange-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold">7</span>
                        <h2 className="text-3xl font-bold">Transformación de Jerarquías</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 bg-slate-700 rounded-xl border border-slate-600 hover:border-orange-400 transition-colors">
                            <h4 className="font-bold text-orange-400 mb-3">Opción A</h4>
                            <p className="text-sm text-slate-300">Se crea una sola relación para toda la jerarquía que contiene todos los atributos de la superentidad y de los subtipos, más un atributo 'Tipo'.</p>
                        </div>
                        <div className="p-5 bg-slate-700 rounded-xl border border-slate-600 hover:border-orange-400 transition-colors">
                            <h4 className="font-bold text-orange-400 mb-3">Opción B</h4>
                            <p className="text-sm text-slate-300">Se crea una relación para el supertipo y una relación para cada subtipo. Las relaciones de los subtipos tienen como PK la del supertipo (que es también FK).</p>
                        </div>
                        <div className="p-5 bg-slate-700 rounded-xl border border-slate-600 hover:border-orange-400 transition-colors">
                            <h4 className="font-bold text-orange-400 mb-3">Opción C</h4>
                            <p className="text-sm text-slate-300">Se crean relaciones solo para los subtipos, donde cada una contiene los atributos propios más todos los atributos heredados del supertipo.</p>
                        </div>
                    </div>
                </section>

                {/* Regla 8: Agregación */}
                <section id="regla-8" className="scroll-mt-10">
                    <div className="bg-orange-50 p-8 rounded-2xl border-2 border-dashed border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">8</span>
                            <h2 className="text-2xl font-bold text-orange-900">Transformación de Agregaciones</h2>
                        </div>
                        <p className="text-orange-800 leading-relaxed">
                            La interrelación que ha sido agregada se trata como una entidad normal para efectos de la siguiente relación. Su 'clave primaria' a efectos de la transformación será la combinación de las claves de las entidades que formaban la relación original.
                        </p>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-100 py-16 px-6 mt-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-600 p-2 rounded-lg">
                            <Database className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">Sistemas de Bases de Datos I</p>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Fin de la Conferencia 4</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-400 italic">Basado en el material docente de Beatriz Ramiro Pérez</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function RuleCard({ number, title, content }: { number: string, title: string, content: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
                <span className="text-orange-500 font-black text-xl italic opacity-50">#{number}</span>
                <div>
                    <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{content}</p>
                </div>
            </div>
        </div>
    );
}
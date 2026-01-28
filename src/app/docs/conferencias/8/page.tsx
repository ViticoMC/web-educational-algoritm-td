import React from 'react';
import {
    Dna,
    Binary,
    CheckCircle,
    ListChecks,
    Database,
    ChevronRight,
    FunctionSquare,
    Zap,
    RefreshCcw
} from 'lucide-react';

export default function BDConference7Page() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-blue-900 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-blue-300 font-bold tracking-widest uppercase mb-4">Conferencia 7</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Clausura de Descriptores
                    </h1>
                    <p className="text-2xl text-blue-100 font-light">
                        Axiomas de Armstrong y Algoritmos de Dependencias Funcionales
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

                {/* Sumario */}
                <section id="sumario">
                    <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block mb-8">Sumario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "axiomas", text: "Axiomas de Armstrong y Reglas de Inferencia" },
                            { id: "clausura-f", text: "Clausura de un Conjunto de DFs (F+)" },
                            { id: "clausura-x", text: "Clausura de un Conjunto de Atributos (X+)" },
                            { id: "algoritmo", text: "Algoritmo de Cálculo y Aplicaciones" },
                            { id: "minimal", text: "Conjunto Irreducible o Minimal" }
                        ].map((item, i) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="group flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:bg-blue-50 transition-colors"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-blue-600 font-bold text-lg">{i + 1}.</span>
                                    <span className="font-medium group-hover:text-blue-700">{item.text}</span>
                                </span>
                                <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                        ))}
                    </div>
                </section>

                {/* 1. Axiomas de Armstrong */}
                <section id="axiomas" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Binary className="text-blue-600" /> Axiomas de Armstrong
                    </h2>
                    <p className="text-slate-600">
                        Reglas de inferencia para obtener nuevas dependencias a partir de un conjunto F:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                            <h4 className="font-bold text-blue-900 mb-4 italic">Reglas Básicas</h4>
                            <ul className="space-y-4 text-sm">
                                <li><strong>Reflexividad:</strong> Si Y &sube; X, entonces X &rarr; Y</li>
                                <li><strong>Aumento:</strong> Si X &rarr; Y, entonces XZ &rarr; YZ</li>
                                <li><strong>Transitividad:</strong> Si X &rarr; Y y Y &rarr; Z, entonces X &rarr; Z</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
                            <h4 className="font-bold text-indigo-900 mb-4 italic">Reglas Derivadas</h4>
                            <ul className="space-y-4 text-sm">
                                <li><strong>Unión:</strong> Si X &rarr; Y y X &rarr; Z, entonces X &rarr; YZ</li>
                                <li><strong>Descomposición:</strong> Si X &rarr; YZ, entonces X &rarr; Y y X &rarr; Z</li>
                                <li><strong>Pseudotransitividad:</strong> Si X &rarr; Y y WY &rarr; Z, entonces WX &rarr; Z</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. Clausura de F */}
                <section id="clausura-f" className="scroll-mt-10">
                    <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-400">
                            <FunctionSquare /> Clausura del Conjunto F<sup>+</sup>
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Es el conjunto de todas las dependencias funcionales que pueden inferirse de F.
                        </p>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                            <p className="text-sm text-blue-200">
                                Se denota como <strong>F<sup>+</sup></strong>. Su cálculo es de orden exponencial, por lo que es preferible usar la clausura de atributos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Clausura de Atributos */}
                <section id="clausura-x" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Dna className="text-blue-600" /> Clausura de Atributos X<sup>+</sup>
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-blue-600">
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Sea X un conjunto de atributos. El cierre <strong>X<sup>+</sup></strong> es el conjunto de atributos A tales que la dependencia X &rarr; A puede ser inferida de F.
                        </p>
                        <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 p-4 rounded-lg">
                            <Zap size={20} />
                            <span>Permite verificar si X es llave: Si X<sup>+</sup> contiene todos los atributos de la relación.</span>
                        </div>
                    </div>
                </section>

                {/* 4. Algoritmo */}
                <section id="algoritmo" className="scroll-mt-10 space-y-8">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <RefreshCcw className="text-blue-600" /> Algoritmo de Cálculo
                    </h2>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 font-mono text-sm">
                        <p className="text-blue-800 font-bold mb-2">Pasos para hallar X<sup>+</sup>:</p>
                        <div className="space-y-2">
                            <p>1. Inicializar: RESULTADO = X</p>
                            <p>2. Repetir hasta que no haya cambios:</p>
                            <p className="pl-6">Por cada dependencia Y &rarr; Z en F:</p>
                            <p className="pl-12">Si Y &sube; RESULTADO, entonces RESULTADO = RESULTADO &cup; Z</p>
                            <p>3. Retornar X<sup>+</sup> = RESULTADO</p>
                        </div>
                    </div>
                </section>

                {/* 5. Conjunto Minimal */}
                <section id="minimal" className="scroll-mt-10 space-y-8">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <ListChecks className="text-blue-600" /> Conjunto Irreducible (Minimal)
                    </h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span>Cada lado derecho de las dependencias funcionales posee un <strong>atributo único</strong>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span>No existen dependencias funcionales <strong>redundantes</strong> en el conjunto.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                                <span>No existen <strong>atributos extraños</strong> en los lados izquierdos de las dependencias.</span>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-100 py-12 px-6 mt-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto flex justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <Database size={16} /> Sistemas de Bases de Datos I
                    </div>
                    <div>Conferencia 7 Finalizada</div>
                </div>
            </footer>
        </div>
    );
}
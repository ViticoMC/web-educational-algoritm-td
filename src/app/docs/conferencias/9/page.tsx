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
    RefreshCcw,
    PlayCircle,
    Layers
} from 'lucide-react';

export default function BDConference7CompletePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
            {/* Hero Section */}
            <header className="bg-blue-900 text-white py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-blue-300 font-bold tracking-widest uppercase mb-4">Conferencia 7: Guía Práctica</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Algoritmos de Clausura y Cubrimiento
                    </h1>
                    <p className="text-2xl text-blue-100 font-light">
                        Axiomas de Armstrong y Optimización de Dependencias
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">

                {/* 1. Axiomas Rápidos */}
                <section id="axiomas" className="scroll-mt-10 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <Binary className="text-blue-600" /> Reglas de Inferencia
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <span className="text-xs font-bold text-blue-600 uppercase">Reflexividad</span>
                            <p className="text-sm font-mono mt-2">Si Y ⊆ X → X → Y</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <span className="text-xs font-bold text-blue-600 uppercase">Aumento</span>
                            <p className="text-sm font-mono mt-2">Si X → Y → XZ → YZ</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                            <span className="text-xs font-bold text-blue-600 uppercase">Transitividad</span>
                            <p className="text-sm font-mono mt-2">X → Y, Y → Z → X → Z</p>
                        </div>
                    </div>
                </section>

                {/* 2. EJEMPLO PASO A PASO: CIERRE DE ATRIBUTOS */}
                <section id="ejemplo-cierre" className="scroll-mt-10 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg text-white">
                            <PlayCircle size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">Ejemplo: Cálculo de X<sup>+</sup></h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="bg-slate-800 p-6 text-white">
                            <p className="text-sm text-slate-400 mb-2 italic">Caso de estudio:</p>
                            <p className="font-mono">Relación R(A, B, C, D, E)</p>
                            <p className="font-mono text-blue-400">F = {'{ A → B, B → C, D → E }'}</p>
                            <p className="mt-4 font-bold text-lg">Objetivo: Hallar A<sup>+</sup></p>
                        </div>

                        <div className="p-8 space-y-6 text-slate-700">
                            <div className="flex gap-4">
                                <div className="font-bold text-blue-600">Paso 1</div>
                                <div>
                                    <p className="font-bold">Inicialización</p>
                                    <p className="text-sm">X<sup>+</sup> = {'{ A }'} (Empezamos con el atributo dado).</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="font-bold text-blue-600">Paso 2</div>
                                <div>
                                    <p className="font-bold">Primera Iteración</p>
                                    <p className="text-sm italic">Revisamos F:</p>
                                    <ul className="text-sm mt-2 list-disc ml-4 space-y-1">
                                        <li>¿A → B? <span className="text-green-600 font-bold">SÍ</span>. Como A ⊆ {'{A}'}, agregamos B.</li>
                                        <li>X<sup>+</sup> = {'{ A, B }'}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="font-bold text-blue-600">Paso 3</div>
                                <div>
                                    <p className="font-bold">Segunda Iteración</p>
                                    <p className="text-sm italic">Revisamos F con el nuevo conjunto:</p>
                                    <ul className="text-sm mt-2 list-disc ml-4 space-y-1">
                                        <li>¿B → C? <span className="text-green-600 font-bold">SÍ</span>. Como B ⊆ {'{A, B}'}, agregamos C.</li>
                                        <li>¿D → E? <span className="text-red-600 font-bold">NO</span>. D no está en {'{A, B, C}'}.</li>
                                        <li>X<sup>+</sup> = {'{ A, B, C }'}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <p className="text-sm font-bold text-blue-800">Resultado Final: A<sup>+</sup> = {'{ A, B, C }'}</p>
                                <p className="text-xs text-blue-600 mt-1">Conclusión: A no es llave porque no conoce a D ni a E.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EJEMPLO PASO A PASO: CUBRIMIENTO MINIMAL */}
                <section id="ejemplo-minimal" className="scroll-mt-10 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                            <Layers size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">Ejemplo: Cubrimiento Minimal</h2>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-8 space-y-8">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                            <p className="text-xs font-bold text-slate-500 uppercase">Conjunto Inicial F:</p>
                            <p className="font-mono text-sm mt-1">F = {'{ A → BC, B → C, A → B, AB → C }'}</p>
                        </div>

                        {/* Fase A */}
                        <div className="space-y-3">
                            <h4 className="font-bold text-indigo-700 flex items-center gap-2">
                                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">A</span>
                                Descomposición de Lados Derechos
                            </h4>
                            <p className="text-sm text-slate-600">Separamos los atributos resultantes:</p>
                            <div className="bg-white p-3 rounded border border-slate-200 font-mono text-xs">
                                1. A → B, 2. A → C, 3. B → C, 4. A → B (Repetida), 5. AB → C
                            </div>
                        </div>

                        {/* Fase B */}
                        <div className="space-y-3">
                            <h4 className="font-bold text-indigo-700 flex items-center gap-2">
                                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">B</span>
                                Eliminar Atributos Extraños (Lado Izquierdo)
                            </h4>
                            <p className="text-sm text-slate-600">Analizamos AB → C. ¿Es B extraño?</p>
                            <ul className="text-xs bg-indigo-50 p-4 rounded-lg space-y-2">
                                <li>1. Calculamos A<sup>+</sup> (sin B) usando las otras reglas.</li>
                                <li>2. A<sup>+</sup> = {'{ A, B, C }'}.</li>
                                <li>3. <span className="font-bold">Resultado:</span> Como C ya sale del cierre de A, B es extraño. La regla se vuelve A → C.</li>
                            </ul>
                        </div>

                        {/* Fase C */}
                        <div className="space-y-3">
                            <h4 className="font-bold text-indigo-700 flex items-center gap-2">
                                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">C</span>
                                Eliminar Dependencias Redundantes
                            </h4>
                            <p className="text-sm text-slate-600">¿Es A → C redundante?</p>
                            <ul className="text-xs bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                                <li>1. Usamos el resto: {'{ A → B, B → C }'}.</li>
                                <li>2. Calculamos A<sup>+</sup> = {'{ A, B, C }'}.</li>
                                <li>3. <span className="font-bold text-green-600">¡SÍ!</span> Se puede borrar A → C porque se infiere de las otras.</li>
                            </ul>
                        </div>

                        <div className="bg-indigo-600 text-white p-6 rounded-xl text-center">
                            <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Resultado Final (Minimal)</p>
                            <p className="text-xl font-mono font-bold">E = {'{ A → B, B → C }'}</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-slate-100 py-12 px-6 mt-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto flex justify-between items-center text-xs text-slate-500">
                    <div className="flex items-center gap-2 uppercase tracking-tighter">
                        <Database size={16} /> Base de Datos I - Conferencia 7 (Final)
                    </div>
                    <p>Beatriz Ramiro Pérez</p>
                </div>
            </footer>
        </div>
    );
}
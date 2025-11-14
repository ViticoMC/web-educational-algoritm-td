
import { Atom, Brain } from "lucide-react"
import Link from "next/link"

export default function Nav() {
    return (
        <div className="flex  top-0 z-30 font-bold mb-4">
            <div
                className={`
          sticky top-0 min-w-screen  shadow-lg transition-all duration-300 ease-in-out  backdrop-blur-lg 
        h-[60px] min-h-[60px]`
                }
            >
                <div
                    className={`
            min-w-screen h-[60px] overflow-hidden transition-all duration-300
            `
                    }
                >
                    <div className="flex  h-full">
                        <div className="items-center flex justify-center gap-4 overflow-auto min-w-screen">
                            {/* Aqui van las opciones */}
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 rounded-2xl transition-all duration-200"
                            >
                                <Atom className="h-6 w-6" />
                                <span>Relaciones</span>
                            </Link>
                            <Link
                                href="/algoritmos"
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 rounded-2xl transition-all duration-200"
                            >
                                <Brain className="h-6 w-6" />
                                <span>Algoritmos</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

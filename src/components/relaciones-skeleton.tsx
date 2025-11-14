// components/RelacionesSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function RelacionesSkeleton() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Relaciones</h2>

      {[1, 2].map((_, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border space-y-3 shadow-sm w-full max-w-xs"
        >
          {/* Título */}
          <Skeleton className="h-5 w-24" />

          {/* Atributos */}
          <div className="space-y-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-12" />
          </div>

          {/* Botones */}
          <div className="space-y-2 pt-2">
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md bg-red-500/20" />
          </div>
        </div>
      ))}

      {/* Botón Agregar */}
      <Skeleton className="h-10 w-full max-w-xs rounded-md" />
    </div>
  );
}

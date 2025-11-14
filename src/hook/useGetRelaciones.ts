import { useQuery } from "@tanstack/react-query";
import { getRelaciones } from "@/utils/relaciones-actions";
import { Relacion } from "@/tipos/relacion";
import useRelacionStore from "@/store/relacion";
import { useEffect } from "react";

export function useGetRelaciones() {
  const { setRelaciones } = useRelacionStore();
  const {
    data: relaciones,
    isLoading,
    error,
    refetch,
  } = useQuery<Relacion[], Error>({
    queryKey: ["relaciones"],
    // pasar una función para que React Query la ejecute cuando corresponda
    queryFn: () => getRelaciones(),
    // evitar refetchs automáticos en foco/mount para reducir llamadas repetidas
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // mantener datos frescos durante 1 minuto
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    if (relaciones) {
      setRelaciones(relaciones);
    }
  }, [relaciones, setRelaciones]);

  // console.log(relaciones);

  return {
    relaciones,
    refetch,
    isLoading,
    error,
  };
}

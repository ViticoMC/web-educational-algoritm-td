import { useQuery } from "@tanstack/react-query";
import { getDF } from "@/utils/df-actions";
import { useEffect } from "react";
import useConjuntoDFStore from "@/store/conjuntos";

export function useGetConjuntosDF(id: number) {
  const { setConjuntoDF } = useConjuntoDFStore();

  const {
    data: conjuntosDF,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["conjuntos-df", id],
    queryFn: () => getDF(id),
  });

  useEffect(() => {
    if (conjuntosDF) {
      setConjuntoDF(conjuntosDF);
    }
  }, [conjuntosDF, setConjuntoDF]);

  return {
    conjuntosDF,
    isLoading,
    error,
    refetch,
  };
}

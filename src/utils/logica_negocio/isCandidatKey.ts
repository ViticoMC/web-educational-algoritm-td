import { DF } from "@/tipos/df";
import { aspirina } from "./aspirina";
import { Relacion } from "@/tipos/relacion";
import { obtenerSubconjuntos } from "./obtenerSubconjunto";

export function isCandidatClave({
  posibleClaveCAndidata,
  conjuntoDF,
  relacion,
}: {
  posibleClaveCAndidata: string[];
  conjuntoDF: DF[];
  relacion: Relacion;
}) {
  const clausura = aspirina({ df: posibleClaveCAndidata, conjuntoDF });

  if (!relacion.atributos.every((item) => clausura.includes(item))) {
    return {
      sucess: false,
      message: "No es clave candidata porque no cubre todos los atributos",
    };
  }
  const subconjuntos = obtenerSubconjuntos(posibleClaveCAndidata);
  for (const subconjunto of subconjuntos) {
    const clausuraSubconjunto = aspirina({ df: subconjunto, conjuntoDF });
    if (
      relacion.atributos.every((item) => clausuraSubconjunto.includes(item))
    ) {
      return {
        sucess: false,
        message:
          "No es clave candidata porque hay un menor subconjunto que cubre todos los atributos",
      };
    }
  }
  return {
    sucess: true,
    message: "Es clave candidata",
  };
}

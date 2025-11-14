import { DF } from "@/tipos/df";
import { aspirina } from "./aspirina";
import { obtenerSubconjuntos } from "./obtenerSubconjunto";
import { sonEquivalentes } from "./areEquivalentes";

export function getIrreducible(F: DF[]) {
  const result: DF[] = [];
  // step one separar lado derecho
  for (const dp of F) {
    if (dp.implicados.length > 1) {
      for (const separar of dp.implicados) {
        result.push({ implicantes: dp.implicantes, implicados: [separar] });
      }
    } else {
      result.push({ implicantes: dp.implicantes, implicados: dp.implicados });
    }
  }
  // step two buscar redundancias
  for (let i = 0; i < result.length; i++) {
    result[i] = searchRedundancias(F, result[i]);
  }

  // step trhe buscar df innecesarias
  for (let i = 0; i < result.length; i++) {
    const restSubConj = result.filter((_, j) => j !== i);
    if (sonEquivalentes(result, restSubConj)) {
      result.splice(i, 1);
    }
  }

  return result;
}

function searchRedundancias(F: DF[], f: DF) {
  const subconjuntos = obtenerSubconjuntos(f.implicantes);
  for (const subconjunto of subconjuntos) {
    const clausuraSubconjunto = aspirina({ df: subconjunto, conjuntoDF: F });
    if (f.implicados.every((item) => clausuraSubconjunto.includes(item))) {
      return searchRedundancias(F, {
        implicantes: subconjunto,
        implicados: f.implicados,
      });
    }
  }
  return f;
}

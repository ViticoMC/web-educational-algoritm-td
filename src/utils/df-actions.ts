import { ip } from "@/const/ip";
import { ConjuntoDF, DF } from "@/tipos/df";

export async function getDF(id: number) {
  const result = await fetch(`${ip}/dependencias_funcionales/${id}/`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();
  return data as ConjuntoDF[];
}

export async function deleteDF(id: number) {
  await fetch(`${ip}/dependencias_funcionales/${id}`, {
    method: "DELETE",
  });
}

export async function updateDF(
  id: number,
  nombre: string,
  implicantes: string[],
  implicados: string[]
) {
  await fetch(`${ip}/dependencias_funcionales/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, implicantes, implicados }),
  });
}

export async function insertConjuntoDF(nombre: string, df: DF[], id: number) {
  const result = await fetch(`${ip}/dependencias_funcionales/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, df, id }),
  });
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();
  return data as ConjuntoDF;
}

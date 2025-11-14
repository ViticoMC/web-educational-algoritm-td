import { ip } from "@/const/ip";
import { Relacion } from "@/tipos/relacion";

export async function getRelaciones() {
  const result = await fetch(`${ip}/relaciones`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();
  return data as Relacion[];
}

export async function deleteRelacion(id: number) {
  const result = await fetch(`${ip}/relaciones`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();
  return data as Relacion;
}

export async function insertRelacion(nombre: string, atributos: string[]) {
  const result = await fetch(`${ip}/relaciones`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, atributos }),
  });
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();
  return data as Relacion;
}

export async function updateRelacion(
  id: number,
  nombre: string,
  atributos: string[]
) {
  const result = await fetch(`${ip}/relaciones`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, nombre, atributos }),
  });
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();
  return data as Relacion;
}

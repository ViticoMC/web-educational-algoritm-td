// // src/lib/relaciones.ts
// import { ConjuntoDF, DF } from "@/tipos/df";
// import pool from "../lib/db";

// export async function getDF(id: number) {
//   const result = await pool.query("SELECT * FROM df WHERE conjuntodf_id = $1", [
//     id,
//   ]);
//   return result.rows;
// }

// export async function getConjuntDF(id: number) {
//   const RESULT_CONJUNT: ConjuntoDF[] = [];
//   const result = await pool.query(
//     "SELECT * FROM conjuntodf WHERE relacion_id = $1",
//     [id]
//   );
//   const conjuntos = result.rows;
//   for (const conjunto of conjuntos) {
//     const df = await getDF(conjunto.id);
//     RESULT_CONJUNT.push({
//       ...conjunto,
//       df,
//     });
//   }

//   return RESULT_CONJUNT;
// }

// export async function instertarDF(
//   implicantes: string[],
//   implicados: string[],
//   id: number
// ) {
//   const result = await pool.query(
//     "INSERT INTO df ( implicantes, implicados, conjuntodf_id) VALUES ($1, $2, $3) RETURNING *",
//     [implicantes, implicados, id]
//   );
//   return result.rows[0];
// }

// export async function deleteDF(id: number) {
//   await pool.query("DELETE from conjuntodf where id = $1", [id]);
// }
// export async function insertConjuntoDF(nombre: string, df: DF[], id: number) {
//   const result = await pool.query(
//     "INSERT INTO conjuntodf (nombre , relacion_id) VALUES ($1, $2) RETURNING *",
//     [nombre, id]
//   );

//   for (const item of df) {
//     instertarDF(item.implicantes, item.implicados, result.rows[0].id);
//   }

//   return result.rows[0];
// }

// src/lib/relaciones.ts
import { ConjuntoDF, DF } from "@/tipos/df";
import { supabase } from "../lib/supabase"; // Asegúrate de tener el cliente configurado

// Obtener todos los DF de un conjunto
export async function getDF(id: number) {
  const { data, error } = await supabase
    .from("df")
    .select("*")
    .eq("conjuntodf_id", id);

  if (error) throw error;
  return data;
}

// Obtener todos los conjuntos de un relacion_id con sus DF
export async function getConjuntDF(id: number) {
  const { data: conjuntos, error } = await supabase
    .from("conjuntodf")
    .select("*")
    .eq("relacion_id", id);

  if (error) throw error;

  const RESULT_CONJUNT: ConjuntoDF[] = [];

  for (const conjunto of conjuntos) {
    const df = await getDF(conjunto.id);
    RESULT_CONJUNT.push({
      ...conjunto,
      df,
    });
  }

  return RESULT_CONJUNT;
}

// Insertar un DF
export async function instertarDF(
  implicantes: string[],
  implicados: string[],
  id: number
) {
  const { data, error } = await supabase
    .from("df")
    .insert([{ implicantes, implicados, conjuntodf_id: id }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Eliminar un conjunto
export async function deleteDF(id: number) {
  const { error } = await supabase.from("conjuntodf").delete().eq("id", id);
  if (error) throw error;
}

// Insertar un conjunto con sus DF
export async function insertConjuntoDF(nombre: string, df: DF[], id: number) {
  // Insertar el conjunto
  const { data: conjuntoData, error: conjuntoError } = await supabase
    .from("conjuntodf")
    .insert([{ nombre, relacion_id: id }])
    .select()
    .single();

  if (conjuntoError) throw conjuntoError;

  // Insertar los DF relacionados
  for (const item of df) {
    await instertarDF(item.implicantes, item.implicados, conjuntoData.id);
  }

  return conjuntoData;
}

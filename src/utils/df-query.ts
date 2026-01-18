import { ConjuntoDF, DF } from "@/tipos/df";
import pool from "../lib/db";

// Obtener todos los DF de un conjunto
export async function getDF(id: number) {
  const result = await pool.query("SELECT * FROM df WHERE conjuntodf_id = $1", [
    id,
  ]);
  return result.rows;
}

// Obtener todos los conjuntos de una relación con sus DF
export async function getConjuntDF(id: number) {
  const RESULT_CONJUNT: ConjuntoDF[] = [];
  const result = await pool.query(
    "SELECT * FROM conjuntodf WHERE relacion_id = $1",
    [id],
  );
  const conjuntos = result.rows;
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
  id: number,
) {
  const result = await pool.query(
    "INSERT INTO df ( implicantes, implicados, conjuntodf_id) VALUES ($1, $2, $3) RETURNING *",
    [implicantes, implicados, id],
  );
  return result.rows[0];
}

// Eliminar un conjunto
export async function deleteDF(id: number) {
  await pool.query("DELETE from conjuntodf where id = $1", [id]);
}

// Insertar un conjunto con sus DF
export async function insertConjuntoDF(nombre: string, df: DF[], id: number) {
  const result = await pool.query(
    "INSERT INTO conjuntodf (nombre , relacion_id) VALUES ($1, $2) RETURNING *",
    [nombre, id],
  );

  for (const item of df) {
    await instertarDF(item.implicantes, item.implicados, result.rows[0].id);
  }

  return result.rows[0];
}

// // src/lib/relaciones.ts
// import pool from "../lib/db";

// export async function getRelaciones() {
//   const result = await pool.query("SELECT * FROM relacion");
//   return result.rows;
// }

// export async function insertRelacion(nombre: string, atributos: string[]) {
//   const result = await pool.query(
//     "INSERT INTO relacion (nombre, atributos) VALUES ($1, $2) RETURNING *",
//     [nombre, atributos]
//   );
//   return result.rows[0];
// }

// export async function deleteRelacion(id: number) {
//   await pool.query("DELETE from relacion where id = $1", [id]);
// }
// export async function updateRelacion(
//   id: number,
//   nombre: string,
//   atributos: string[]
// ) {
//   await pool.query(
//     "UPDATE relacion SET nombre = $1, atributos = $2 WHERE id = $3 RETURNING *",
//     [nombre, atributos, id]
//   );
// }

// src/lib/relaciones.ts
import { supabase } from "../lib/supabase"; // Asegúrate de tener tu cliente Supabase configurado

// Obtener todas las relaciones
export async function getRelaciones() {
  const { data, error } = await supabase.from("relacion").select("*");

  if (error) throw error;
  return data;
}

// Insertar una relación
export async function insertRelacion(nombre: string, atributos: string[]) {
  const { data, error } = await supabase
    .from("relacion")
    .insert([{ nombre, atributos }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Eliminar una relación
export async function deleteRelacion(id: number) {
  const { error } = await supabase.from("relacion").delete().eq("id", id);

  if (error) throw error;
}

// Actualizar una relación
export async function updateRelacion(
  id: number,
  nombre: string,
  atributos: string[]
) {
  const { data, error } = await supabase
    .from("relacion")
    .update({ nombre, atributos })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

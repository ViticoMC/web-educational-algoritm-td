import {
  deleteRelacion,
  getRelaciones,
  insertRelacion,
  updateRelacion,
} from "@/utils/relaciones-query";
import { NextResponse } from "next/server";

export async function GET() {
  const relaciones = await getRelaciones();

  return NextResponse.json(relaciones);
}

export async function POST(req: Request) {
  const { nombre, atributos } = await req.json();
  const result = await insertRelacion(nombre, atributos);
  return NextResponse.json(result);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await deleteRelacion(id);
  return NextResponse.json({ message: "Relación eliminada" });
}
export async function PUT(req: Request) {
  const { id, nombre, atributos } = await req.json();
  await updateRelacion(id, nombre, atributos);
  return NextResponse.json({ message: "Relación actualizada" });
}

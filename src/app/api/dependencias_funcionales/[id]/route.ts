import { deleteDF, getConjuntDF } from "@/utils/df-query";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const df = await getConjuntDF(Number(id));
  return NextResponse.json(df);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await deleteDF(Number(id));
  return NextResponse.json({ message: "Relación eliminada" });
}
// export async function PUT(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await context.params;
//   const { nombre, implicantes, implicados } = await req.json();
//   await updateDF(Number(id), nombre, implicantes, implicados);
//   return NextResponse.json({ message: "Relación actualizada" });
// }

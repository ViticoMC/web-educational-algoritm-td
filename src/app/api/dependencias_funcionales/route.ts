import { insertConjuntoDF } from "@/utils/df-query";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  await insertConjuntoDF(body.nombre, body.df, Number(body.id));

  return NextResponse.json({ message: "DF guardada" });
}

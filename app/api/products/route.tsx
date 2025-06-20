import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
interface Props {
  params: { id: number };
}
export async function GET(request: NextRequest) {
  // fetch data from db
  // return 404 if not found
  // else return data
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

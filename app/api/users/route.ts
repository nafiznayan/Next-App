import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  // fetch data from db
  // return 404 if not found
  // else return data
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // validate the req body
  // if invalid, return 404
  // else return 201
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user) {
    return NextResponse.json({ error: "user already exist" }, { status: 400 });
  }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(newUser, { status: 201 });
}

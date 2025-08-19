// app/api/user/login/route.ts

import { prismaClient } from "@/utils/prisma";
import { LoginUserRequest, LoginUserResponse } from "@/lib/type/user.type";
import WebResponse from "@/lib/type/web.type";
import UserValidation from "@/lib/validation/user.validation";
import { ValidationService } from "@/utils/zod";
import { NextResponse } from "next/server";
import { checkHashedPassword } from "@/utils/bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(
  req: Request
): Promise<NextResponse<WebResponse<LoginUserResponse>>> {
  const body: LoginUserRequest = await req.json();

  try {
    ValidationService.validate(UserValidation.LOGIN, body);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message, status: false },
      { status: 400 }
    );
  }

  const user = await prismaClient.user.findFirst({
    where: { username: body.username },
  });

  if (!user) {
    return NextResponse.json(
      { status: false, message: "Username atau password salah" },
      { status: 401 }
    );
  }

  const isPasswordValid = await checkHashedPassword(
    body.password,
    user.password
  );

  if (!isPasswordValid) {
    return NextResponse.json(
      { status: false, message: "Username atau password salah" },
      { status: 401 }
    );
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET tidak ditemukan di environment variables.");
  }

  const token = jwt.sign({ kode: user.kode, username: user.username }, secret, {
    expiresIn: "1h",
  });

  const serializedCookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60,
    path: "/",
  });

  return NextResponse.json(
    { status: true, message: "Login berhasil" },
    { status: 200, headers: { "Set-Cookie": serializedCookie } }
  );
}

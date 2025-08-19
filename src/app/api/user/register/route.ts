import { RegisterUserResponse } from "@/lib/type/user.type";
import WebResponse from "@/lib/type/web.type";
import UserValidation from "@/lib/validation/user.validation";
import { hashingPassword } from "@/utils/bcrypt";
import { prismaClient } from "@/utils/prisma";
import { ValidationService } from "@/utils/zod";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
): Promise<NextResponse<WebResponse<RegisterUserResponse>>> {
  const body = await req.json();

  try {
    ValidationService.validate(UserValidation.REGISTER, body);
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
        status: false,
      },
      { status: 400 }
    );
  }

  const user = await prismaClient.user.findFirst({
    where: {
      username: body.username,
    },
  });

  if (user) {
    return NextResponse.json({
      status: false,
      message: "Username sudah digunakan",
    });
  }

  const hashedPassword = await hashingPassword(body.password);
  body.password = hashedPassword;

  const result = await prismaClient.user.create({
    data: {
      kode: "test",
      username: body.username,
      password: body.password,
      nama: body.nama,
      jabatan: body.jabatan,
      role: body.role,
    },
  });

  return NextResponse.json(
    {
      status: true,
      message: "Berhasil",
      data: {
        kode: result.kode,
      },
    },
    { status: 200 }
  );
}
